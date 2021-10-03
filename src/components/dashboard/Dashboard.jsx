import React from "react";
import LineChart from "../lineChart/LineChart";
import NewEvents from "../newEvents/NewEvents";
import SmWidget from "../smWidget/SmWidget";
import "./styles.scss";

const items = [
  {
    title: "Sales Target",
    img:'sales',
    percent: 50,
  },
  {
    title: "Month Goal",
    img:'monthGoal',
    percent: 100,
  },
  {
    title: "New Customer",
    percent: 65,img:'newCustomer',
  },
  {
    title: "New Record",
    percent: 74,img:'newRecord',
  },
];
const Dashboard = () => {

  return (
    <div className="dashboard">
      <div className="topWidgets">
        {items.map((x, i) => (
          <SmWidget key={i} item={x} />
        ))}
      </div>
      <div className="bottomWidgets">
        <NewEvents/>
        <LineChart/>
      </div>

    </div>
  );
};

export default Dashboard;
