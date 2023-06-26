import { HeaderStyled, NavList, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
      <HeaderStyled>
        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/" end>Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movie">Movie</StyledNavLink>
            </li>
          </NavList>
        </nav>
      </HeaderStyled>
  );
};



// import { Outlet } from "react-router-dom";
// import {StyledNavListLink, NavList, HeaderStyled} from "./HeaderStyled.styled"

// export const Header= () => {
//     return (
// <HeaderStyled>
//     <NavList>
//         <li>
//             <StyledNavListLink to="/">Home</StyledNavListLink>
//         </li>
//         <li>
//             <StyledNavListLink to="/movies">Movies</StyledNavListLink>
//         </li>
//     </NavList>
    
//     {/* <Outlet /> */}
// </HeaderStyled>
//     );
// };

