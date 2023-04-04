import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
`;

export const EpisodeInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  max-width: 700px;
  width: 100%;

  .button-icon {
    font-size: 2.5rem;
  }

  .button-next,
  .button-prev {
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.4s ease;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 1;
  }

  .button-next {
    right: 150px;
  }

  .button-prev {
    left: 150px;
  }

  .button-next:hover,
  .button-prev:hover {
    background-color: #265df2;
    color: #ffffff;
  }

  @media only screen and (max-width: 950px) {
    gap: 1rem;

    .button-icon {
      font-size: 1.5rem;
    }

    .button-next {
      right: 20px;
    }

    .button-prev {
      left: 20px;
    }

    .button-next:hover,
    .button-prev:hover {
      background-color: #b2df28;
      color: #101010;
    }
  }
`;

export const EpisodeDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  border-radius: 30px;

  h2 {
    font-weight: 700;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 700;
  }

  span {
    color: #265df2;
  }

  .view {
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

  .view:hover {
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
  justify-content: justify;
  flex-wrap: wrap;
  gap: 3.4rem;

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
