import { FC } from "react";
import { useRouter } from "next/router";
import { CharactersList } from "../characters/character-list.component";
import { Comic as ComicType } from "types/comic.types";
import BodySingle from "../layouts/body/single/body-single";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import { setCookie } from "dh-marvel/services/cookies/cookies.service";

interface Props {
    comic: ComicType
}

export const ComicDetail: FC<Props> = ({ comic }: Props) => {
    const router = useRouter();

    const handleAddToCart = () => {
        router.push(`/checkout?comic=${comic.id}`);
        setCookie("authorizedAccess", "true", 10);
    }

    return (
        <BodySingle>
            <Grid container spacing={2} sx={{ margin: '0 !important', width: '100%' }}>
                <Grid item xs={12} sm={6} sx={{ padding: '16px !important' }}>
                    <Image
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ padding: '16px !important' }}>
                    <Box>
                        <Typography component="div" variant="subtitle1" color="text.secondary">Serie: {comic.series.name}</Typography>
                        <Typography component="div" variant="h5">{comic.title}</Typography>
                        {comic.description && <Typography component="div" variant="body1" color="text.secondary">{comic.description}</Typography>}
                        {comic.oldPrice > comic.price &&
                            <>
                                <Typography component="div" variant="subtitle2" color="text.secondary" pt={1}>Antes: $ {comic.oldPrice}</Typography>
                                <Typography component="div" variant="subtitle2" color="text.danger" pt={1}>{Math.floor(((comic.oldPrice - comic.price) / comic.oldPrice) * 100)}% Off</Typography>
                            </>
                        }
                        <Typography component="div" variant="h4" color="primary" pt={1}>$ {comic.price}</Typography>
                    </Box>
                    <Box mt={2} mb={2}>
                        <Button variant="contained" disabled={comic.stock <= 0} onClick={comic.stock > 0 ? () => handleAddToCart() : undefined}>{comic.stock > 0 ? 'Comprar' : 'Sin stock disponible'}</Button>
                    </Box>
                    {comic.characters.items.length > 0 &&
                        <Box>
                            <CharactersList characters={comic.characters.items} />
                        </Box>
                    }
                </Grid>
            </Grid>
        </BodySingle>
    )
}