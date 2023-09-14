import { NextPage } from "next";
import { Comic as ComicType } from "dh-marvel/features/comics/comic.types";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from "next/image";

interface Props {
    comic: ComicType
}

export const CartDetail: NextPage<Props> = ({ comic }: Props) => {
    return (<Box sx={{display: 'flex', gap: '8px'}}>
        <Image
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
            width={100}
            height={100}
        />
        <Box>
            <Typography component="div" variant="h5">{comic.title}</Typography>
            {comic.description && <Typography component="div" variant="body1" color="text.secondary">{comic.description}</Typography>}
            <Typography component="div" variant="h4" color="primary" pt={1}>$ {comic.price}</Typography>
        </Box>
    </Box>)
}