import { Comic as ComicType } from "dh-marvel/features/comics/comic.types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";
import { CartDetail } from "dh-marvel/components/checkout/cart-detail.component";
import FormManager from "dh-marvel/components/checkout/form.component";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import Grid from '@mui/material/Grid';

interface Props{
    comic: ComicType
}

const Checkout: NextPage<Props> = ( { comic }:Props ) => {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} sx={{padding: '16px'}}>
                <CartDetail comic={comic}></CartDetail>
            </Grid>
            <Grid item xs={12} sm={6} sx={{padding: '16px'}}>
                <FormManager />
            </Grid>
        </Grid>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const comics = await getComics();

    const paths = comics.data.results?.map((comic: ComicType) => {
        return {
            params: { id: comic.id.toString() }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = Number(params?.id);
    const comic = await getComic(id);

    return {
        props: {
            comic
        }
    }
}

(Checkout as any).Layout = LayoutCheckout;

export default Checkout;