import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { Comic as ComicType } from "types/comic.types";
import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";
import { ComicDetail } from "dh-marvel/components/comics/comic-detail.component";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

interface Props{
    comic: ComicType
}

const ComicsPage: NextPage<Props> = ( { comic }:Props ) => {
    return(
        <>
            <Head>
                <title>{comic?.title}</title>
                <meta property="og:title" content={comic?.title} key="title"></meta>
                <meta name="description" content={comic?.description} />
                <meta charSet="utf-8"/>
                <meta name="Marvel, comics, comic, store, buy comics, comics store"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {comic ?
                <ComicDetail comic={comic}></ComicDetail>
                : <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <CircularProgress />
            </Box>
            }
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const comics = await getComics();

    const paths = comics.data.results?.map((comic: ComicType) => {
        return{
            params: { id: comic.id.toString() }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const id = Number(params?.id);
    const comic = await getComic(id);

    return{
        props: {
            comic
        }
    }
}

export default ComicsPage;