import { GetServerSideProps, NextPage } from "next";
import Head from 'next/head';
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { Character as CharacterType } from "types/character.types";
import { CharacterDetail } from "dh-marvel/components/characters/character-detail.component";

interface Props {
    character: CharacterType
}

const CharactersPage: NextPage<Props> = ({ character }: Props) => {
    console.log('ACÁ', character);
    return (
        <>
            <Head>
                <title>{character?.name}</title>
                <meta property="og:title" content={character?.name} key="title"></meta>
                <meta name="description" content={character?.description} />
                <meta charSet="utf-8"/>
                <meta name="Marvel, comics, comic, store, buy comics, comics store"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <CharacterDetail character={character}></CharacterDetail>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = Number(context.params?.id);
    const character = await getCharacter(id);

    return {
        props: {
            character
        }
    }
}

export default CharactersPage;