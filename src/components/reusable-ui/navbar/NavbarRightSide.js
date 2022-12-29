import styled from 'styled-components';
import ToggleButton from '../ToggleButton';
import Profile from './Profile';

export default function NavbarRightSide({username}) {
  return (
    <NavbarrightsideStyled className='rightSide'>
        <ToggleButton 
        labelIfUnchecked='activer le mode admin' 
        labelIfChecked='désactiver le mode admin'
        />
        <Profile username={username} className={"profile"}/>
    </NavbarrightsideStyled>
  )
}

const NavbarrightsideStyled = styled.div`
  
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
    .profile{
      padding-left: 50px;
    }
`;