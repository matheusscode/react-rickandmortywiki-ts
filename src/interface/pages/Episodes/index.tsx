import { useState, useEffect } from "react";
import Cards from "../../../components/Card";
import { CharacterProps, FetchedEpisodeProps } from "../../../types";
import * as C from "./styles";
import { Container } from "../../../styles/PageStyled";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default function Episodes() {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [episode, setEpisode] = useState<FetchedEpisodeProps>({
    id: 1,
    name: "",
    air_date: "",
    episode: "",
    characters: [],
    url: "",
    created: "",
  });
  const { air_date, episode: season, name, id } = episode;
  const [selectedEpisode, setSelectedEpisode] = useState<number>(1);

  const apiUrl = `https://rickandmortyapi.com/api/episode/${selectedEpisode}`;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const characterData = await Promise.all(
          episode.characters.map((characterUrl: string) =>
            fetch(characterUrl).then((res) => res.json())
          )
        );
        setCharacters(characterData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchEpisode = async () => {
      try {
        const response = await fetch(apiUrl);
        const episodeData: FetchedEpisodeProps = await response.json();
        setEpisode(episodeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
    fetchEpisode();
  }, [apiUrl, episode]);

  const handleEpisodeClick = (episodeNumber: number) => {
    setSelectedEpisode(episodeNumber);
  };

  const renderCards = () => {
    if (!characters || characters.length === 0) {
      return <div>Não encontrado</div>;
    }

    return <Cards page="/episodes/episode" results={characters} />;
  };

  return (
    <Container>
      <C.EpisodeInfo>
        <C.EpisodeDescription>
          <p>
            Episode: <span>{name}.</span>
          </p>
          <p>
            Date: <span>{air_date}.</span>
          </p>
          <p>
            Season: <span>{season}.</span>
          </p>

          <Link className="view-episode" to={`/episodes/episode/${id}`}>View Details</Link>
        </C.EpisodeDescription>
      </C.EpisodeInfo>

      <C.Main>
        <C.FiltersColumn>
          <h1>Select an episode:</h1>
          <C.List id="episode-list">
            {Array.from({ length: 51 }, (_, i) => i + 1).map(
              (episodeNumber) => (
                <C.ListItem key={episodeNumber}>
                  <Button
                    style="button"
                    event={() => handleEpisodeClick(episodeNumber)}
                  >
                    Episode {episodeNumber}
                  </Button>
                </C.ListItem>
              )
            )}
          </C.List>
        </C.FiltersColumn>
        <C.CardsColumn>
          <C.CardsWrapper>{renderCards()}</C.CardsWrapper>
        </C.CardsColumn>
      </C.Main>
    </Container>
  );
}
