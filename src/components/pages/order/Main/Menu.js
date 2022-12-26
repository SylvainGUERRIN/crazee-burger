import { useState } from "react";
import styled from "styled-components";
import {fakeMenu2} from "../../../../fakeData/fakeMenu"
import { theme } from "../../../../theme";

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {menu.map((produit)=>{
        return <div className="produit">{produit.title}</div>
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .produit{
    width: 240px;
    height: 330px;
    background-color: red;
  }
`;