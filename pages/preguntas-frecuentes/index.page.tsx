// import { GetStaticProps, NextPage } from "next";
// import Head from 'next/head';
// import { Faqs } from "types/faqs.types";
// import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
// import { Faq } from "dh-marvel/components/faqs/faq.component";

// interface Props{
//     faqs: Faqs[]
// }

// const FaqsPage: NextPage<Props> = ( { faqs }:Props ) => {
//     return(
//         <>
//             <Head>
//                 <title>Marvel comics - FAQs</title>
//                 <meta property="og:title" content="Marvel comics - FAQs" key="title"></meta>
//                 <meta name="description" content="Explore our Marvel's comics store" />
//                 <meta charSet="utf-8" />
//                 <meta name="Marvel, comics, comic, store, buy comics, comics store" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <BodySingle title={"Preguntas frecuentes"}>
//                 {faqs?.map((faq) => (
//                     <Faq key={faq.id} faq={faq}></Faq>
//                 ))}
//             </BodySingle>
//         </>
//     )
// }

// export const getStaticProps: GetStaticProps = async () => {
//     const url = 'http://localhost:3000';
//     const response = await fetch(`${url}/api/faqs`);
//     const faqs = await response.json();

//     return {
//         props: {
//             faqs
//         }
//     }
// }

// export default FaqsPage;

import React from 'react'

export const Vercel = () => {
  return (
    <div>Vercel</div>
  )
}