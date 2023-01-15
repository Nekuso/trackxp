import {React, useState} from "react";
import { StyledAnalytics } from "../styles/Analytics.styled";
import { useEffect } from "react";


const Analytics = ({queryData, setQueryData}) => {
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  function getCurrentWeekStart() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getUTCDay();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setUTCDate(currentDate.getUTCDate() - dayOfWeek);
    startOfWeek.setUTCHours(0, 0, 0, 0);
    return startOfWeek;
  }
  function getCurrentWeekEnd() {
    const currentWeekStart = getCurrentWeekStart();
    const endOfWeek = new Date(currentWeekStart);
    endOfWeek.setUTCDate(currentWeekStart.getUTCDate() + 6);
    endOfWeek.setUTCHours(23, 59, 59, 999);
    return endOfWeek;
  }

  useEffect(() => {

    setDateStart(getCurrentWeekStart())
    setDateEnd(getCurrentWeekEnd())
    console.log(dateStart)
  }, [])

  return (
    <StyledAnalytics>
      <div className="analytics__header">
        <h1>Analytics</h1>
      </div>

      <div className="analytics__content">
      </div>
    </StyledAnalytics>
  );
};

export default Analytics;
