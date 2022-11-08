import React, { useState } from 'react'
import { StyledAddModal } from '../styles/AddModal.styled';
import OrderDataService from '../order.services';
import { serverTimestamp } from 'firebase/firestore';

const AddModal = ({handleAddModal}) => {
  const [orderId, setOrderId] = useState(100000001);
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [contact,setContact] = useState(0);
  const [payment,setPayment] = useState("Pending");
  const [total,setTotal] = useState(0);
  const [cycleStatus, setCycleStatus] = useState("Pending");
  const [particularsData, setParticularsData] = useState(
  [
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
  },]
  );
  const current = new Date();
  const dateCreated = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const handleAdd = async (e) => {
    e.preventDefault();
    handleAddModal();

    // calculate total price

    const newOrder = {
      orderId,
      firstName,
      lastName,
      contact,
      payment,
      dateCreated,
      cycleStatus,
      particularsData,
      total,
      timeStamp: serverTimestamp()
    }
    try {
      await OrderDataService.addOrders(newOrder)
    } catch(err) {
      console.log(err);
    }

    setFirstName("");
    setLastName("");
    setContact(0);
    setPayment("Pending");
  }

  const updateFieldChanged = (name, index) => (event) => {
    let newArr = particularsData.map((item, i) => {
      if (index === i) {
        return { ...item, [name]: event.target.value };
      } else {
        return item;
      }
    });
    setParticularsData(newArr);

    {particularsData.map((particular) => {
      if(particular.quantity > 0) {
        particular.itemTotal = particular.quantity * particular.price;
      }
    })}



  };


  return (
    <StyledAddModal >
        <div className="closer" onClick={()=>handleAddModal()}/>
        <div className="add__modal">
          <div className="add__modal__header">
              <h1 className="title">New Order</h1>
              <i onClick={()=>handleAddModal()} className='bx bx-x'></i>
          </div>
          <form onSubmit={handleAdd} className="add__modal__body">

            <div className="add__user__info">
              <h2>Costumer Info</h2>
              <div className="fullName__container">
                <div className="user__input">
                  <p>First Name</p>
                  <input 
                    type="text" 
                    placeholder="Enter First Name"
                    value={firstName} 
                    onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="user__input">
                  <p>Last Name</p>
                  <input 
                    type="text" 
                    placeholder="Enter Last Name"
                    value={lastName} 
                    onChange={(e)=>setLastName(e.target.value)}/>
                </div>
              </div>
              <div className="contact__container">
                <p>Contact No.</p>
                <input 
                  type="number" 
                  placeholder="Enter Contact No."
                  value={contact} 
                  onChange={(e)=>setContact(e.target.value)}/>
              </div>
              <div className="payment__container">
                <p>Payment</p>
                <select name="payment" id="payment" value={payment} onChange={(e)=>setPayment(e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
            </div>

            <table className="add__user__particulars">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th className="amounts"><p>Quantity</p> <p>Price</p> </th>
                </tr>
              </thead>
              <tbody>
                {particularsData.map((particular,index) => (
                  <tr key={index} >
                    <td>{particular.name}</td>
                    <td className="particular__input">
                      <input type="number" value={particular.quantity} onChange={updateFieldChanged("quantity", index)}/>
                      <input type="number" value={particular.price} onChange={updateFieldChanged("price", index)}/>
                    </td>
                </tr>
                ))}
              </tbody>
            </table>

            <div className="submit__container">
              <div className="grand__total">
                <p>Grand Total</p>
                <p>{total}</p>
              </div>
              <div className="buttons">
                <p onClick={handleAddModal}>Cancel</p>
                <button type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
    </StyledAddModal>
  )
}

export default AddModal