import type { GenderProps } from "../../../types";
import FilterButton from "./FilterButton";
import { ItemsContainer } from "./styles";

export default function GenderFilter({
  setGender,
  setPageNumber,
}: GenderProps) {
  const genders = ["female", "male", "genderless", "unknown"];

  return (
    <ItemsContainer>
      {genders.map((items, index) => (
        <FilterButton
          name={`gender-${index}`}
          index={index}
          input={items}
          key={index}
          setPageNumber={setPageNumber}
          task={setGender}
        />
      ))}
    </ItemsContainer>
  );
}
