import styled from "styled-components";

export const Atom = styled.div`
  position: relative;
  display: flex;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #06d6a0;
    box-shadow: inset 0 0 10px #265df2;
    border-radius: 50%;
  }

  .line {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`;

export const FirstLine = styled.div`
  color: #265df2;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-bottom: 10px solid #265df2;
  border-top: 10px solid #06d6a0;
  animation: animate1 2s linear infinite;
  filter: drop-shadow(0 0 10px #265df2);

  @keyframes animate1 {
    0% {
      transform: rotateY(70deg) rotateZ(0deg);
    }
    100% {
      transform: rotateY(70deg) rotateZ(360deg);
    }
  }
`;

export const SecondLine = styled.div`
  color: #265df2;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-right: 10px solid #265df2;
  border-left: 10px solid #06d6a0;
  animation: animate2 3s linear infinite;
  filter: drop-shadow(0 0 10px #265df2);

  @keyframes animate2 {
    0% {
      transform: rotateX(80deg) rotateY(25deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(80deg) rotateY(25deg) rotateZ(360deg);
    }
  }
`;

export const ThirdLine = styled.div`
  color: #265df2;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-right: 10px solid #265df2;
  border-left: 10px solid #06d6a0;
  animation: animate3 3s linear infinite;
  filter: drop-shadow(0 0 10px #265df2);

  @keyframes animate3 {
    0% {
      transform: rotateX(-80deg) rotateY(25deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-80deg) rotateY(25deg) rotateZ(360deg);
    }
  }
`;
