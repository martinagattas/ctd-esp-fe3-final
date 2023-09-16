import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getComicById } from "dh-marvel/services/comic/comic.service";
import { Comic as ComicType } from "types/comic.types";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { CartDetail } from "dh-marvel/components/checkout/cart-detail.component";
import { FormManager } from "dh-marvel/components/checkout/form.component";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import { getCookie } from "dh-marvel/services/cookies/cookies.service";

const Checkout = () => {
    const router = useRouter();
    const { comic } = router.query;
    const [comicData, setComicData] = useState<ComicType | null>();

    useEffect(() => {
        const id = parseInt(comic as string);

        if (comic) {
            getComicById(id).then((data) => {
                setComicData(data);
            });
        }

        const authorizedAccess = getCookie("authorizedAccess");

        if (!comic || !authorizedAccess) {
            router.push('/');
        }
    }, [comic]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {comicData ?
                <>
                    <Box sx={{ maxWidth: '500px', margin: '0 auto', marginBottom: '32px' }}>
                        <CartDetail comic={comicData}></CartDetail>
                    </Box>
                    <Box sx={{ maxWidth: '500px', margin: '0 auto', }}>
                        <FormManager comic={comicData} />
                    </Box>
                </>
                : <CircularProgress />
            }
        </Box>
    )
}

(Checkout as any).Layout = LayoutCheckout;

export default Checkout;