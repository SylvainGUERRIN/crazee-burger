import styled from 'styled-components';
import {IoPersonCircleOutline} from "react-icons/io5"
import {theme} from "../../../theme"
import Profile from './Profile';

export default function NavbarRightSide({username}) {
  return (
    <NavbarrightsideStyled className='rightSide'>
        {/* <div className='admin-button'>admin button</div> */}
        <Profile username={username}/>
    </NavbarrightsideStyled>
  )
}

const NavbarrightsideStyled = styled.div`
  
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
  
`;