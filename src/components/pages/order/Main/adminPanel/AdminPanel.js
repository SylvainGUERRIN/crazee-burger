import Tab from "./tab/Tab";
import styled from "styled-components";
import { theme } from "../../../../../theme";


export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        <Tab />
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${theme.colors.white};
  /* padding: 0 15px 10px 15px; */
  padding-bottom: 10px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;