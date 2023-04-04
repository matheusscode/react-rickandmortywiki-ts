import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  border-radius: 30px;
  background-color: #265df2;
  width: 250px;
  height: 339px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.03);
  }

  @media only screen and (max-width: 660px) {
    width: 300px;
  }
`;

export const CardHeader = styled.div`
  position: relative;
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 105px;
  width: 105px;
  background-color: #fff;
  border-radius: 50%;

  .img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #265df2;
  }
`;

export const CardBody = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 155px;
  border-radius: 0 25px 30px 30px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:before {
    content: " ";
    width: 30px;
    border-radius: 0 0 0 30px;
    height: 20px;
    position: absolute;
    background: #265df2;
    top: -20px;
    z-index: 1;
  }

  &:after {
    content: " ";
    position: absolute;
    width: 20px;
    height: 20px;
    top: -19px;
    border-radius: 0 30px 0 0;
    background-color: #fff;
  }
`;

export const CardDescription = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    font-size: 1rem;
    color: #505050;
    font-weight: 500;
  }

  span {
    color: #265df2;
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.4rem;

  h1 {
    font-size: 0.8rem;
    color: #fff;
    font-weight: 800;
  }

  span {
    font-size: 0.8rem;
    color: #fff;
    font-weight: 600;
  }
`;

export const CharacterStatus = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  font-weight: 600;

  .dead {
    background-color: red;
    border-radius: 0 30px 0 30px;
    padding: 0.6rem 1rem;
  }

  .alive {
    background-color: green;
    border-radius: 0 30px 0 30px;
    padding: 0.6rem 1rem;
  }

  .unknown {
    background-color: #808080;
    border-radius: 0 30px 0 30px;
    padding: 0.6rem 1rem;
  }
`;
