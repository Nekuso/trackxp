import React from 'react';
import {StyledChart} from "../styles/Chart.styled";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {

  const data = [
    {name: "Monday", Total: 1200 },
    {name: "Tuesday", Total: 500 },
    {name: "Wednesday", Total: 800 },
    {name: "Thursday", Total: 1600 },
    {name: "Friday", Total: 600 },
    {name: "Saturday", Total: 3400 },
    {name: "Sunday", Total: 1300 },
  ];

  return (
    <StyledChart>
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={730}
          height={250}
          data={data}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5773db" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5773db" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray"/>
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
  )
}

export default Chart