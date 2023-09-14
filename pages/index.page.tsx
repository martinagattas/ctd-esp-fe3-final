import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic as ComicsType } from 'types/comic.types';
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { ComicsGrid } from 'dh-marvel/components/comics/comic-grid.component';

interface Props{
    comics: ComicsType[]
}

const IndexPage: NextPage<Props> = ( {comics}:Props ) => {
    return (
        <>
            <Head>
                <title>Marvel comics</title>
                <meta property="og:title" content="Marvel comics" key="title"></meta>
                <meta name="description" content="Explore our Marvel's comics store"/>
                <meta charSet="utf-8"/>
                <meta name="Marvel, comics, comic, store, buy comics, comics store"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <BodySingle title={"Marvel comics"}>
                <ComicsGrid comics={comics}></ComicsGrid>
            </BodySingle>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ( { res, req } ) => {
    const comics = await getComics(0, 12);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate'
    )

    return {
        props: {
            comics: comics.data.results
        }
    }
}

export default IndexPage;