import React, { useEffect, useState } from "react";
import { StyledAddModal } from "../styles/AddModal.styled";
import OrderDataService from "../order.services";
import { serverTimestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const AddModal = ({ handleAddModal, handleAddNotification }) => {
  // Current Data and Time
  const currentDateTime = new Date();

  // Order input data
  const [orderId, setOrderId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState(0);
  const [payment, setPayment] = useState("Pending");
  const [total, setTotal] = useState(0);
  const [cycleStatus, setCycleStatus] = useState("Pending");
  const [cycleStatusCollection, setCycleStatusCollection] = useState([
    {
      icon: "bx-receipt",
      name: "Created",
      timeStamp: `${
        currentDateTime.getMonth() + 1
      }/${currentDateTime.getDate()}/${currentDateTime.getFullYear()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`,
    },
  ]);
  const [particularsData, setParticularsData] = useState([
    {
      id: "washLoads",
      name: "Wash Loads",
      quantity: 0,
      price: 70,
      itemTotal: 0,
    },
    {
      id: "dryLoads",
      name: "Dry Loads",
      quantity: 0,
      price: 70,
      itemTotal: 0,
    },
    {
      id: "ariel",
      name: "Ariel",
      quantity: 0,
      price: 0,
      itemTotal: 0,
    },
    {
      id: "breeze",
      name: "Breeze",
      quantity: 0,
      price: 9,
      itemTotal: 0,
    },
    {
      id: "downy",
      name: "Downy",
      quantity: 0,
      price: 8,
      itemTotal: 0,
    },
    {
      id: "surf",
      name: "Surf",
      quantity: 0,
      price: 8,
      itemTotal: 0,
    },
    {
      id: "colorSafeSachet",
      name: "Color Safe Sachet",
      quantity: 0,
      price: 10,
      itemTotal: 0,
    },
    {
      id: "colorSafeBottle",
      name: "Color Safe Bottle",
      quantity: 0,
      price: 10,
      itemTotal: 0,
    },
    {
      id: "plasticBag",
      name: "Plastic Bag",
      quantity: 0,
      price: 0,
      itemTotal: 0,
    },
    {
      id: "dropOff",
      name: "Drop-Off (Folding)",
      quantity: 0,
      price: 20,
    },
    {
      id: "other",
      name: "Other",
      quantity: 0,
      price: 0,
      itemTotal: 0,
    },
  ]);
  const [orderRating, setOrderRating] = useState({
    rating: 0,
    comment: "",
  });
  const current = new Date();
  const dateCreated = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    const fetchData = async () => {
      const todaysTarget = doc(db, "analytics", "idCount");
      const docSnap = await getDoc(todaysTarget);
      if (docSnap.exists()) {
        setOrderId(docSnap.data().count);
        console.log(orderId);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, [orderId]);

  const handleAdd = async (e) => {
    e.preventDefault();
    handleAddModal();

    const newOrder = {
      orderId,
      firstName,
      lastName,
      contact,
      payment,
      dateCreated,
      cycleStatus,
      cycleStatusCollection,
      particularsData,
      total,
      orderRating,
      timeStamp: serverTimestamp(),
    };
    try {
      await OrderDataService.addOrders(newOrder);
      await setDoc(doc(db, "analytics", "idCount"), {
        count: orderId + 1,
      });
    } catch (err) {
      console.log(err);
    }

    setFirstName("");
    setLastName("");
    setContact(0);
    setPayment("Pending");
    handleAddNotification();
  };

  const updateFieldChanged = (name, index) => (event) => {
    let newArr = particularsData.map((item, i) => {
      if (index === i) {
        return { ...item, [name]: event.target.value };
      } else {
        return item;
      }
    });
    setParticularsData(newArr);
  };

  useEffect(() => {
    particularsData.map((particular) => {
      if (particular.quantity > 0) {
        return (particular.itemTotal = particular.quantity * particular.price);
      } else {
        return (particular.itemTotal = 0);
      }
    });
    setTotal(particularsData.reduce((acc, curr) => acc + curr.itemTotal, 0));
  }, [particularsData]);

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
    <StyledAddModal>
      <motion.div
        className="closer"
        onClick={() => handleAddModal()}
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
          <h1 className="title">New Order</h1>
          <i onClick={() => handleAddModal()} className="bx bx-x"></i>
        </div>
        <form onSubmit={handleAdd} className="add__modal__body">
          <div className="add__user__info">
            <h2>Costumer Info</h2>
            <div className="fullName__container">
              <div className="user__input">
                <p>First Name</p>
                <input
                  required
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="user__input">
                <p>Last Name</p>
                <input
                  required
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="contact__container">
              <p>Contact No.</p>
              <input
                type="number"
                placeholder="Enter Contact No."
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="payment__container">
              <p>Payment</p>
              <select
                name="payment"
                id="payment"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
          </div>

          <table className="add__user__particulars">
            <thead>
              <tr>
                <th>Particulars</th>
                <th className="amounts">
                  <p>Quantity</p> <p>Price</p>{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {particularsData.map((particular, index) => (
                <tr key={index}>
                  <td>{particular.name}</td>
                  <td className="particular__input">
                    <input
                      type="number"
                      value={particular.quantity ? particular.quantity : ""}
                      onChange={updateFieldChanged("quantity", index)}
                      placeholder="0"
                    />
                    <input
                      type="number"
                      value={particular.price}
                      onChange={updateFieldChanged("price", index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="submit__container">
            <div className="grand__total">
              <p>Grand Total</p>
              <p>
                <CountUp duration={1} end={total} decimals={2} />
              </p>
            </div>
            <div className="buttons">
              <p onClick={handleAddModal}>Cancel</p>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </motion.div>
    </StyledAddModal>
  );
};

export default AddModal;
