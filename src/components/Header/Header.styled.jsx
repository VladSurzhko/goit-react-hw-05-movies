import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  background-color: #00d4ff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavList = styled.nav`
  display: flex;
  align-items: start;
  gap: 20px;
  list-style: none;
  
`;

 export const StyledNavLink = styled(NavLink)`
 font-weight: 500;
 color: white;
 transition: all 250ms linear;
 list-style: none;
 text-decoration: none;

 &.active,
 &:hover,
 &:focus {
   color: black;
 }

`;