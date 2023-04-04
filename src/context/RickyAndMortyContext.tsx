import { createContext, ReactNode, useContext, useState } from "react";
import {
  CharacterProps,
  FetchedEpisodeProps,
  FetchedLocationProps,
} from "../types";

interface RickAndMortyContextData {
  characters: CharacterProps[];
  episodes: FetchedEpisodeProps[];
  locations: FetchedLocationProps[];
  fetchCharacters: (id?: number) => Promise<void>;
  fetchEpisodes: (episodeIds?: number[]) => Promise<void>;
  fetchLocations: (id?: number) => Promise<void>;
}

interface RickAndMortyProviderProps {
  children: ReactNode;
}

export const RickAndMortyContext = createContext<RickAndMortyContextData>(
  {} as RickAndMortyContextData
);

export function useRickAndMorty() {
  const context = useContext(RickAndMortyContext);

  if (!context) {
    throw new Error(
      "useRickAndMorty must be used within a RickAndMortyProvider"
    );
  }

  return context;
}

export function RickAndMortyProvider({ children }: RickAndMortyProviderProps) {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [episodes, setEpisodes] = useState<FetchedEpisodeProps[]>([]);
  const [locations, setLocations] = useState<FetchedLocationProps[]>([]);

  async function fetchCharacters(characterId?: number) {
    const apiUrl = characterId
      ? `https://rickandmortyapi.com/api/character/${characterId}`
      : `https://rickandmortyapi.com/api/character`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setCharacters(data.results);
  }

  async function fetchEpisodes(episodeIds?: number[]) {
    const apiUrl = episodeIds
      ? `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
      : `https://rickandmortyapi.com/api/episode`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setEpisodes(data.results);
  }

  async function fetchLocations(locationId?: number) {
    const apiUrl = locationId
      ? `https://rickandmortyapi.com/api/location/${locationId}`
      : `https://rickandmortyapi.com/api/location`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setLocations(data.results);
  }

  return (
    <RickAndMortyContext.Provider
      value={{
        characters,
        episodes,
        locations,
        fetchCharacters,
        fetchEpisodes,
        fetchLocations,
      }}
    >
      {children}
    </RickAndMortyContext.Provider>
  );
}
