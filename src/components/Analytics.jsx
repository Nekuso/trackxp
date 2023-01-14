import {React, useState} from "react";
import { StyledAnalytics } from "../styles/Analytics.styled";
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';




const Analytics = ({queryData, setQueryData}) => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

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
