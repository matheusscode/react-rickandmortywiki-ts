import { Routes, Route } from "react-router-dom";
//Container
import App from "./container/App"

//Pages
import Home from "../interface/pages/Home"
import Characters from "../interface/pages/Characters";
import Episodes from "../interface/pages/Episodes"
import Favorites from "../interface/pages/Favorites"
import Character from "../interface/pages/Character";
import Episode from "../interface/pages/Episode";
import Locations from "../interface/pages/Locations";
import Error404 from "../interface/pages/Error";
import Location from "../interface/pages/Location";
 
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters/>} />
        <Route path="/characters/character/:id" element={<Character/>} />
        <Route path="/episodes" element={<Episodes/>} />
        <Route path="/episodes/episode/:id" element={<Episode/>} />
        <Route path="/locations" element={<Locations/>} />
        <Route path="/locations/location/:id" element={<Location/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/*" element={<Error404/>} />
      </Route>
    </Routes>
  );
}
