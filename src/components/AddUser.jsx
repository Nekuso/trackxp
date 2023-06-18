import React, { useEffect, useState } from "react";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import { StyledAddUser } from "../styles/AddUser.styled";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddModal = ({ handleAddModalUser }) => {
  const [selectedRole, setSelectedRole] = useState(0);

  const [file, setFile] = useState("");
  const [img, setImg] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Administrator");

  const [per, setPer] = useState([null]);

  function handleRole(index) {
    setSelectedRole(index);
    setRole(roles[index].role);
  }

  async function roleSubmit(e) {
    e.preventDefault();

    try {
      let imgUrl = null;
      if (file) {
        const name = new Date().getTime() + file.name;
        console.log(name);
        const storageRef = ref(storage, "files/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setPer(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            switch (error.code) {
              case "storage/unauthorized":
                break;
              case "storage/canceled":
                break;
              case "storage/unknown":
                break;
            }
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);
            setImg(downloadURL);
            imgUrl = downloadURL;

            const user = {
              firstName,
              lastName,
              email,
              password,
              role,
              img: imgUrl,
              createdAt: serverTimestamp(),
            };

            const docRef = doc(db, "users", email);
            await setDoc(docRef, user);
            console.log("Document written with ID: ", docRef.id);
          }
        );
      } else {
        const user = {
          firstName,
          lastName,
          email,
          password,
          role,
          createdAt: serverTimestamp(),
        };

        const docRef = doc(db, "users", email);
        await setDoc(docRef, user);
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (err) {
      console.log(err);
    }

    handleAddModalUser();
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
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
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
                onChange={(e) => setFile(e.target.files[0])}
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
