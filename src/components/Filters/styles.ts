import styled from "styled-components";

interface AccordionButtonProps {
  active: boolean;
  panelHeight?: number;
}

export const FilterContainer = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  h1 {
    color: #0b5ed7;
  }

  .clear-filters {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #0b5ed7;
    color: #0b5ed7;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.4s ease;
    font-weight: 600;
  }

  .clear-filters:hover {
    background-color: #0b5ed7;
    color: #ffffff;
  }
`;

export const AccordionGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  height: 600px;

  @media only screen and (max-width: 1300px) {
    height: 100%;
  }
`;

export const AccordionButton = styled.button<AccordionButtonProps>`
  background-color: ${({ active }) => (active ? "#ccc" : "#eee")};
  color: #444;
  cursor: pointer;
  padding: 1.1rem;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionPanel = styled.div<AccordionButtonProps>`
  width: 100%;
  background-color: white;
  max-height: ${({ active, panelHeight }) =>
    active ? `${panelHeight}px` : "0"};
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;
