import styled from "styled-components";

export const FilterButtonWrapper = styled.div`
  .filter-input:checked + .label {
    background-color: #0b5ed7;
    color: white;
  }

  .filter-input[type="radio"] {
    display: none;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #0b5ed7;
  background-color: transparent;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid #0b5ed7;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.4s ease all;

  &:hover {
    background-color: #0b5ed7;
    color: white;
  }
`;
