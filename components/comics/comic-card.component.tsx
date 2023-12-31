import { FC } from "react";
import { useRouter } from "next/router";
import { Comic as ComicType } from "types/comic.types";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { setCookie } from "dh-marvel/services/cookies/cookies.service";

interface Props {
    comic: ComicType
}

export const ComicCard: FC<Props> = ( {comic}:Props ) => {
    const router = useRouter();

    const handleDetail = () => {
        router.push(`/comics/${comic.id}`);
    }

    const handleAddToCart = async () => {
        router.push(`/checkout?comic=${comic.id}`);
        setCookie("authorizedAccess", "true", 10);
    }

    return(
        <Card>
            <CardMedia
                component="img"
                alt={comic.title}
                height="140"
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
            <CardContent sx={{padding: '8px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{height: '120px'}} mb={0}>{comic.title}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button size="small" variant="outlined" onClick={handleDetail}>Ver detalle</Button>
                <Button size="small" variant="contained" onClick={handleAddToCart}>Comprar</Button>
            </CardActions>
        </Card>
    )
}