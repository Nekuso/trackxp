import {React, useState, useEffect} from 'react';
import { StyledEditModal } from '../styles/EditModal.styled';
import { doc } from 'firebase/firestore';
import OrderDataService from '../order.services';

export const EditModal = ({handleEditModal, order, docId}) => {
    const [firstName,setFirstName] = useState(`${order.firstName}`);
    const [lastName,setLastName] = useState(`${order.lastName}`);
    const [contact,setContact] = useState(`${order.contact}`);
    const [payment,setPayment] = useState(`${order.payment}`);
    const [total,setTotal] = useState(`${order.total}`);
    const [cycleStatus, setCycleStatus] = useState(`${order.cycleStatus}`);

    const [particularsData, setParticularsData] = useState(
        [
          {
          id: "washLoads",
          name: "Wash Loads",
          quantity: `${order.particularsData[0].quantity}`,
          price: `${order.particularsData[0].price}`,
          itemTotal: `${order.particularsData[0].itemTotal}`,
        },
        {
          id: "dryLoads",
          name: "Dry Loads",
          quantity: `${order.particularsData[1].quantity}`,
          price: `${order.particularsData[1].price}`,
          itemTotal: `${order.particularsData[1].itemTotal}`,
        },
        {
          id: "ariel",
          name: "Ariel",
          quantity: `${order.particularsData[2].quantity}`,
          price: `${order.particularsData[2].price}`,
          itemTotal: `${order.particularsData[2].itemTotal}`,
        },
        {
          id: "breeze",
          name: "Breeze",
          quantity: `${order.particularsData[3].quantity}`,
          price: `${order.particularsData[3].price}`,
          itemTotal: `${order.particularsData[3].itemTotal}`,
        },
        {
          id: "downy",
          name: "Downy",
          quantity: `${order.particularsData[4].quantity}`,
          price: `${order.particularsData[4].price}`,
          itemTotal: `${order.particularsData[4].itemTotal}`,
        },
        {
          id: "surf",
          name: "Surf",
          quantity: `${order.particularsData[5].quantity}`,
          price: `${order.particularsData[5].price}`,
          itemTotal: `${order.particularsData[5].itemTotal}`,
        },
        {
          id: "colorSafeSachet",
          name: "Color Safe Sachet",
          quantity: `${order.particularsData[6].quantity}`,
          price: `${order.particularsData[6].price}`,
          itemTotal: `${order.particularsData[6].itemTotal}`,
        },
        {
          id: "colorSafeBottle",
          name: "Color Safe Bottle",
          quantity: `${order.particularsData[7].quantity}`,
          price: `${order.particularsData[7].price}`,
          itemTotal: `${order.particularsData[7].itemTotal}`,
        },
        {
          id: "plasticBag",
          name: "Plastic Bag",
          quantity: `${order.particularsData[8].quantity}`,
          price: `${order.particularsData[8].price}`,
          itemTotal: `${order.particularsData[8].itemTotal}`,
        },
        {
          id: "dropOff",
          name: "Drop-Off (Folding)",
          quantity: `${order.particularsData[9].quantity}`,
          price: `${order.particularsData[9].price}`,
          itemTotal: `${order.particularsData[9].itemTotal}`,
        },
        {
          id: "other",
          name: "Other",
          quantity: `${order.particularsData[10].quantity}`,
          price: `${order.particularsData[10].price}`,
          itemTotal: `${order.particularsData[10].itemTotal}`,
        },]
    );

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

    const handleCycle =()=> {
      if(order.cycleStatusCollection.length === 4){
        setCycleStatus("Completed");
      }
      else{
        setCycleStatus("Pending");
      }
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        handleEditModal();
        handleCycle();

        const newData = {
          firstName: firstName,
          lastName: lastName,
          contact: contact,
          payment: payment,
          total: total,
          particularsData: particularsData,
          cycleStatus: cycleStatus,
        }

        try {
          await OrderDataService.updateOrder(docId, newData);
        }
        catch (error) {
          console.log(error);
        }

    }

    useEffect(() => {
        particularsData.map((particular) => {
          if(particular.quantity > 0) {
            return particular.itemTotal = particular.quantity * particular.price;
          }
          else {
            return particular.itemTotal = 0;
          }
        })
        setTotal(particularsData.reduce((acc, curr) => acc + curr.itemTotal, 0));
        console.log(docId)
    },[particularsData])


  return (
    <StyledEditModal>
        <div className="closer" onClick={()=>handleEditModal()}/>
        <div className="edit__modal">
          <div className="edit__modal__header">
              <h1 className="title">Edit Order</h1>
              <i onClick={()=>handleEditModal()} className='bx bx-x'></i>
          </div>
          <form onSubmit={handleEdit} className="edit__modal__body">

            <div className="edit__user__info">
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

            <table className="edit__user__particulars">
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
                <p onClick={handleEditModal}>Cancel</p>
                <button type='submit'>Update</button>
              </div>
            </div>
          </form>
        </div>
    </StyledEditModal>
  )
}
