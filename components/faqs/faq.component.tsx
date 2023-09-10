import { NextPage } from "next";
import { FaqsType } from "./faqsData";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props{
    faq: FaqsType;
}

const Faq: NextPage<Props> = ( { faq }:Props ) => {
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

export default Faq;