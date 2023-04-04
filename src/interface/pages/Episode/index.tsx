import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "../../../styles/PageStyled";
import { useState, useEffect } from "react";
import * as C from "./styles";
import { CharacterProps, FetchedEpisodeProps } from "../../../types";
import Cards from "../../../components/Card";
import Button from "../../../components/Button";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Episode() {
  const [episode, setEpisode] = useState<FetchedEpisodeProps | null>(null);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id?: string }>();

  const apiUrl = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setEpisode(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCharacters = async () => {
      try {
        const characterData = await Promise.all(
          episode?.characters.map((characterUrl: string) =>
            fetch(characterUrl).then((res) => res.json())
          ) || []
        );
        setCharacters(characterData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisode();
    fetchCharacters();
  }, [apiUrl, episode]);

  const hasResults = characters && characters.length > 0;
  const cards = hasResults ? (
    <Cards page="/characters/character" results={characters} />
  ) : (
    <div>Não encontrado</div>
  );

  const handleNextCharacter = () => {
    const nextId = parseInt(id, 10) + 1;
    navigate(`/episodes/episode/${nextId}`);
  };

  const handlePrevCharacter = () => {
    const characterId = parseInt(id, 10);
    const prevId = characterId > 1 ? characterId - 1 : 1;
    navigate(`/episodes/episode/${prevId}`);
  };

  return (
    <Container>
      {episode && (
        <C.Main>
          <C.EpisodeInfo>
            <Button style="button-prev" event={handlePrevCharacter}>
              <AiOutlineArrowLeft className="button-icon" />
            </Button>
            <C.EpisodeDescription>
              <h2>
                Episode: <span>{episode.name}</span>
              </h2>
              <p>
                Air date:<span> {episode.air_date}</span>
              </p>
              <p>
                Episode: <span>{episode.episode}</span>
              </p>
              <p>
                Created: <span>{episode.created}</span>
              </p>
              <Link to="/episodes" className="view">View more episodes</Link>
            </C.EpisodeDescription>
            <Button style="button-next" event={handleNextCharacter}>
              <AiOutlineArrowRight className="button-icon" />
            </Button>
          </C.EpisodeInfo>
          <C.CardsColumn>
            <h1 className="title">Cast</h1>
            <C.CardsWrapper>{cards}</C.CardsWrapper>
          </C.CardsColumn>
        </C.Main>
      )}
    </Container>
  );
}
