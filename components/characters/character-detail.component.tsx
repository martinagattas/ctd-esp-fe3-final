import { NextPage } from "next";
import { Character as CharacterType } from "dh-marvel/features/characters/character.types";
import BodySingle from "../layouts/body/single/body-single";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import { List, ListItem } from "@mui/material";

interface Props {
    character: CharacterType
}

export const CharacterDetail: NextPage<Props> = ({ character }: Props) => {
    return (
        <BodySingle>
            <Grid container spacing={2} sx={{ margin: '0 !important', width: '100%' }}>
                <Grid item xs={12} sm={6} sx={{ padding: '16px !important' }}>
                    <Image
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ padding: '16px !important' }}>
                    <Box mb={2}>
                        <Typography component="div" variant="h5">{character.name}</Typography>
                        <Typography component="div" variant="body1" color="text.secondary">{character.description}</Typography>
                    </Box>
                    {character.stories.items.length > 0 &&
                        <Box>
                            <Typography component="div" variant="subtitle1">Stories:</Typography>
                            <List>
                                {character.stories.items.map((serie) => (
                                    <ListItem>{serie.name}</ListItem>
                                ))}
                            </List>
                        </Box>
                    }
                    {character.events.items.length > 0 &&
                        <Box>
                            <Typography component="div" variant="subtitle1">Events:</Typography>
                            <List>
                                {character.events.items.map((serie) => (
                                    <ListItem>{serie.name}</ListItem>
                                ))}
                            </List>
                        </Box>
                    }
                    {character.series.items.length > 0 &&
                        <Box>
                            <Typography component="div" variant="subtitle1">Series:</Typography>
                            <List>
                                {character.series.items.map((serie) => (
                                    <ListItem>{serie.name}</ListItem>
                                ))}
                            </List>
                        </Box>
                    }
                </Grid>
            </Grid>
        </BodySingle>
    )
}