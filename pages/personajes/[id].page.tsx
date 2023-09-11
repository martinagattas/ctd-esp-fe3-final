import { GetServerSideProps, NextPage } from "next";
import { Character as CharacterType } from "dh-marvel/features/characters/character.types";
import { CharacterDetail } from "dh-marvel/components/characters/character-detail.component";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";

interface Props {
    character: CharacterType
}

const CharactersPage: NextPage<Props> = ({ character }: Props) => {
    return (
        <CharacterDetail character={character}></CharacterDetail>
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