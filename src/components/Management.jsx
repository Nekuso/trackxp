import React, { useEffect, useState } from "react";
import { StyledManagement } from "../styles/Management.styled";
import { AnimatePresence } from "framer-motion";
import AddUser from "./AddUser";
import { auth, db } from "../firebase";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import UpdateUser from "./UpdateUser";

const Management = ({ queryUsers }) => {
  const [isAddUser, setIsAddUser] = useState(false);
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [role, setRole] = useState("Administrator");
  const [currentDataEdit, setCurrentDataEdit] = useState([null]);

  const [users, setUsers] = useState([]);

  const updateRole = async (role, email, user) => {
    await setDoc(doc(db, "users", email), {
      ...user,
      role,
    });
  };

  useEffect(() => {
    setUsers(queryUsers);
  }, [queryUsers]);

  const handleAddModalUser = () => {
    setIsAddUser(!isAddUser);
  };
  const handleUpdateModalUser = (user) => {
    setIsUpdateUser(!isUpdateUser);
    setCurrentDataEdit(user);
  };

  const handleDelete = async (id, imageUrl) => {
    try {
      // Delete user from Firebase Authentication

      // Delete user from Firestore
      await deleteDoc(doc(db, "users", id));

      // Delete user's image from Firebase Storage
      const storage = getStorage();
      const imageRef = ref(storage, `files/${imageUrl}`);
      await deleteObject(imageRef);

      // Delete user from the list of users
      setUsers(users.filter((user) => user.id !== id));

      console.log("Successfully deleted user");
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <StyledManagement>
      <div className="management__header">
        <h1>Management</h1>
      </div>
      <AnimatePresence>
        {isAddUser ? <AddUser handleAddModalUser={handleAddModalUser} /> : null}
        {isUpdateUser ? (
          <UpdateUser
            handleUpdateModalUser={handleUpdateModalUser}
            currentDataEdit={currentDataEdit}
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
          <button onClick={handleAddModalUser} className="add__user__btn">
            Add User
          </button>
        </div>

        <ul className="user__list">
          {users.map((user, index) => (
            <li className="user__list__item" key={index + 1}>
              <div
                className="user__content"
                onClick={() => handleUpdateModalUser(user)}
              >
                <div className="img__container">
                  <div className="user__img">
                    <img src={user.img} alt="user" loading="lazy" />
                  </div>
                </div>
                <div className="user__info">
                  <h2>{user.firstName + " " + user.lastName}</h2>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="user__actions">
                <select
                  name=""
                  id=""
                  value={user.role}
                  onChange={(event) =>
                    updateRole(event.target.value, user.email, user)
                  }
                >
                  <option value="administrator">Administrator</option>
                  <option value="Manager">Manager</option>
                  <option value="Staff">Staff</option>
                </select>
                <i
                  className="bx bxs-trash-alt"
                  onClick={() => handleDelete(user.id, user, user.file)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledManagement>
  );
};

export default Management;
