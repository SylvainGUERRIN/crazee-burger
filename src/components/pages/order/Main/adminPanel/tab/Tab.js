import TabContent from "./TabContent";
import TabTitles from "./TabTitles";
import styled from "styled-components";

export default function Tab({title, content}) {
  return (
    <TabStyled>
      <TabTitles/>
      <TabContent/>
    </TabStyled>
  )
}

const TabStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;