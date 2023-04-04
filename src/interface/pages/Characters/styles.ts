import styled from "styled-components";

export const SearchBarContainer = styled.form`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .search-character {
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    min-width: 350px;
    font-weight: 600;
    border: 2px solid transparent;
    transition: 0.4s ease;

    &:focus {
      border-color: #265df2;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  gap: 2rem;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const FiltersColumn = styled.aside`
  display: flex;
  flex-flow: column;
  width: 400px;
  height: 750px;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: 10px;

  @media only screen and (max-width: 1300px) {
    width: 100%;
    height: 100%;
  }
`;

export const CardsColumn = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 6rem;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 1rem;

  @media only screen and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;
