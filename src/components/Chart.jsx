import React from 'react';
import {StyledChart} from "../styles/Chart.styled";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {

  const data = [
    {name: "January", Total: 1200 },
    {name: "February", Total: 2100 },
    {name: "March", Total: 800 },
    {name: "April", Total: 1600 },
    {name: "May", Total: 900 },
    {name: "June", Total: 1700 },
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
          <XAxis dataKey="name" stroke="gray" />
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