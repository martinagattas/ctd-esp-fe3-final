import { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comics } from 'types/comic.types';
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { ComicsGrid } from 'dh-marvel/components/comics/comic-grid.component';
import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

interface Props{
    comics: Comics
}

const comicsPerPage = 12;

const IndexPage: NextPage<Props> = ( {comics}:Props ) => {
    const router = useRouter();
    const [page, setPage] = useState<number>(1);

    const totalComics = comics?.data.total || 0;
    const totalPages = Math.ceil(totalComics / comicsPerPage);

    const handleChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
        router.push(`?page=${newPage}`);
    };

    const showComics = comics?.data.results || [];

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
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    <Pagination onChange={handleChange} count={totalPages} page={page} size="small" showFirstButton showLastButton color="primary" />
                </Box>
                <ComicsGrid comics={showComics}></ComicsGrid>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px', marginBottom: '32px' }}>
                    <Pagination onChange={handleChange} count={totalPages} page={page} size="small" showFirstButton showLastButton color="primary" />
                </Box>
            </BodySingle>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ( { query, res } ) => {
    const page = parseInt(query.page as string ?? '1') || 1;
    const offset = (page - 1) * comicsPerPage;
    const comics = await getComics(offset, comicsPerPage);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate'
    )

    return {
        props: {
            comics
        }
    }
}

export default IndexPage;