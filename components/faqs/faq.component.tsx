import { FC } from "react";
import { Faqs } from "types/faqs.types";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props{
    faq: Faqs
}

export const Faq: FC<Props> = ( { faq }:Props ) => {
    return(
        <Accordion key={faq.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${faq.id}-content`}
                id={`panel${faq.id}-header`}
            >
                <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{faq.answer}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}