import { NextPage } from "next";
import { Comic as ComicsType } from "dh-marvel/features/comics/comic.types";
import Grid from '@mui/material/Grid';
import { Comic } from "./comic-card";

interface Props {
    comics: ComicsType[];
}

export const Comics: NextPage<Props> = ({ comics }: Props) => {
    return (
        <Grid container spacing={2}>
            {comics?.map((comic) => (
                <Grid item xs={12} sm={4} md={3}>
                    <Comic key={comic.id} comic={comic}></Comic>
                </Grid>
            ))}
        </Grid>
    )
}