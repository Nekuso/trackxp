import { React, useState, useEffect } from "react";
import { StyledChart } from "../styles/Chart.styled";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ queryData }) => {
  const [data, setData] = useState([
    {name: "Monday", Total: 0 },
    {name: "Tuesday", Total: 0 },
    {name: "Wednesday", Total: 0 },
    {name: "Thursday", Total: 0 },
    {name: "Friday", Total: 0 },
    {name: "Saturday", Total: 0 },
    {name: "Sunday", Total: 0 },
  ]);

  useEffect(() => {
      console.log(data);
    
      const updatedData = [...data]; // create a copy of the data array
      queryData.forEach((item) => {
        let day = new Date(item.dateCreated);
        let thisWeek = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
    
        if (day >= thisWeek) {
          let dayName = day.toLocaleString("en-us", { weekday: "long" }); // get the name of the day
          let dayIndex = updatedData.findIndex((d) => d.name === dayName); // find the index of the day in the array
          updatedData[dayIndex].Total += item.total; // increment the Total field
        }
      });
      setData(updatedData); // update the data array
  }, [queryData]);

  return (
    <StyledChart>
      <div className="title">This week (Revenue)</div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart width={730} height={250} data={data}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5773db" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5773db" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#5773db"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChart>
  );
};

export default Chart;
