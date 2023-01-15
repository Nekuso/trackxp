import { React, useState, useEffect, useRef } from "react";
import { StyledReports } from "../styles/Reports.styled";
import { useReactToPrint } from "react-to-print";
import CountUp from "react-countup";


const Reports = ({ queryData, setqueryData }) => {
  const [currentDate, setCurrentDate] = useState("week");
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);

  useEffect(() => {
    if (currentDate === "week") {
      const currentWeek = getCurrentWeek();
      setDateStart(currentWeek.start);
      setDateEnd(currentWeek.end);
      // console.log(
      //   "This week's start:",
      //   currentWeek.start,
      //   "This week's end:",
      //   currentWeek.end
      // );
    } else if (currentDate === "month") {
      const currentMonth = getCurrentMonth();
      setDateStart(currentMonth.start);
      setDateEnd(currentMonth.end);
      // console.log(
      //   "This month's start:",
      //   currentMonth.start,
      //   "This month's end:",
      //   currentMonth.end
      // );
    } else if (currentDate === "year") {
      const currentYear = getCurrentYear();
      setDateStart(currentYear.start);
      setDateEnd(currentYear.end);
      // console.log(
      //   "This year's start:",
      //   currentYear.start,
      //   "This year's end:",
      //   currentYear.end
      // );
    }
  }, [currentDate]);

  useEffect(() => {
    let filteredData = queryData;
    if (currentDate === "week") {
      const currentWeek = getCurrentWeek();
      filteredData = filteredData.filter((order) => {
        let orderDate = new Date(order.dateCreated);
        return (
          orderDate >= new Date(currentWeek.start) &&
          orderDate <= new Date(currentWeek.end)
        );
      });
    } else if (currentDate === "month") {
      const currentMonth = getCurrentMonth();
      filteredData = filteredData.filter((order) => {
        let orderDate = new Date(order.dateCreated);
        return (
          orderDate >= new Date(currentMonth.start) &&
          orderDate <= new Date(currentMonth.end)
        );
      });
    } else if (currentDate === "year") {
      const currentYear = getCurrentYear();
      filteredData = filteredData.filter((order) => {
        let orderDate = new Date(order.date);
        return (
          orderDate >= new Date(currentYear.start) &&
          orderDate <= new Date(currentYear.end)
        );
      });
    }
    setFilteredOrders(filteredData);
    setTotalOrders(filteredData.length);
    let total = 0;
    let pending = 0;
    let completed = 0;
    filteredData.forEach((order) => {
      total += order.total;
      if (order.cycleStatus === "Pending") {
        pending++;
      } else if (order.cycleStatus === "Completed") {
        completed++;
      }
    });

    setTotalRevenue(total);
    setCompletedOrders(completed);
  }, [currentDate, queryData]);

  const getCurrentWeek = () => {
    let date = new Date();
    let start = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    let end = start + 6;
    date.setDate(start);
    start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let start_month = start.getMonth() + 1;
    let start_day = start.getDate();
    let start_year = start.getFullYear();
    start = start_month + "/" + start_day + "/" + start_year;
    date.setDate(end);
    end = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let end_month = end.getMonth() + 1;
    let end_day = end.getDate();
    let end_year = end.getFullYear();
    end = end_month + "/" + end_day + "/" + end_year;
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
  const getCurrentYear = () => {
    let date = new Date();
    let start = new Date(date.getFullYear(), 0, 1);
    let start_month = start.getMonth() + 1;
    let start_day = start.getDate();
    let start_year = start.getFullYear();
    start = start_month + "/" + start_day + "/" + start_year;

    let end = new Date(date.getFullYear(), 11, 31);
    let end_month = end.getMonth() + 1;
    let end_day = end.getDate();
    let end_year = end.getFullYear();
    end = end_month + "/" + end_day + "/" + end_year;

    return { start, end };
  };

  const handleWeek = () => {
    setCurrentDate("week");
  };

  const handleMonth = () => {
    setCurrentDate("month");
  };

  let componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    });

  return (
    <StyledReports>
      <div className="reports__header">
        <h1>Reports</h1>
        <div className="right__actions">
          <div className="date__buttons">
            <button
              className={currentDate === "week" ? "active" : "none"}
              onClick={handleWeek}
            >
              This Week
            </button>
            <button
              className={currentDate === "month" ? "active" : "none"}
              onClick={handleMonth}
            >
              This Month
            </button>
          </div>
          <i className="bx bxs-printer" onClick={window.print}></i>
        </div>
      </div>

      <div className="reports__content">
        <table ref={componentRef}>
            <thead>
                <tr>
                    <th>Order Date</th>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {filteredOrders.map((order, index) => (
                    <tr key={index + 1}>
                        <td>{order.dateCreated}</td>
                        <td>{order.orderId}</td>
                        <td>{order.firstName + " " + order.lastName}</td>
                        <td>P <CountUp duration={2} end={order.total} decimals={2} separator="," /></td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div className="reports__totals">
            <p>{dateStart + " - " + dateEnd}</p>
            <p>Total Orders: {filteredOrders.length}</p>
            <p>Total Revenue: P {<CountUp duration={2} end={filteredOrders.reduce((acc, order) => acc + order.total, 0) } decimals={2} separator="," />}</p>
        </div>
      </div>
    </StyledReports>
  );
};

export default Reports;
