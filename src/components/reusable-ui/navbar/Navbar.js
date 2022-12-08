import styled from 'styled-components';
import Logo from "../Logo";
import {theme} from "../../../theme"
import NavbarRightSide from './NavbarRightSide';
import { refreshPage } from '../../../utils/window';

export default function Navbar({username}) {
  return (
    <NavbarStyled>
        <Logo className={"logo-order-page"} onClick={() => refreshPage()} />
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

  .logo-order-page{
    cursor: pointer;
  }
`;