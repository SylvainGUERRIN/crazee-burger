import { useContext } from "react";
import styled from "styled-components";
import AdminPanelContext from "../../../../../../context/AdminPanelContext";
import { theme } from "../../../../../../theme";

export default function TabContent() {
    const { reduce, setReduce } = useContext(AdminPanelContext);
    const { isActive, setIsActive } = useContext(AdminPanelContext);

  return (
    <TabcontentStyled>
        <div className={isActive === "add" ? "isActiveContent" : "isInactiveContent"}>formulaire ajout produit</div>
        <div className={isActive === "modify" ? "isActiveContent" : "isInactiveContent"}>produits à modifier</div>
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