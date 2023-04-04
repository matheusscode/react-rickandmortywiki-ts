import type { ResultsProps } from "../../types";
import * as C from "./styles";

export default function Cards({ page ,results }: ResultsProps) {

  return (
    <>
      {results.map((character) => (
        <C.CardContainer key={character.id} to={`${page}/${character.id}`}>
          <C.CardHeader>
            <C.CardImage>
              <img src={character.image} alt={character.name} className="img" />
            </C.CardImage>
            <C.Headline>
              <h1>{character.name}</h1> <span># {character.id}</span>
            </C.Headline>
          </C.CardHeader>
          <C.CharacterStatus>
            {(() => {
              if (character.status === "Dead") {
                return (
                  <div
                    className="dead"
                  >
                    {character.status}
                  </div>
                );
              } else if (character.status === "Alive") {
                return (
                  <div
                    className="alive"
                  >
                    {character.status}
                  </div>
                );
              } else {
                return (
                  <div
                    className="unknown"
                  >
                    {character.status}
                  </div>
                );
              }
            })()}
          </C.CharacterStatus>
          <C.CardBody>
            <C.CardDescription>
              <ul>
                <li>
                  Genêro: <span>{character.gender}</span>
                </li>
                <li>
                  Espécie: <span>{character.species}</span>
                </li>
                <li>
                  Origem: <span>{character.origin.name}</span>
                </li>
                <li>
                  Localização: <span>{character.location.name}</span>
                </li>
              </ul>
            </C.CardDescription>
          </C.CardBody>
        </C.CardContainer>
      ))}
    </>
  );
}
