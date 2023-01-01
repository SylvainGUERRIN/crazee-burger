import { useContext } from "react";
import styled from "styled-components";
import AdminPanelContext from "../../../../../../context/AdminPanelContext";
import { theme } from "../../../../../../theme";

export default function TabTitles() {
  const { reduce, setReduce } = useContext(AdminPanelContext);
  const { isActive, setIsActive } = useContext(AdminPanelContext);

  const handleAddProduct = () => {

  }

  const handleReduceOrOpen = () => {

  }

  return (
    <TabTitlesStyled>
      <div onClick={handleReduceOrOpen}>Réduire/ouvrir</div>
      <div className={isActive === "add" ? "isActive" : "isInactive"} onClick={handleAddProduct}>Ajouter un produit</div>
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