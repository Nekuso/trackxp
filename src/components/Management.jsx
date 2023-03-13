import React, { useState } from "react";
import { StyledManagement } from "../styles/Management.styled";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import AddUser from "./AddUser";

const Management = () => {
  const [isAddUser, setIsAddUser] = useState(false);

  const handleAddModalUser = () => {
    setIsAddUser(!isAddUser);
  };

  return (
    <StyledManagement>
      <div className="management__header">
        <h1>Management</h1>
      </div>
      <AnimatePresence>
        {isAddUser ? (
          <AddUser
            handleAddModalUser={handleAddModalUser}
          />
        ) : null}
      </AnimatePresence>
      <div className="management__content">
        <div className="add__container">
          <h2>Users</h2>
          <p>
            Add users to your and assign them to different roles with different
            permissions. You are in control of who can access what data and what
            actions they can perform.
          </p>
          <button onClick={handleAddModalUser} className="add__user__btn">Add User</button>
        </div>

        <ul className="user__list">
          <li className="user__list__item">
            <div className="user__content">
              <div className="user__img">
                <img src="https://picsum.photos/200" alt="user" />
              </div>
              <div className="user__info">
                <h2>Ezzer Dave Camal</h2>
                <p>EzzerDave@gmail.com</p>
              </div>
            </div>
            <div className="user__actions">
              <select name="" id="" value="">
                <option value="administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Staff">Staff</option>
              </select>
              <i className="bx bxs-trash-alt"></i>
            </div>
          </li>
          <li className="user__list__item">
            <div className="user__content">
              <div className="user__img">
                <img src="https://picsum.photos/200" alt="user" />
              </div>
              <div className="user__info">
                <h2>Ezzer Dave Camal</h2>
                <p>EzzerDave@gmail.com</p>
              </div>
            </div>
            <div className="user__actions">
              <select name="" id="" value="">
                <option value="administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Staff">Staff</option>
              </select>
              <i className="bx bxs-trash-alt"></i>
            </div>
          </li>
          <li className="user__list__item">
            <div className="user__content">
              <div className="user__img">
                <img src="https://picsum.photos/200" alt="user" />
              </div>
              <div className="user__info">
                <h2>Ezzer Dave Camal</h2>
                <p>EzzerDave@gmail.com</p>
              </div>
            </div>
            <div className="user__actions">
              <select name="" id="" value="">
                <option value="administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Staff">Staff</option>
              </select>
              <i className="bx bxs-trash-alt"></i>
            </div>
          </li>
          <li className="user__list__item">
            <div className="user__content">
              <div className="user__img">
                <img src="https://picsum.photos/200" alt="user" />
              </div>
              <div className="user__info">
                <h2>Ezzer Dave Camal</h2>
                <p>EzzerDave@gmail.com</p>
              </div>
            </div>
            <div className="user__actions">
              <select name="" id="" value="">
                <option value="administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Staff">Staff</option>
              </select>
              <i className="bx bxs-trash-alt"></i>
            </div>
          </li>
          <li className="user__list__item">
            <div className="user__content">
              <div className="user__img">
                <img src="https://picsum.photos/200" alt="user" />
              </div>
              <div className="user__info">
                <h2>Ezzer Dave Camal</h2>
                <p>EzzerDave@gmail.com</p>
              </div>
            </div>
            <div className="user__actions">
              <select name="" id="" value="">
                <option value="administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Staff">Staff</option>
              </select>
              <i className="bx bxs-trash-alt"></i>
            </div>
          </li>
        </ul>
      </div>
    </StyledManagement>
  );
};

export default Management;
