import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { Comic as ComicType } from "types/comic.types";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { CartDetail } from "dh-marvel/components/checkout/cart-detail.component";
import { FormManager } from "dh-marvel/components/checkout/form.component";
import Grid from '@mui/material/Grid';
import CircularProgress from "@mui/material/CircularProgress";
import { getCookie } from "dh-marvel/services/cookies/cookies.service";

const Checkout = () => {
    const router = useRouter();
    const { comic } = router.query;
    const [comicData, setComicData] = useState<ComicType | null>();

    useEffect(() => {
        const id = parseInt(comic as string);

        if (comic) {
            getComic(id).then((data) => {
                setComicData(data);
            });
        }

        const authorizedAccess = getCookie("authorizedAccess");

        if (!comic || !authorizedAccess) {
            router.push('/');
        }
    }, [comic]);

    return (
        <Grid container sx={{ position: 'relative' }}>
            {comicData ?
                <>
                    <Grid item xs={12} sm={6} sx={{ padding: '16px' }}>
                        <CartDetail comic={comicData}></CartDetail>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '16px' }}>
                        <FormManager comic={comicData} />
                    </Grid>
                </>
                : <Grid item xs={12} sx={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                </Grid>
            }
        </Grid>
    )
}

(Checkout as any).Layout = LayoutCheckout;

export default Checkout;