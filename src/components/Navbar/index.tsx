
import * as C from "./styles";
import logo from "../../../public/logo.png";
import { useState } from "react";
import Button from "../Button";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import Input from "../Input";
import { navLinks } from "./data";

function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleCloseSidebar() {
    setIsOpen(false);
  }

  return (
    <C.Menu>
      <Button event={() => setIsOpen(!isOpen)} style="button-open-sidebar">
        <AiOutlineMenu />
      </Button>
      <C.SidebarContainer isOpen={isOpen}>
        <C.SidebarContent isOpen={isOpen}>
          <C.SidebarHeader isOpen={isOpen}>
            <img src={logo} alt="" />
            <Button style="button-close-sidebar" event={handleCloseSidebar}>
              <HiOutlineXMark />
            </Button>
          </C.SidebarHeader>
          <C.SidebarBody isOpen={isOpen}>
            <C.List isOpen={isOpen}>
              {navLinks.map((link) => (
                <C.ListItem key={link.id}>
                  <C.NavLink href={link.link} >
                    {link.text}
                  </C.NavLink>
                </C.ListItem>
              ))}
            </C.List>
          </C.SidebarBody>
          <C.SidebarFooter isOpen={isOpen}>c</C.SidebarFooter>
        </C.SidebarContent>
        <C.Overlay isOpen={isOpen} onClick={handleCloseSidebar}></C.Overlay>
      </C.SidebarContainer>
    </C.Menu>
  );
}

export default function Navbar() {
  return (
    <C.Container>
      <Sidebar />
      <C.SubContainer>
        <C.Center>
          <img src={logo} alt="" />
        </C.Center>
      </C.SubContainer>
    </C.Container>
  );
}
