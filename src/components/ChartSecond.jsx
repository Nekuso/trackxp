import { React, useState, useEffect } from "react";
import { StyledChartSecond } from "../styles/ChartSecond.styled";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartSecond = ({ filteredOrders, currentDate }) => {
  const [data, setData] = useState([]);

  // For this month useEffect
  useEffect(() => {
    if (currentDate === "month") {
      const dates = new Array(new Date().getUTCDate())
        .fill({ date: 0, Total: 0 })
        .map((_, i) => {
          return { date: i + 1, Total: 0, name: i + 1 + "" };
        });
      const currentMonth = getCurrentMonth();
      // filter the orders that only include the current month
      const filteredData = filteredOrders.filter((item) => {
        let date = new Date(item.dateCreated);
        return (
          date >= new Date(currentMonth.start) &&
          date <= new Date(currentMonth.end)
        );
      });
      // Iterate through each order
      filteredData.forEach((item) => {
        // Get the date of the order
        let date = new Date(item.dateCreated);
        // Get the date of the month
        let day = date.getUTCDate();
        // Add the revenue of the order to the appropriate date's total
        dates[day - 1].Total += item.total;
      });
      setData(dates);
    } else if (currentDate === "week") {
      const days = [
        { name: "Monday", Total: 0 },
        { name: "Tuesday", Total: 0 },
        { name: "Wednesday", Total: 0 },
        { name: "Thursday", Total: 0 },
        { name: "Friday", Total: 0 },
        { name: "Saturday", Total: 0 },
        { name: "Sunday", Total: 0 },
      ];
      const currentWeek = getCurrentWeek();
      // filter the orders that only include the current week starting on Monday and ending on Sunday
      const filteredData = filteredOrders.filter((item) => {
        let date = new Date(item.dateCreated);
        return (
          date >= new Date(currentWeek.start) &&
          date <= new Date(currentWeek.end)
        );
      });
      // Iterate through each order
      filteredData.forEach((item) => {
        // Get the date of the order
        let date = new Date(item.dateCreated);
        // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
        let day = date.getUTCDay();
        // Add the revenue of the order to the appropriate day's total
        days[day].Total += item.total;
      });
      setData(days);
    }
  }, [filteredOrders, currentDate]);

  const getCurrentWeek = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);
    const diff = today.getDay() === 0 ? 6 : today.getDay() - 1;
    startOfWeek.setDate(today.getDate() - diff);
    endOfWeek.setDate(today.getDate() - diff + 6);
    const start = startOfWeek.toISOString().substr(0, 10);
    const end = endOfWeek.toISOString().substr(0, 10);
    return { start, end };
  };

  const getCurrentMonth = () => {
    let date = new Date();
    let start = new Date(date.getFullYear(), date.getMonth(), 1);
    let start_month = start.getMonth() + 1;
    let start_day = start.getDate();
    let start_year = start.getFullYear();
    start = start_month + "/" + start_day + "/" + start_year;
    let end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let end_month = end.getMonth() + 1;
    let end_day = end.getDate();
    let end_year = end.getFullYear();
    end = end_month + "/" + end_day + "/" + end_year;

    return { start, end };
  };

  return (
    <StyledChartSecond>
      <div className="title">This {currentDate} (Revenue)</div>
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
    </StyledChartSecond>
  );
};

export default ChartSecond;
