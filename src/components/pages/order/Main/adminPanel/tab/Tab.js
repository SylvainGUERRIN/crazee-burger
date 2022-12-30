import TabContent from "./TabContent";
import TabTitle from "./TabTitle";


export default function Tab({title, content}) {
  return (
    <div>
      <TabTitle title={title}/>
      {content ? 
            <TabContent content={content}/>
          :
            null
          }
    </div>
  )
}
