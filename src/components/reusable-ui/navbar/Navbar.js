import styled from 'styled-components';
import Logo from "../Logo";
import {theme} from "../../../theme"
import NavbarRightSide from './NavbarRightSide';

export default function Navbar({username}) {
  return (
    <NavbarStyled>
        <Logo />
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 15px 15px 0 0;
  background-color: ${theme.colors.white}; 

  
`;