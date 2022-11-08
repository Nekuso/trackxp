import React from 'react'
import { StyledAddModal } from '../styles/AddModal.styled'

const AddModal = ({handleAddModal}) => {






  return (
    <StyledAddModal >
        <div className="closer" onClick={()=>handleAddModal()}/>
        <div className="add__modal">
          <div className="add__modal__header">
              <h1 className="title">New Order</h1>
              <i onClick={()=>handleAddModal()} className='bx bx-x'></i>
          </div>
          <form className="add__modal__body">

            <div className="add__user__info">
              <h2>Costumer Info</h2>
              <div className="fullName__container">
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

            <table className="add__user__particulars">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th className="amounts"><p>Quantity</p> <p>Price</p> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wash Loads</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={70} />
                  </td>
                </tr>
                <tr>
                  <td>Dry Loads</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={70} />
                  </td>
                </tr>
                <tr>
                  <td>Ariel</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={0} />
                  </td>
                </tr>
                <tr>
                  <td>Breeze</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={9} />
                  </td>
                </tr>
                <tr>
                  <td>Downy</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={8} />
                  </td>
                </tr>
                <tr>
                  <td>Surf</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={8} />
                  </td>
                </tr>
                <tr>
                  <td>Color Safe Sachet</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={10} />
                  </td>
                </tr>
                <tr>
                  <td>Color Safe Bottle</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={10} />
                  </td>
                </tr>
                <tr>
                  <td>Plastic Bag</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={0}/>
                  </td>
                </tr>
                <tr>
                  <td>Drop-Off (folding)</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={20}/>
                  </td>
                </tr>
                <tr>
                  <td>Other</td>
                  <td className="particular__input">
                    <input type="number" />
                    <input type="number" defaultValue={0}/>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="submit__container">
              <div className="grand__total">
                <p>Grand Total</p>
                <p>0</p>
              </div>
              <div className="buttons">
                <p>Cancel</p>
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
    </StyledAddModal>
  )
}

export default AddModal