import Tab from "./tab/Tab";
import styled from "styled-components";
import { theme } from "../../../../../theme";


export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        <Tab title={"Réduire/ouvrir"}/>
        <Tab title={"Ajouter un produit"} content={"formulaire ajout produit"}/>
        <Tab title={"Modifier un produit"} content={"produits à modifier"}/>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${theme.colors.white};
  padding: 10px 15px;
`;