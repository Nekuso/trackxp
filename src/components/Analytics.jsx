import {React, useState} from "react";
import { StyledAnalytics } from "../styles/Analytics.styled";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect } from "react";


const Analytics = ({queryData, setQueryData}) => {
  let now = dayjs()
  const [dateStart, setDateStart] = useState("12/1/2022");
  const [dateEnd, setDateEnd] = useState(dayjs(now).format('M/D/YYYY'));

  useEffect(() => {
    console.log(dateStart)
    console.log(dateEnd)
  }, [dateStart, dateEnd])

  return (
    <StyledAnalytics>
      <div className="analytics__header">
        <h1>Analytics</h1>
        <div className="date__container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            className="date__picker"
              label="Start Date"
              openTo="month"
              views={['month', 'day', 'year']}
              value={dateStart}
              onChange={(newValue) => {
                setDateStart(dayjs(newValue).format('M/D/YYYY'));
              }}
              renderInput={(params) => <TextField {...params} />}
              />
            <DatePicker
              className="date__picker"
              label="End Date"
              openTo="month"
              views={['month', 'day', 'year']}
              value={dateEnd}
              onChange={(newValue) => {
                setDateEnd(dayjs(newValue).format('M/D/YYYY'));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>

      <div className="analytics__content">
      </div>
    </StyledAnalytics>
  );
};

export default Analytics;
