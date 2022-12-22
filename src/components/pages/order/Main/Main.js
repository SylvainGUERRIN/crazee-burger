import styled from 'styled-components';
import {theme} from "../../../../theme"
import Basket from './Basket';
import Menu from './Menu';

export default function Main() {
  return (
    <MainStyled>
      <Basket/>
      <Menu/>
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

  display: grid;
  grid-template-columns: 25% 75%;
`;