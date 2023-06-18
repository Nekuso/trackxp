import React, { useEffect, useState } from "react";
import { serverTimestamp, doc, setDoc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { motion } from "framer-motion";
import { StyledAddUser } from "../styles/AddUser.styled";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const UpdateUser = ({ handleUpdateModalUser, currentDataEdit }) => {
  const [selectedRole, setSelectedRole] = useState(
    currentDataEdit.role === "Administrator"
      ? 0
      : currentDataEdit.role === "Manager"
      ? 1
      : 2
  );

  const [file, setFile] = useState(null);
  const [img, setImg] = useState(currentDataEdit.img || "");
  const [firstName, setFirstName] = useState(currentDataEdit.firstName);
  const [lastName, setLastName] = useState(currentDataEdit.lastName);
  const [email, setEmail] = useState(currentDataEdit.email);
  const [password, setPassword] = useState(currentDataEdit.password);
  const [role, setRole] = useState(currentDataEdit.role);

  function handleRole(index) {
    setSelectedRole(index);
    setRole(roles[index].role);
  }

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImg(URL.createObjectURL(file));
  };

  async function updateUser(e) {
    e.preventDefault();

    if (file) {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, "files/" + name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      try {
        await uploadTask;
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setImg(downloadUrl);
      } catch (error) {
        console.log(error);
      }
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
      role,
      img,
      createdAt: serverTimestamp(),
    };

    try {
      const docRef = doc(db, "users", email);
      await setDoc(docRef, user);
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.log(err);
    }

    handleUpdateModalUser();
  }

  const roles = [
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
        onClick={() => handleUpdateModalUser()}
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
          <h1 className="title">Update User</h1>
          <i onClick={() => handleUpdateModalUser()} className="bx bx-x"></i>
        </div>
        <form onSubmit={updateUser} className="add__modal__body">
          <div className="res__container">
            <div className="img__input">
              <div className="img__container">
                <img
                  src={
                    img
                      ? img
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt="user"
                />
                <label htmlFor="file">
                  <i className="bx bx-upload"></i>
                </label>
              </div>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleFile}
              />
            </div>

            <div className="info__container">
              <div className="input__container fname">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="input__container lname">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="input__container email">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input__container password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minlength="8"
                  required
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
            <div
              className="btn cancel"
              onClick={() => handleUpdateModalUser()}
            >
              Cancel
            </div>
            <button className="btn create">Update</button>
          </div>
        </form>
      </motion.div>
    </StyledAddUser>
  );
};

export default UpdateUser;
