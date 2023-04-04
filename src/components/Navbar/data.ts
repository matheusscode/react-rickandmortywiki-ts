import type { LinksProps } from "../../types/LinksProps";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { GiCharacter } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

export const navLinks: LinksProps[] = [
  {
    id: 1,
    text: "Início",
    link: "/",
  },
  {
    id: 2,
    text: "Personagens",
    link: "/characters",
  },
  {
    id: 3,
    text: "Episodios",
    link: "/episodes",
  },
  {
    id: 4,
    text: "Localização",
    link: "/locations",
  },
  {
    id: 5,
    text: "Favoritos",
    link: "/favorites",
  },
];
