import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { StyledOrders } from '../styles/Orders.styled';
import AddModal from './AddModal';
import DataTable from './DataTable';
import {motion} from 'framer-motion';


const Orders = ({handleAddNotification, handleDeleteNotification, queryData, setQueryData}) => {

  const [isAddModal, setIsAddModal] = useState(false);

  const handleAddModal = () => {
    setIsAddModal(!isAddModal);
  }

  const viewVariants = {
    initialHidden: {
      opacity: 0,
      y: 6
    },
    initialVisible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: .5,
        transition: {
          type: "spring",
          stiffness: 80,
        }
      }
    }
  }

  return (
    <StyledOrders>
      <motion.div className="orders__header"
        variants={viewVariants}
        initial="initialHidden"
        animate="initialVisible"
        exit="initialHidden"
      >
        <AnimatePresence>
          {isAddModal ? <AddModal handleAddModal={handleAddModal} handleAddNotification={handleAddNotification} /> : null}
        </AnimatePresence>
        <div className="text__header">
          <h1 className="title">All orders</h1>
          <p className="date">{Date()}</p>
        </div>
        <button onClick={handleAddModal} className="new__button">New Order</button>
      </motion.div>
      <DataTable handleDeleteNotification={handleDeleteNotification} queryData={queryData} setQueryData={setQueryData}/>
    </StyledOrders>
  );
}

export default Orders;
