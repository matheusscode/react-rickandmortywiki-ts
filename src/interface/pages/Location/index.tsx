import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "../../../styles/PageStyled";
import { useState, useEffect } from "react";
import * as C from "./styles";
import { CharacterProps, FetchedLocationProps } from "../../../types";
import Cards from "../../../components/Card";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../../components/Button";

export default function Location() {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [location, setLocation] = useState<FetchedLocationProps>({
    id: 0,
    name: "",
    type: "",
    dimension: "",
    residents: [],
    url: "",
    created: "",
  });
  const { name, type, dimension } = location;
  const { id = "" } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const apiUrl = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(apiUrl);
        const data: FetchedLocationProps = await response.json();
        setLocation(data);
        const residentsData = await Promise.all(
          data.residents.map((ResidentUrl: string) =>
            fetch(ResidentUrl).then((res) => res.json())
          )
        );
        setCharacters(residentsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocation();
  }, [location, characters]);

  const charactersAvailable = characters && characters.length > 0;
  const cards = charactersAvailable ? (
    <Cards page="/characters/character" results={characters} />
  ) : (
    <div>Não encontrado</div>
  );

  const handleNextCharacter = () => {
    const nextId = parseInt(id, 10) + 1;
    navigate(`/locations/location/${nextId}`);
  };

  const handlePrevCharacter = () => {
    const characterId = parseInt(id, 10);
    const prevId = characterId > 1 ? characterId - 1 : 1;
    navigate(`/locations/location/${prevId}`);
  };

  return (
    <Container>
      <C.SubContainer>
        <Button style="button-prev" event={handlePrevCharacter}>
          <AiOutlineArrowLeft className="button-icon" />
        </Button>
        <C.LocationInfo>
          <C.LocationDescription>
            <p>
              Name: <span>{name}.</span>
            </p>
            <p>
              Dimension: <span>{dimension}.</span>
            </p>
            <p>
              Type: <span>{type}.</span>
            </p>
            <Link to="/locations" className="view-location">
              View more locations
            </Link>
          </C.LocationDescription>
        </C.LocationInfo>
        <Button style="button-next" event={handleNextCharacter}>
          <AiOutlineArrowRight className="button-icon" />
        </Button>
      </C.SubContainer>
      <C.CardsColumn>
        <C.CardsWrapper>{cards}</C.CardsWrapper>
      </C.CardsColumn>
    </Container>
  );
}
