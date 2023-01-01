import TabContent from "./TabContent";
import TabTitles from "./TabTitles";
import styled from "styled-components";
import AdminPanelContext from "../../../../../../context/AdminPanelContext";
import { useState } from "react";

export default function Tab() {
  const [reduce, setReduce] = useState(false)
  const [isActive, setIsActive] = useState("add")

  const adminPanelContextValue = {
    reduce,
    setReduce,
    isActive,
    setIsActive
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