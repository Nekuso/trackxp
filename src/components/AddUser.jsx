import React, { useEffect, useState } from "react";
import { serverTimestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import { StyledAddUser } from "../styles/AddUser.styled";

const AddModal = ({ handleAddModalUser }) => {
  const [selectedRole, setSelectedRole] = useState(0);

  const [img, setImg] = useState("https://picsum.photos/200");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Administrator");

  function handleRole(index) {
    setSelectedRole(index);
    setRole(roles[index].role);
  }

  function roleSubmit(e) {
    e.preventDefault();

    handleAddModalUser();
    console.log(firstName, lastName, email, password, role);
  }

  const roles = [
    {
      role: "Administrator",
      description:
        "Administrator can access and manage all data and perform all actions. ",
    },
    ,
    {
      role: "Manager",
      description:
        "Manager can access and manage all data and perform all actions except for managing users.",
    },
    {
      role: "Staff",
      description:
        "Staff can access and manage all data and perform all actions except for managing users and managing staff.",
    },
  ];

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
        <form onSubmit={roleSubmit} className="add__modal__body">
          <div className="res__container">
            <div className="img__input">
              <div className="img__container">
                <img src={img} alt="user" />
                <label htmlFor="file">
                  <i class="bx bx-upload"></i>
                </label>
              </div>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>

            <div className="info__container">
              <div className="input__container fname">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input__container lname">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input__container email">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input__container password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="roles__container">
            {roles.map((role, index) => (
              <div
                className={`input__container ${
                  selectedRole === index ? "active" : ""
                }`}
                onClick={() => handleRole(index)}
                key={index + 1}
              >
                <h2>{role.role}</h2>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
          <div className="action__container">
            <button className="btn cancel" onClick={handleAddModalUser}>
              Cancel
            </button>
            <button className="btn create">Create</button>
          </div>
        </form>
      </motion.div>
    </StyledAddUser>
  );
};

export default AddModal;
