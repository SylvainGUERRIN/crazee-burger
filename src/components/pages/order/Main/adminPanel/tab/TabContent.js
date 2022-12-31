import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function TabContent({isActiveContent = "add"}) {
  return (
    <TabcontentStyled>
        <div className={isActiveContent === "add" ? "isActiveContent" : "isInactiveContent"}>formulaire ajout produit</div>
        <div className={isActiveContent === "modify" ? "isActiveContent" : "isInactiveContent"}>produits à modifier</div>
    </TabcontentStyled>
  )
}

const TabcontentStyled = styled.div`
  border-top: 2px solid ${theme.colors.primary_burger};
  .isActiveContent{
    display: block;
  }
  .isInactiveContent{
    display: none;
  }
`;