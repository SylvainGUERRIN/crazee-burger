import TabContent from "./TabContent";
import TabTitles from "./TabTitles";
import styled from "styled-components";
import AdminPanelContext from "../../../../../../context/AdminPanelContext";
import { useState } from "react";

export default function Tab() {
  const [reduceOrOpen, setReduceOrOpen] = useState(true)
  const [isActiveTab, setIsActiveTab] = useState(true)

  const adminPanelContextValue = {
    reduceOrOpen,
    setReduceOrOpen,
    isActiveTab,
    setIsActiveTab
  };

  return (
    <AdminPanelContext.Provider value={adminPanelContextValue}>
      <TabStyled>
        <TabTitles/>
        <TabContent/>
      </TabStyled>
    </AdminPanelContext.Provider>
  )
}

const TabStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;