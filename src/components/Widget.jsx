import { React } from "react";
import { Link } from "react-router-dom";
import { StyledWidget } from "../styles/Widget.styled";
import Tooltip from "@mui/material/Tooltip";
import CountUp from "react-countup";

const Widget = ({ type, data, earnings, earningsDiff, diff, amount }) => {
  switch (type) {
    case "orders":
      data = {
        query: "orders",
        title: "ORDERS",
        isMoney: false,
        linkDescription: "View all orders →",
        link: "orders",
        icon: "bx bxs-package",
        backgroundColor: "#415ebe",
        info: "Your orders this month",
      };
      break;

    case "earnings":
      data = {
        query: "earnings",
        title: "EARNINGS",
        isMoney: false,
        currency: "P",
        linkDescription: "View all orders →",
        link: "orders",
        icon: "bx bx-money",
        backgroundColor: "#41be7f",
        info: "Your earnings this month",
      };
      break;

    case "balance":
      data = {
        query: "earnings",
        title: "BALANCE",
        isMoney: false,
        currency: "P",
        linkDescription: "View all orders →",
        link: "orders",
        icon: "bx bxs-wallet-alt",
        backgroundColor: "#be4141",
        info: "Your balance this month",
      };
      break;
    default:
      break;
  }

  return (
    <Tooltip title={data.info} placement="right" followCursor>
      <StyledWidget>
        <div className="top">
          <h3 className="top__title">{data.title}</h3>
          <div
            className={`percentage ${
              data.query === "orders" && (diff < 0 ? "negative" : "positive")
            } ${
              data.query === "earnings" &&
              (earningsDiff < 0 ? "negative" : "positive")
            }`}
          >
            {data.query === "orders" &&
              (diff < 0 ? (
                <i className="bx bxs-down-arrow"></i>
              ) : (
                <i className="bx bxs-up-arrow"></i>
              ))}
            {data.query === "earnings" &&
              (earningsDiff < 0 ? (
                <i className="bx bxs-down-arrow"></i>
              ) : (
                <i className="bx bxs-up-arrow"></i>
              ))}
            {/* {data.query === "earnings" && earningsDiff !== 0 ? <i className='bx bxs-down-arrow'></i> : <i className='bx bxs-up-arrow'></i>}} */}
            <p>
              {diff && earningsDiff ? (
                data.query === "orders" ? (
                  <CountUp duration={2} end={diff} />
                ) : (
                  <CountUp duration={2} end={earningsDiff} />
                )
              ) : (
                "Loading"
              )}{" "}
              %
            </p>
          </div>
        </div>
        <div className="middle">
          <h1>
            {data.currency}{" "}
            {data.query === "orders" ? (
              <CountUp duration={2} end={amount} />
            ) : (
              <CountUp duration={2} end={earnings} decimals={2} separator="," />
            )}
          </h1>
        </div>
        <div className="bottom">
          <Link to={`${data.link}`} className="widget__link">
            {data.linkDescription}
          </Link>
          {/* <div className="icon" style={{background: `${data.backgroundColor}`}}><i className={data.icon}></i></div> */}
        </div>
      </StyledWidget>
    </Tooltip>
  );
};

export default Widget;
