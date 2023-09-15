import { useEffect, useState } from "react";
import { Checkout } from "types/checkout.types";
import { useRouter } from "next/router";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { CheckCircleOutline } from "@mui/icons-material";

const Confirmation = () => {
    const router = useRouter();
    const [checkoutData, setCheckoutData] = useState<Checkout>();

    useEffect(() => {
        const storedJsonData = localStorage.getItem('checkoutdata');

        if (storedJsonData) {
            setCheckoutData(JSON.parse(storedJsonData));
        } else{
            router.push('/');
        }
    }, [router]);

    const handleGoHome = () => {
        router.push('/');
    }

    return (
        <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            {checkoutData ?
                <>
                    <Card sx={{ maxWidth: '320px', marginBottom: '16px' }}>
                        <CardContent sx={{ backgroundColor: '#2e7d32' }}>
                            <Typography gutterBottom variant="h5" component="div" mb={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#fff' }}><CheckCircleOutline></CheckCircleOutline> ¡Que disfrutes tu compra!</Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            alt={checkoutData?.order.name}
                            image={checkoutData?.order.image}
                            sx={{maxHeight: '200px'}}
                        />
                        <CardContent sx={{ padding: '8px' }}>
                            <Typography gutterBottom variant="h5" component="div" mb={2}>{checkoutData?.order.name}</Typography>
                            <Typography gutterBottom variant="body1" component="div" mb={0} sx={{ fontWeight: 'bold' }}>Datos personales:</Typography>
                            <Typography gutterBottom variant="body1" component="div" mb={0}>{checkoutData?.customer.name} {checkoutData?.customer.lastname}</Typography>
                            <Typography gutterBottom variant="body1" component="div" mb={0}>{checkoutData?.customer.email}</Typography>
                            <Typography gutterBottom variant="body1" component="div" mb={2}>{checkoutData?.customer.address.address1}. {checkoutData?.customer.address.state}, {checkoutData?.customer.address.city} - {checkoutData?.customer.address.zipCode}</Typography>
                            <Typography gutterBottom variant="body1" component="div" mb={0} sx={{ fontWeight: 'bold' }}>Precio: $ {checkoutData?.order.price}</Typography>
                        </CardContent>
                    </Card>
                    <Button size="small" variant="outlined" onClick={handleGoHome}>Volver al inicio</Button>
                </>
            : <CircularProgress />
            }
        </Box>
    )
}

(Confirmation as any).Layout = LayoutCheckout;

export default Confirmation;