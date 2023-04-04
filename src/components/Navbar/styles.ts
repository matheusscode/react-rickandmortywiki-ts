import styled from "styled-components";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.header`
  width: 100%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
`;

export const SubContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Center = styled.div`
  .search-input {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    height: 30px;
    padding: 0 1rem;
  }

  img {
    width: 150px;
    height: 50px;
    object-fit: cover;
  }
`;

export const Menu = styled.div`
  .button-open-sidebar {
    padding: 0.4rem 0.4rem 0;
    font-size: 1.4rem;
    cursor: pointer;
    border-radius: 8px;
  }
`;

export const SidebarContainer = styled.div<ContainerProps>`
  width: ${(props) => (props.isOpen ? "100%" : "0")};
  display: flex;
  top: 0%;
  left: 0%;
  z-index: ${(props) => (props.isOpen ? "3" : "2")};
  position: fixed;
  left: 0%;
  top: 0%;
  height: 100vh;
  transition: width 0.4s;
  transform: ${(props) =>
    props.isOpen ? "translateX(-1px)" : "translateX(-30px)"};
`;

export const Overlay = styled.div<ContainerProps>`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0%;
  left: 0%;
  height: ${(props) => (props.isOpen ? "100%" : "0%")};
  transition: height 0.4s;
  transition-delay: 0.4s;
`;

export const SidebarContent = styled.div<ContainerProps>`
  width: ${(props) => (props.isOpen ? "350px" : "0%")};
  transition: width 0.6s ease;
  padding: ${(props) => (props.isOpen ? "1rem" : "0")};
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  gap: 1rem;
`;

export const SidebarHeader = styled.div<ContainerProps>`
  background-color: #ffffff;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transform: ${(props) =>
    props.isOpen ? "translateX(-1px)" : "translateX(-200px)"};
  padding: 1rem;
  gap: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .button-close-sidebar {
    transform: ${(props) =>
      props.isOpen ? "translateX(-1px)" : "translateX(-200px)"};
    transition: transform 0.4s;
    padding: 0.4rem 0.4rem 0;
    font-size: 1.6rem;
    cursor: pointer;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 700;
    background-color: #265df2;
  }
`;

export const SidebarBody = styled.div<ContainerProps>`
  padding: 1rem;
  background-color: #ffffff;
  height: 80%;
  transform: ${(props) =>
    props.isOpen ? "translateX(-1px)" : "translateX(-200px)"};
`;

export const SidebarFooter = styled.div<ContainerProps>`
  padding: 1rem;
  background-color: #ffffff;
  height: 10%;
  transform: ${(props) =>
    props.isOpen ? "translateX(-1px)" : "translateX(-200px)"};
`;

export const List = styled.ul<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  margin-top: 1rem;
  transition: transform 0.4s;
  transition-delay: 0.4s;
  transform: ${(props) =>
    props.isOpen ? "translateY(-1px)" : "translateY(-800px)"};
`;

export const ListItem = styled.li``;

export const NavLink = styled.a`
  color: #505050;
  text-shadow: 0 0 1.2px #101010;
  font-weight: 600;
  transition: 0.4s ease;
  position: relative;
  padding: 1rem;

  &:hover {
    color: #fafafa;
    padding-left: 10px;
  }

  &:before {
    content: " ";
    position: absolute;
    left: -10px;
    top: 10px;
    height: 30px;
    width: 3px;
    background-color: #b2df28;
    z-index: -1;
    transition: width 0.4s;
  }

  &:hover:before {
    width: 150px;
    border-left: 3px solid #b2df28;
    background-color: #265df2;
  }
`;
