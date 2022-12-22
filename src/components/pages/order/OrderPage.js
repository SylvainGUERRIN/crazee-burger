import { useParams } from "react-router-dom"
import Navbar from "../../reusable-ui/navbar/Navbar"
import Main from "./Main/Main"
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function OrderPage() {
    const {name} = useParams()
  

      return (
      <OrderPageStyled>
        <div className="container">
          <Navbar username={name}/>
          <Main/>
        </div>
      </OrderPageStyled>
      )
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  /* padding: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
    width: 100%;
    height: 95vh;
    max-width: 1400px;
    /* background-color: ${theme.colors.white}; */
    margin: 5px auto;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
  }
`;