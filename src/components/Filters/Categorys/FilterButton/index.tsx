import { FilterButtonProps } from "../../../../types";
import Input from "../../../Input";
import { ItemsContainer } from "../styles";
import * as C from "./styles";

export default function FilterButton({
  index,
  input,
  name,
  setPageNumber,
  task,
}: FilterButtonProps) {

  return (
    <C.FilterButtonWrapper>
      <Input
        id={`${name}-${index}`}
        type="radio"
        name={name}
        ariaLabel="filter-input"
        style="filter-input"
      />
      <C.Label
        className="label"
        onClick={() => {
          task(input);
          setPageNumber(1);
        }}
        htmlFor={`${name}-${index}`}
      >
        {input}
      </C.Label>
    </C.FilterButtonWrapper>
  );
}
