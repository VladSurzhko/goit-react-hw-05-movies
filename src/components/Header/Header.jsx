import { Outlet } from "react-router-dom";
import {StyledNavListLink, NavList, HeaderStyled} from "./HeaderStyled.styled"

export const Header= () => {
    return (
<HeaderStyled>
    <NavList>
        <li>
            <StyledNavListLink to="/">Home</StyledNavListLink>
        </li>
        <li>
            <StyledNavListLink to="/movies">Movies</StyledNavListLink>
        </li>
    </NavList>
    
    <Outlet />
</HeaderStyled>
    );
};

export default Header;