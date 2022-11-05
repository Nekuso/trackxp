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
              
            </form>
        </div>
    </StyledAddModal>
  )
}

export default AddModal