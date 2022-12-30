import { useContext } from 'react';
import styled from 'styled-components';
import AdminModeContext from '../../../../context/AdminModeContext';
import {theme} from "../../../../theme"
import AdminPanel from './adminPanel/AdminPanel';
import Basket from './Basket';
import Menu from './Menu';

export default function Main() {
  const { adminMode, setAdminMode } = useContext(AdminModeContext);
  return (
    <MainStyled>
      <Basket/>
      <Menu/>
      {adminMode ? 
            <AdminPanel/>
          :
            null
          }
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  width: 100%;
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  /* position: relative; */

  display: grid;
  grid-template-columns: 25% 75%;
  /* grid-template-columns: 1fr; */
  overflow-y: scroll;
`;