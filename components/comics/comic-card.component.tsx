import { NextPage } from "next";
import { Comic as ComicType } from "dh-marvel/features/comics/comic.types";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";

interface Props {
    comic: ComicType;
}

export const ComicCard: NextPage<Props> = ( {comic}:Props ) => {
    const router = useRouter();

    const handleDetail = () => {
        router.push(`/comics/${comic.id}`);
    }

    const handleAddToCart = () => {
        router.push(`/checkout/${comic.id}`);
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
                <Typography gutterBottom variant="h5" component="div" mb={0}>{comic.title}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" onClick={handleDetail}>Ver detalle</Button>
                <Button size="small" variant="contained" onClick={handleAddToCart}>Comprar</Button>
            </CardActions>
        </Card>
    )
}