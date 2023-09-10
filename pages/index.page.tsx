import type { NextPage } from 'next';
import Head from 'next/head';
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";

const Index: NextPage = () => {
    return (
        <>
            {/* cambiar los datos del head, la metadata: favicon de Marvel y la descripción que sea dinámica */}
            <Head>
                <title>Marvel comics</title>
                <meta property="og:title" content="Marvel comics" key="title"></meta>
                <meta name="description" content="Explore our Marvel's comics store"/>
                <meta charSet="utf-8"/>
                <meta name="Marvel, comics, comic, store, buy comics, comics store"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <BodySingle title={"Marvel comics"}>
            </BodySingle>
        </>
    )
}

export default Index;