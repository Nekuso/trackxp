import React, { useEffect, useState } from "react";
import { serverTimestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import { StyledAddUser } from "../styles/AddUser.styled";

const AddModal = ({ handleAddModalUser }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
    hidden2: {
      opacity: 0,
      y: "100vh",
      transition: {
        delay: 0.1,
        duration: 0.7,
        type: "spring",
        stiffness: 90,
      },
    },
    visible2: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.7,
        type: "spring",
        stiffness: 90,
      },
    },
  };

  return (
    <StyledAddUser>
      <motion.div
        className="closer"
        onClick={() => handleAddModalUser()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <motion.div
        className="add__modal"
        variants={modalVariants}
        initial="hidden2"
        animate="visible2"
        exit="hidden2"
      >
        <div className="add__modal__header">
          <h1 className="title">New User</h1>
          <i onClick={() => handleAddModalUser()} className="bx bx-x"></i>
        </div>
        <form onSubmit={""} className="add__modal__body">
          <div className="img__input">
            <img src="https://picsum.photos/200" alt="user" />
            <label htmlFor="file">
              <i class="bx bx-upload"></i>
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>

          <div className="input__container">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" />
          </div>
          <div className="input__container">
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" />
          </div>
          <div className="input__container">
            <label htmlFor="name">Email</label>
            <input type="text" id="name" />
          </div>
          <div className="input__container">
            <label htmlFor="name">Password</label>
            <input type="password" id="name" />
          </div>
          <div className="input__container">
            <input type="radio" />
            <div className="input__desc">
              <h2>Administrator</h2>
              <p>
                Administrator can access and manage all data and perform all
                actions.
              </p>
            </div>
          </div>
          <div className="input__container">
            <input type="radio" />
            <div className="input__desc">
              <h2>Manager</h2>
              <p>
                Manager can access and manage all data and perform all actions.
              </p>
            </div>
          </div>
          <div className="input__container">
            <input type="radio" />
            <div className="input__desc">
              <h2>Staff</h2>
              <p>
                Staff can access and manage all data and perform all actions.
              </p>
            </div>
          </div>
        </form>
      </motion.div>
    </StyledAddUser>
  );
};

export default AddModal;
