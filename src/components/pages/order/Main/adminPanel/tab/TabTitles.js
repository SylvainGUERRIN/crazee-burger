import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function TabTitles({isActiveTab = "add"}) {
  const [reduceOrOpen, setReduceOrOpen] = useState(true)

  const handleAddProduct = () => {

  }

  const handleReduceOrOpen = () => {

  }

  return (
    <TabTitlesStyled>
      <div onClick={handleReduceOrOpen}>Réduire/ouvrir</div>
      <div className={isActiveTab === "add" ? "isActive" : ""} onClick={handleAddProduct}>Ajouter un produit</div>
      <div>Modifier un produit</div>
    </TabTitlesStyled>
  )
}

const TabTitlesStyled = styled.div`
  display: flex;
  div{
    width: 30%;
    text-align: center;
  }
  .isActive{
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
  }
`;