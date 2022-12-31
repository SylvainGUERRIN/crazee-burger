import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function TabContent({content}) {
  return (
    <TabcontentStyled>
        <div>formulaire ajout produit</div>
        <div>produits à modifier</div>
    </TabcontentStyled>
  )
}

const TabcontentStyled = styled.div`
  border-top: 2px solid ${theme.colors.primary_burger};
`;