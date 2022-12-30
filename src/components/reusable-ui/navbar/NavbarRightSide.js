import { toast } from 'react-toastify';
import styled from 'styled-components';
import ToggleButton from '../ToggleButton';
import Profile from './Profile';
import { useState } from 'react';
import ToastAdmin from './ToastAdmin';
import { useContext } from 'react';
import AdminModeContext from '../../../context/AdminModeContext';

export default function NavbarRightSide({username}) {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const { adminMode, setAdminMode } = useContext(AdminModeContext);

  const displayToastNotification = () => {
    if(!isModeAdmin){
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setAdminMode(true)
    }else{
      setAdminMode(false)
    }
    setIsModeAdmin(!isModeAdmin)
      
    
  }

  return (
    <NavbarRightSideStyled>
        <ToggleButton 
        labelIfUnchecked='activer le mode admin' 
        labelIfChecked='désactiver le mode admin'
        onToggle={displayToastNotification}
        />
        <Profile username={username} className="profile"/>
        <ToastAdmin/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
    .profile{
      padding-left: 50px;
    }

    
`;