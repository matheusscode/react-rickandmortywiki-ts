import { useEffect, useState } from "react";
import Cards from "../../../components/Card";
import { Container } from "../../../styles/PageStyled";
import * as C from "./styles";
import type { FetchedDataProps } from "../../../types";
import Pagination from "../../../components/Pagination";
import Input from "../../../components/Input";
import Filters from "../../../components/Filters";

export default function Characters() {
  const [pageNumber, setPageNumber] = useState(1);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [search, setSearch] = useState("");
  const [fetchedData, setFetchedData] = useState<FetchedDataProps>({
    info: null,
    results: [],
  });

  const handleSearchCharacter = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pageNumber, search, species, status, gender]);

  const hasResults = fetchedData.results && fetchedData.results.length > 0;
  const cards = hasResults ? (
    <Cards page="/characters/character" results={fetchedData.results} />
  ) : (
    <div>Não encontrado</div>
  );

  return (
    <Container>
      <h1 className="title">Characters</h1>
      <C.SearchBarContainer>
        <Input
          id="search"
          value={search}
          event={handleSearchCharacter}
          ariaLabel="srch-input"
          name="search-input"
          placeholder="Search..."
          style="search-character"
          type="text"
        />
      </C.SearchBarContainer>
      <C.Main>
        <C.FiltersColumn>
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
        </C.FiltersColumn>
        <C.CardsColumn>
          <C.CardsWrapper>{cards}</C.CardsWrapper>
          <Pagination
            pageNumber={pageNumber}
            fetchedData={fetchedData}
            setPageNumber={setPageNumber}
          />
        </C.CardsColumn>
      </C.Main>
    </Container>
  );
}
