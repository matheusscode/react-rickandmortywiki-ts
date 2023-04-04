import * as C from "./styles";
import { useState, useRef } from "react";
import type { AccordionProps, FilterProps } from "../../types";
import Button from "../Button";
import StatusFilter from "./Categorys/StatusFilter";
import SpeciesFilter from "./Categorys/SpeciesFilter";
import GenderFilter from "./Categorys/GenderFilter";

export default function Filters({
  setPageNumber,
  setGender,
  setSpecies,
  setStatus,
}: FilterProps) {
  const clearFilters = () => {
    setGender(" ");
    setSpecies(" ");
    setStatus(" ");
    setPageNumber(1);
    window.location.reload()
  };

  return (
    <C.FilterContainer>
      <h1>Filtros</h1>
      <Button style="clear-filters" event={clearFilters}>
        Limpar Filtros
      </Button>
      <C.AccordionGroup>
        <Accordion title="Status">
          <StatusFilter setPageNumber={setPageNumber} setStatus={setStatus} />
        </Accordion>
        <Accordion title="Species">
          <SpeciesFilter
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />
        </Accordion>
        <Accordion title="Gender">
          <GenderFilter setPageNumber={setPageNumber} setGender={setGender} />
        </Accordion>
      </C.AccordionGroup>
    </C.FilterContainer>
  );
}

function Accordion({ title, children }: AccordionProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [panelHeight, setPanelHeight] = useState<number>(0);

  const toggleAccordion = () => {
    setIsActive(!isActive);
    setPanelHeight(isActive ? 0 : panelRef.current?.scrollHeight || 0);
  };

  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <C.AccordionButton active={isActive} onClick={toggleAccordion}>
        <h1>{title}</h1> <span>{isActive ? "aberto" : "fechado"}</span>
      </C.AccordionButton>
      <C.AccordionPanel
        ref={panelRef}
        active={isActive}
        panelHeight={panelHeight}
      >
        {children}
      </C.AccordionPanel>
    </>
  );
}
