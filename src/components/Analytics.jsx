import { React, useState } from "react";
import { StyledAnalytics } from "../styles/Analytics.styled";
import { useEffect } from "react";
import CountUp from "react-countup";
import Tooltip from "@mui/material/Tooltip";
import ChartSecond from "./ChartSecond";
import Rating from "@mui/material/Rating";

const Analytics = ({ queryData, setQueryData }) => {
  const [currentDate, setCurrentDate] = useState("week");
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState();
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [ratingAverage, setRatingAverage] = useState(0);
  const [oneStar, setOneStar] = useState(0);
  const [twoStar, setTwoStar] = useState(0);
  const [threeStar, setThreeStar] = useState(0);
  const [fourStar, setFourStar] = useState(0);
  const [fiveStar, setFiveStar] = useState(0);

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

    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let totalRating = 0;
    filteredData.forEach((order) => {
      if (order.orderRating.ratingValue === 1) {
        one++;
        totalRating++;
      }
      if (order.orderRating.ratingValue === 2) {
        two++;
        totalRating++;
      }
      if (order.orderRating.ratingValue === 3) {
        three++;
        totalRating++;
      }
      if (order.orderRating.ratingValue === 4) {
        four++;
        totalRating++;
      }
      if (order.orderRating.ratingValue === 5) {
        five++;
        totalRating++;
      }
    });

    let reviews = 0;
    filteredData.forEach((order) => {
      if (order.orderRating.ratingValue > 0) {
        reviews++;
      }
    });

    setTotalReviews(reviews);
    setOneStar(one);
    setTwoStar(two);
    setThreeStar(three);
    setFourStar(four);
    setFiveStar(five);
    setTotalRating(totalRating);

    setTotalRevenue(total);
    setPendingOrders(pending);
    setCompletedOrders(completed);
  }, [currentDate, queryData]);

  const getCurrentWeek = () => {
    const today = new Date();
    const startOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay() + 1
    );
    const endOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay() + 7
    );
    const start = `${startOfWeek.getFullYear()}-${(startOfWeek.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${startOfWeek.getDate().toString().padStart(2, "0")}`;
    const end = `${endOfWeek.getFullYear()}-${(endOfWeek.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${endOfWeek.getDate().toString().padStart(2, "0")}`;
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

  const analyticWidget = [
    {
      title: "Total Orders",
      icon: "bx bxs-box",
      value: totalOrders,
      color: "#e74c3c",
      tooltip: "Total orders placed this " + currentDate,
    },
    {
      title: "Total Revenue",
      icon: "bx bx-money",
      value: totalRevenue,
      color: "#1abc9c",
      tooltip: "Total revenue generated this " + currentDate,
    },
    {
      title: "Pending Orders",
      icon: "bx bx-time",
      value: pendingOrders,
      color: "#f7b731",
      tooltip: "Total pending orders this " + currentDate,
    },
    {
      title: "Completed Orders",
      icon: "bx bx-check",
      value: completedOrders,
      color: "#2ecc71",
      tooltip: "Total completed orders this " + currentDate,
    },
    {
      title: "Reviewed Orders",
      icon: "bx bx-star",
      value: totalReviews,
      color: "#2ecc71",
      tooltip: "Total completed orders this " + currentDate,
    },
  ];

  return (
    <StyledAnalytics>
      <div className="analytics__header">
        <h1>Analytics</h1>
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
        </div>
      </div>

      <div className="analytics__content">
        <div className="analytic__widgets">
          {analyticWidget.map((widget, index) => (
            <Tooltip
              title={widget.tooltip}
              placement="right"
              followCursor
              key={index + 1}
            >
              <div className="widget">
                <div className="widget__title">
                  <i
                    className={widget.icon}
                    style={{ background: `${widget.color}` }}
                  ></i>
                  <h3>{widget.title}</h3>
                </div>
                <div className="widget__value">
                  <h1>
                    {widget.title === "Total Revenue" ? "P " : ""}
                    {widget.title === "Total Revenue" ? (
                      <CountUp
                        duration={2}
                        end={widget.value}
                        decimals={2}
                        separator=","
                      />
                    ) : (
                      <CountUp duration={2} end={widget.value} />
                    )}
                  </h1>
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
        <div className="analytic__charts">
          <ChartSecond
            filteredOrders={filteredOrders}
            currentDate={currentDate}
          />
        </div>
      </div>
    </StyledAnalytics>
  );
};

export default Analytics;
