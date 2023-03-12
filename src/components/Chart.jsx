import { React, useState, useEffect } from "react";
import { StyledChart } from "../styles/Chart.styled";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ queryData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const days = [      { name: "Monday", Total: 0 },      { name: "Tuesday", Total: 0 },      { name: "Wednesday", Total: 0 },      { name: "Thursday", Total: 0 },      { name: "Friday", Total: 0 },      { name: "Saturday", Total: 0 },      { name: "Sunday", Total: 0 },    ];
    const currentWeek = getCurrentWeek();
    const filteredData = queryData.filter((item) => {
      const date = new Date(item.dateCreated);
      const itemDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
      return itemDate >= currentWeek.start && itemDate <= currentWeek.end;
    });
    filteredData.forEach((item) => {
      const date = new Date(item.dateCreated);
      const day = date.getUTCDay();
      days[day].Total += item.total;
    });
    setData(days);
  }, [queryData]);

  const getCurrentWeek = () => {
    const today = new Date();
    let startOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay() + 1
    );
    let endOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay() + 7
    );
    if (today.getDay() === 0) {
      startOfWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 6
      );
      endOfWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
    }
    const start = `${startOfWeek.getFullYear()}-${(startOfWeek.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${startOfWeek.getDate().toString().padStart(2, "0")}`;
    const end = `${endOfWeek.getFullYear()}-${(endOfWeek.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${endOfWeek.getDate().toString().padStart(2, "0")}`;
    return { start, end };
  };

  // const getCurrentMonth = () => {
  //   let date = new Date();
  //   let start = new Date(date.getFullYear(), date.getMonth(), 1);
  //   let start_month = start.getMonth() + 1;
  //   let start_day = start.getDate();
  //   let start_year = start.getFullYear();
  //   start = start_month + "/" + start_day + "/" + start_year;
  //   let end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  //   let end_month = end.getMonth() + 1;
  //   let end_day = end.getDate();
  //   let end_year = end.getFullYear();
  //   end = end_month + "/" + end_day + "/" + end_year;

  //   return { start, end };
  // };

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
          {/* <CartesianGrid strokeDasharray="3 3" className="chartGrid" /> */}
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
