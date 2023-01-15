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
  const [data, setData] = useState([]);

  useEffect(() => {
    const days = [
      {name: "Monday", Total: 0 },
      {name: "Tuesday", Total: 0 },
      {name: "Wednesday", Total: 0 },
      {name: "Thursday", Total: 0 },
      {name: "Friday", Total: 0 },
      {name: "Saturday", Total: 0 },
      {name: "Sunday", Total: 0 },
    ];

    // Get the current date
    const now = new Date();
    // Get the date 7 days ago
    const pastWeek = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
    // filter the orders that only include the last 7 days
    const filteredData = queryData.filter(item => new Date(item.dateCreated) >= pastWeek);
    // Iterate through each order
    filteredData.map((item) => {
      // Get the date of the order
      let date = new Date(item.dateCreated);
      // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
      let day = date.getUTCDay();
      // Add the revenue of the order to the appropriate day's total
      days[day].Total += item.total;
    });
    setData(days);
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
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
      
    </StyledChart>
  );
};

export default Chart;
