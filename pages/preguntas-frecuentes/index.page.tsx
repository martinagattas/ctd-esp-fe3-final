import { GetStaticProps, NextPage } from "next";
import { FaqsType } from "dh-marvel/components/faqs/faqsData";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Faq from "dh-marvel/components/faqs/faq.component";

interface Props{
    faqs: FaqsType[];
}

const FaqsPage: NextPage<Props> = ( { faqs }:Props ) => {
    return(
        <BodySingle title={"Preguntas frecuentes"}>
            {faqs?.map((faq) => (
                <Faq faq={faq}></Faq>
            ))}
        </BodySingle>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const url = 'http://localhost:3000';
    const response = await fetch(`${url}/api/faqs`);
    const faqs = await response.json();

    return {
        props: {
            faqs
        }
    }
}

export default FaqsPage;