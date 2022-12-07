import styled from 'styled-components';
import Logo from "../Logo";
import {theme} from "../../../theme"
import NavbarRightSide from './NavbarRightSide';

export default function Navbar({username}) {
    console.log(username);
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
  /* border-radius: 15px 15px 0 0; */
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  background-color: ${theme.colors.white}; 

  
`;