import React from "react";
import { useClickOutside } from "../../context/toggle";
import './styles.scss'
const WidgetDialog = ({open,setOpen,item}) => { 
  let domNode = useClickOutside(() => {
    setOpen(false);
  })
  return (
    <div className="widgetDialog">
        <div ref={domNode} className="container">
          {item.percent === 100 ?
          <h3>Congratulation! You have won the prize because of everyone's deditation</h3> : 
          <h3>You need to complete the task to open the gift</h3>
        }
        </div> 
    </div>  
  );
};

export default WidgetDialog;
