import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import ToggleButton from '../ToggleButton';
import Profile from './Profile';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from '../../../theme';
import { useState } from 'react';

export default function NavbarRightSide({username}) {
  const [isModeAdmin, setIsModeAdmin] = useState(false)

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
    }
    setIsModeAdmin(!isModeAdmin)
    
  }

  return (
    <NavbarRightSideStyled>
        <ToggleButton 
        labelIfUnchecked='activer le mode admin' 
        labelIfChecked='désactiver le mode admin'
        onToggle={displayToastNotification}
        //backgroundColor={"blue"}
        />
        <Profile username={username} className={"profile"}/>
        <ToastContainer className="toaster" bodyClassName="body-toast" />
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

    .toaster {
      max-width: 300px;
    }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
      background: ${theme.colors.background_dark};
    }

    .body-toast {
      .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
        margin-right: 20px;
        margin-left: 5px;
      }
      div {
        line-height: 1.3em;
      }
    }
`;