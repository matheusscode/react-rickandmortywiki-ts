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

export const EpisodeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EpisodeDescription = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  border-radius: 1rem;
  color: #202020;
  position: relative;

  p {
    font-size: 1.8rem;
    font-weight: 800;
  }

  span {
    color: #265df2;
  }

  
  .view-episode {
    margin-top: 1rem;
    padding: 0.8rem;
    color: #265df2;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 1rem;
    border: 2px solid #265df2;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease;
    cursor: pointer;
  }

  .view-episode:hover {
    color: #ffffff;
    background-color: #265df2;
  }
`

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
  height: 500px;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  padding: 2rem 1rem 1rem;
  border-radius: 10px;

  @media only screen and (max-width: 1300px) {
    width: 100%;
    height: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 2rem;
  padding: 0 1rem 0 0.4rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #265df2;
    border-radius: 5px;
  }
`;

export const ListItem = styled.li`
  width: 100%;

  .button {
    text-align: left;
    padding: 0.8rem;
    transition: all 0.4s ease;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  .button:hover {
    color: #ffffff;
    background-color: #265df2;
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
