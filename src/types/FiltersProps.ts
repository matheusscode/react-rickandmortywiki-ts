export type FilterProps = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setSpecies: React.Dispatch<React.SetStateAction<string>>;
};

export type FilterButtonProps = {
  input: string;
  task: (input: string) => void;
  setPageNumber: (pageNumber: number) => void;
  index: number;
  name: string;
};

export type GenderProps = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
};

export type StatusProps = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

export type SpeciesProps = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setSpecies: React.Dispatch<React.SetStateAction<string>>;
};
