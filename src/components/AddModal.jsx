import React from 'react'
import { StyledAddModal } from '../styles/AddModal.styled'

const AddModal = ({handleAddModal}) => {
  return (
    <StyledAddModal >
        <div className="closer" onClick={()=>handleAddModal()}/>
        <div className="add__modal">
          <div className="add__modal__header">
              <h1 className="title">New Order</h1>
              <i onClick={()=>handleAddModal()} className='bx bx-collapse-alt'></i>
          </div>
          <form className="add__modal__body">

            <div className="add__user__info">
              <h2>Costumer Info</h2>
              <div className="fullName__input__container">
                <div className="user__input">
                  <p>First Name</p>
                  <input type="text" placeholder="Enter First Name"/>
                </div>
                <div className="user__input">
                  <p>Last Name</p>
                  <input type="text" placeholder="Enter Last Name"/>
                </div>
              </div>
              <div className="contact__container">
                <p>Contact No.</p>
                <input type="number" placeholder="Enter Contact No."/>
              </div>
              <div className="payment__container">
                <p>Payment</p>
                <select name="payment" id="payment">
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
            </div>

            <div className="add__user__particulars">

            </div>
          </form>
        </div>
    </StyledAddModal>
  )
}

export default AddModal