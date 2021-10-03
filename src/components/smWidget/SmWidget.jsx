import React, { useState, useEffect } from "react";
import WidgetDialog from "../widgetDialog/WidgetDialog";
import "./styles.scss";
const SmWidget = ({ item }) => {
  const [percent, setPercent] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let timer = setInterval(Calc, 15);
    function Calc() {
      setPercent((prev) => (prev === item.percent ? complete(prev) : prev + 1));
    }
    function complete(prev) {
      clearInterval(timer);
      timer = null;
      return prev;
    }
  }, [item]);
  return (
    <>
      <div className="smWidget">
        <div className="percent">
          <svg>
            <circle cx="45" cy="45" r="45" />
            <circle
              cx="45"
              cy="45"
              r="45"
              style={{
                strokeDasharray: 284,
                strokeDashoffset: `calc(284 - (284*${percent}/100)`,
                stroke: "#0b8adf",
              }}
            />
          </svg>
          <div className="number">
            <h4>
              {percent} <span>%</span>
            </h4>
          </div>
        </div>
        <div className="widgetContent" onClick={() => setOpen(true)}>
          <img
            src={`./assets/${
              percent === 100 ? "exclamationPoint" : "question"
            }.png`}
            alt=""
            className={`${
              percent === 100 ? "exclamationPointImg marked" : "questionImg"
            } `}
          />
          <img src={`./assets/${item.img}.png`} alt="" />
          <h4 className="widgetContent">{item.title}</h4>
        </div>
      </div>
      {open && <WidgetDialog item={item} open={open} setOpen={setOpen} />}
    </>
  );
};

export default SmWidget;
