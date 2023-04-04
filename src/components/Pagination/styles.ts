import styled from "styled-components";

type PageButtonProps = {
  isActive: boolean;
};

export const PaginationContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.8rem 1.2rem;
  color: #ffffff;
  background-color: #265df2;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 10px;

  &:hover {
    background-color: #265da1;
  }
`;

export const PageButton = styled.button<PageButtonProps>`
  cursor: pointer;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  color: ${(props) => (props.isActive ? "#ffffff" : "#101010")};
  background-color: ${(props) => (props.isActive ? "#265df1" : "#d3d3d3")};
`;
