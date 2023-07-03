import React, { useEffect, useState } from "react";
import { StyledDashboard } from "../styles/Dashboard.styled";
import Widget from "./Widget";
import Featured from "./Featured";
import Chart from "./Chart";
import AddModal from "./AddModal";
import SetTargetModal from "./SetTargetModal";
import { AnimatePresence, motion } from "framer-motion";

function Dashbooard({
  handleAddNotification,
  handleTargetNotification,
  data,
  diff,
  earnings,
  earningsDiff,
  amount,
  target,
  todaysEarnings,
  queryData,
  currentUser,
}) {
  const [isAddModal, setIsAddModal] = useState(false);
  const [isSetTargetModal, setIsSetTargetModal] = useState(false);

  const handleAddModal = () => {
    setIsAddModal(!isAddModal);
  };
  const handleSetTargetModal = () => {
    setIsSetTargetModal(!isSetTargetModal);
  };

  const dashboardVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible1: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    visible2: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    visible3: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    exit1: {
      opacity: 0,
      y: 10,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    exit2: {
      opacity: 0,
      y: 10,
      transition: {
        delay: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    exit3: {
      opacity: 0,
      y: 10,
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const [user, setUser] = useState(currentUser ? currentUser : "");

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  return (
    <StyledDashboard>
      <AnimatePresence>
        {isAddModal ? (
          <AddModal
            handleAddModal={handleAddModal}
            handleAddNotification={handleAddNotification}
          />
        ) : null}
        {isSetTargetModal ? (
          <SetTargetModal
            handleSetTargetModal={handleSetTargetModal}
            handleTargetNotification={handleTargetNotification}
          />
        ) : null}
      </AnimatePresence>

      <motion.div
        className="dashboard__header"
        variants={dashboardVariants}
        initial="hidden"
        animate="visible1"
        exit="exit1"
      >
        <h1 className="page__title">
          Welcome Back {user ? user.firstName : ""}!
        </h1>
      </motion.div>
      <motion.div
        className="widgets"
        variants={dashboardVariants}
        initial="hidden"
        animate="visible2"
        exit="exit2"
      >
        <Widget
          type="orders"
          className="widget1"
          data={data}
          diff={diff}
          earnings={earnings}
          earningsDiff={earningsDiff}
          amount={amount}
        />
        <Widget
          type="earnings"
          className="widget2"
          data={data}
          diff={diff}
          earnings={earnings}
          earningsDiff={earningsDiff}
          amount={amount}
        />
        <Widget
          type="balance"
          className="widget3"
          data={data}
          diff={diff}
          earnings={earnings}
          earningsDiff={earningsDiff}
          amount={amount}
        />
      </motion.div>

      <motion.div
        className="charts"
        variants={dashboardVariants}
        initial="hidden"
        animate="visible3"
        exit="exit3"
      >
        <Featured
          todaysEarnings={todaysEarnings}
          handleSetTargetModal={handleSetTargetModal}
          target={target}
        />
        <Chart queryData={queryData} />
      </motion.div>
    </StyledDashboard>
  );
}

export default Dashbooard;
