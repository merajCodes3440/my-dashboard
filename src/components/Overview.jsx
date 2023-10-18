import React from "react";
import { BarChart, Bar, XAxis } from "recharts";
import { FaChevronDown} from "react-icons/fa6";

const data = [
  {
    name: "Jan",
    uv: 2000,
  },
  {
    name: "Feb",
    uv: 3000,
   
  },
  {
    name: "Mar",
    uv: 2000,
   
  },
  {
    name: "Apr",
    uv: 2780,
   
  },
  {
    name: "May",
    uv: 1890,
   
  },
  {
    name: "Jun",
    uv: 2390,
   
  },
  {
    name: "Jul",
    uv: 2090,
   
  },
  {
    name: "Aug",
    uv: 3190,
   
  },
  {
    name: "Sep",
    uv: 1000,
  
  },
  {
    name: "Oct",
    uv: 2490,
   
  },
  {
    name: "Nov",
    uv: 3000,
  
  },
  {
    name: "Dec",
    uv: 3090,
  
  }
];

const Overview = () => {
  return (
    <div className="overview">
      <div className="over" >
      <div className="over1">
        <h3>Overview</h3>
        <h6>Monthly Income</h6>
      </div>
      <div className="span">
        <span>Quarterly</span>
        <span><FaChevronDown/></span>
      </div>  
      </div>
      <BarChart width={650} height={250} data={data}>
        <XAxis dataKey="name" />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Overview; 
