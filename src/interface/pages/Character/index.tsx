import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CharacterProps, FetchedEpisodeProps } from "../../../types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/all";
import { Container } from "../../../styles/PageStyled";
import * as C from "./styles";
import Button from "../../../components/Button";

export default function Character() {
  const [characterData, setCharacterData] = useState<CharacterProps>();
  const [episodes, setEpisodes] = useState<FetchedEpisodeProps[]>([]);
  const [selectedEpisode, setSelectedEpisode] =
    useState<FetchedEpisodeProps | null>(null);
  const { id = "" } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCharacterData(data);

        const episodeIds = data.episode.map((episodeUrl: string) =>
          episodeUrl.split("/").pop()
        );
        const episodesUrl = `https://rickandmortyapi.com/api/episode/${episodeIds.join(
          ","
        )}`;
        const episodesResponse = await fetch(episodesUrl);
        const episodesData = await episodesResponse.json();
        const episodesArray = Array.isArray(episodesData)
          ? episodesData
          : [episodesData];
        setEpisodes(episodesArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!characterData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    image,
    status,
    species,
    created,
    episode,
    gender,
    location,
    origin,
    type,
    url,
  } = characterData;

  const characterEpisodes = episodes.filter((episode) =>
    episode.characters.includes(url)
  );

  const handleSelectedEpisode = (episode: FetchedEpisodeProps) => {
    setSelectedEpisode(episode);
  };

  const handleNextCharacter = () => {
    const nextId = parseInt(id, 10) + 1;
    navigate(`/characters/character/${nextId}`);
  };

  const handlePrevCharacter = () => {
    const characterId = parseInt(id, 10);
    const prevId = characterId > 1 ? characterId - 1 : 1;
    navigate(`/characters/character/${prevId}`);
  };

  return (
    <Container>
      <C.SubContainer>
        <Button style="button-prev" event={handlePrevCharacter}>
          <AiOutlineArrowLeft className="button-icon" />
        </Button>
        <C.Main>
          <C.FirstColumn>
            <C.ImageContainer>
              <span>#{id}</span>
              <img src={image} alt={name} className="image" />
            </C.ImageContainer>
            <C.Data>
              <C.Line />
              <div>
                <p>
                  Name: <span>{name}</span>
                </p>
                <p>
                  Gender: <span>{gender}</span>
                </p>
                <p>
                  Specie: <span>{species}</span>
                </p>
                <p>
                  Location: <span>{location.name}</span>
                </p>
                <p>
                  Origin: <span>{origin.name}</span>
                </p>
                <p>
                  Status: <span>{status}</span>
                </p>
                <p>
                  Created: <span>{created}</span>
                </p>
              </div>
            </C.Data>
          </C.FirstColumn>
          <C.SecondColumn>
            <h1>Appearance in episodes:</h1>
            <br />
            <C.Episodes>
              <ul>
                {characterEpisodes.map((item) => (
                  <li key={item.id}>
                    <Button
                      event={() => handleSelectedEpisode(item)}
                      style="button"
                    >
                      Episode - {item.id}
                    </Button>
                  </li>
                ))}
              </ul>
            </C.Episodes>

            <C.EpisodeInfo>
              {selectedEpisode && (
                <>
                  <C.EpisodeDescription>
                    <h2>
                      Episode: <span>{selectedEpisode.name}</span>
                    </h2>
                    <p>
                      Air date:<span> {selectedEpisode.air_date}</span>
                    </p>
                    <p>
                      Episode: <span>{selectedEpisode.episode}</span>
                    </p>
                    <p>
                      Created: <span>{selectedEpisode.created}</span>
                    </p>
                  </C.EpisodeDescription>
                  <Link
                    to={`/episodes/episode/${selectedEpisode.id}`}
                    className="view-cast"
                  >
                    View Cast
                  </Link>
                </>
              )}
            </C.EpisodeInfo>
          </C.SecondColumn>
        </C.Main>
        <Button style="button-next" event={handleNextCharacter}>
          <AiOutlineArrowRight className="button-icon" />
        </Button>
      </C.SubContainer>
    </Container>
  );
}
