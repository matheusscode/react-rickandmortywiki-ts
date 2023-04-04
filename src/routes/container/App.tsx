import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import GlobalStyle from "../../styles/GlobalStyled";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </div>
  );
}
