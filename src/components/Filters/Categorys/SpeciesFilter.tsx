import type { SpeciesProps } from "../../../types";
import FilterButton from "./FilterButton";
import { ItemsContainer } from "./styles";

export default function SpeciesFilter({
  setPageNumber,
  setSpecies,
}: SpeciesProps) {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <ItemsContainer>
      {species.map((items, index) => (
        <FilterButton
          name={`species-${index}`}
          index={index}
          input={items}
          key={index}
          setPageNumber={setPageNumber}
          task={setSpecies}
        />
      ))}
    </ItemsContainer>
  );
}
