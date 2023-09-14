import { FC } from "react";
import { CharacterSummary } from "types/comic.types";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";

interface Props {
    characters: CharacterSummary[]
}

export const CharactersList: FC<Props> = ({ characters }: Props) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panelCharacters-content`}
                id={`panelCharacters-header`}
            >
                <Typography>Personajes</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {characters.map((character, index) => (
                    <Typography key={index}><Link href={`/personajes/${character.resourceURI.split('/').pop()}`}>{character.name}</Link></Typography>
                ))}
            </AccordionDetails>
        </Accordion>
    )
}