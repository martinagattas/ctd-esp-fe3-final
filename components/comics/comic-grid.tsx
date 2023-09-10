import { NextPage } from "next";
import { Comic as ComicsType } from "dh-marvel/features/comics/comic.types";
import Grid from '@mui/material/Grid';
import { ComicCard } from "./comic-card";

interface Props {
    comics: ComicsType[];
}

export const ComicsGrid: NextPage<Props> = ({ comics }: Props) => {
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