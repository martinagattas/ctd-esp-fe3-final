import { FC } from "react";
import { ComicCard } from "./comic-card.component";
import { Comic as ComicsType } from "types/comic.types";
import Grid from '@mui/material/Grid';

interface Props {
    comics: ComicsType[]
}

export const ComicsGrid: FC<Props> = ({ comics }: Props) => {
    return (
        <Grid container spacing={2}>
            {comics?.map((comic) => (
                <Grid key={comic.id} item xs={12} sm={4} md={3}>
                    <ComicCard comic={comic}></ComicCard>
                </Grid>
            ))}
        </Grid>
    )
}