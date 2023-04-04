import { useState, useEffect } from "react";
import Cards from "../../../components/Card";
import { CharacterProps, FetchedLocationProps } from "../../../types";
import * as C from "./styles";
import { Container } from "../../../styles/PageStyled";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default function Locations() {
  const [results, setResults] = useState<CharacterProps[]>([]);
  const [info, setInfo] = useState<FetchedLocationProps>({
    id: 0,
    name: "",
    type: "",
    dimension: "",
    residents: [],
    url: "",
    created: "",
  });
  const { name, type, dimension, id } = info;
  const [selectedLocation, setSelectedLocation] = useState<number>(1);

  const apiUrl = `https://rickandmortyapi.com/api/location/${selectedLocation}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data: FetchedLocationProps = await response.json();
        setInfo(data);
        const residentsData = await Promise.all(
          data.residents.map((ResidentUrl: string) =>
            fetch(ResidentUrl).then((res) => res.json())
          )
        );
        setResults(residentsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const handleLocationClick = (location: number) => {
    setSelectedLocation(location);
  };

  const resultsAvailable = results && results.length > 0;
  const cards = resultsAvailable ? (
    <Cards page="/locations/location" results={results} />
  ) : (
    <div>Não encontrado</div>
  );

  return (
    <Container>
      <h1 className="title">Location</h1>
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
          <Link className="view-location" to={`/locations/location/${id}`}>
            View Location
          </Link>
        </C.LocationDescription>
      </C.LocationInfo>
      <C.Main>
        <C.FiltersColumn>
          <h1>Select an episode:</h1>
          <C.List>
            {Array.from({ length: 126 }, (_, i) => i + 1).map((location) => (
              <C.ListItem key={location}>
                <Button
                  style="button"
                  event={() => handleLocationClick(location)}
                >
                  Location - {location}
                </Button>
              </C.ListItem>
            ))}
          </C.List>
        </C.FiltersColumn>
        <C.CardsColumn>
          <C.CardsWrapper>{cards}</C.CardsWrapper>
        </C.CardsColumn>
      </C.Main>
    </Container>
  );
}
