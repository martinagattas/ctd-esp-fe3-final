import { FC } from "react";
import { Character as CharacterType } from "types/character.types";
import BodySingle from "../layouts/body/single/body-single";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from "next/image";

interface Props {
    character: CharacterType
}

export const CharacterDetail: FC<Props> = ({ character }: Props) => {
    return (
        <BodySingle>
            <Grid container spacing={2} sx={{ margin: '0 !important', width: '100%' }}>
                <Grid item xs={12} sm={6} sx={{ padding: '16px !important' }}>
                    <Image
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                        width={200}
                        height={200}
                        layout="responsive"
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ padding: '16px !important' }}>
                    <Box mb={2}>
                        <Typography component="div" variant="h5">{character.name}</Typography>
                        <Typography component="div" variant="body1" color="text.secondary">{character.description}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </BodySingle>
    )
}