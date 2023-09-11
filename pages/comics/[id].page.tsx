import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Comic as ComicType } from "dh-marvel/features/comics/comic.types";
import { ComicDetail } from "dh-marvel/components/comics/comic-detail";
import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";

interface Props{
    comic: ComicType;
}

const ComicsPage: NextPage<Props> = ( { comic }:Props ) => {
    return(
        <ComicDetail comic={comic}></ComicDetail>
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