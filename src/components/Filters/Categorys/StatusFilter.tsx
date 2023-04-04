import type { StatusProps } from "../../../types";
import FilterButton from "./FilterButton";
import { ItemsContainer } from "./styles";

export default function StatusFilter({
  setPageNumber,
  setStatus,
}: StatusProps) {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <ItemsContainer>
      {status.map((items, index) => (
        <FilterButton
          name={`status-${index}`}
          index={index}
          input={items}
          key={index}
          setPageNumber={setPageNumber}
          task={setStatus}
        />
      ))}
    </ItemsContainer>
  );
}
