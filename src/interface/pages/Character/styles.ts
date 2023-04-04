import styled from "styled-components";

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

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
    right: -30px;
    top: 300px;
  }

  .button-prev {
    left: -30px;
    top: 300px;
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
      top: 200px;
    }

    .button-prev {
      left: 20px;
      top: 200px;
    }

    
  .button-next:hover,
  .button-prev:hover {
    background-color: #b2df28;
    color: #101010;
  }
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  height: 100%;
  max-width: 1000px;
  margin-top: 4rem;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 0 0 0;

  p {
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    color: #265df2;
  }

  @media only screen and (max-width: 950px) {
    padding: 0;
  }
`;

export const Data = styled.div`
  padding: 2rem 0 2rem 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;

  @media only screen and (max-width: 950px) {
    display: flex;
    justify-content: left;
  }
`;

export const Line = styled.div`
  width: 1px;
  padding: 0.07rem;
  height: 170px;
  background-color: #265df2;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: #b2df28;
    top: -2px;
    padding: 0.4rem;
    left: -9px;
    z-index: 2;
    border: 3px solid #265df2;
    width: 1px;
    height: 1px;
    border-radius: 50%;
  }
`;

export const ImageContainer = styled.div`
  background-color: #265df2;
  padding: 2rem;
  border-radius: 30px 0 50% 0;
  position: relative;

  span {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 2rem;
    color: #ffffff;
  }

  .image {
    border-radius: 50%;
    padding: 0.6rem;
    border: 10px solid #ffffff;
    width: 250px;
    height: 250px;
  }

  @media only screen and (max-width: 950px) {
    display: flex;
    justify-content: center;
    border-radius: 30px 30px 50% 0;
  }

  @media only screen and (max-width: 700px) {
    .image {
      width: 200px;
      height: 200px;
    }
  }
`;

export const SecondColumn = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 570px;
  width: 100%;
  padding: 2rem;
`;

export const Episodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  height: 250px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #265df2;
    border-radius: 5px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0 1rem 0 0;
  }

  ul li .button {
    width: 100%;
    text-align: left;
    padding: 1rem;
    font-weight: 900;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  ul li .button:hover {
    color: #ffffff;
    background-color: #265df2;
  }
`;

export const EpisodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
  gap: 2rem;

  .view-cast {
    padding: 1rem;
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

  .view-cast:hover {
    color: #ffffff;
    background-color: #265df2;
  }
`;

export const EpisodeDescription = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  width: 100%;

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
`;
