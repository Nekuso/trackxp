import {React, useState} from "react";
import { motion } from "framer-motion";
import { StyledRatingModal } from "../styles/RatingModal.styled";
import Rating from '@mui/material/Rating';
import OrderDataService from '../order.services';


const RatingModal = ({ handleIsRatingOpen, orderRawId,  toggle, setToggle}) => {
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
      scale: 0,
      transition: {
        delay: 0.1,
        duration: 0.7,
        type: "spring",
        stiffness: 90,
      },
    },
    visible2: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.7,
        type: "spring",
        stiffness: 90,
      },
    },
  };

  const [ratingValue, setRatingValue] = useState(0);
  const [commentValue, setCommentValue] = useState("");


  const handleRating = async (e) => {
    e.preventDefault();
    const newData = {
        orderRating: {ratingValue, commentValue}
      }

      try {
        await OrderDataService.updateOrder(orderRawId, newData);
      }
      catch (error) {
        console.log(error);
    }

    handleIsRatingOpen();
    setToggle(!toggle);
  }

  return (
    <StyledRatingModal>
      <motion.div
        className="closer"
        onClick={() => handleIsRatingOpen()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <motion.div
        className="set__modal"
        variants={modalVariants}
        initial="hidden2"
        animate="visible2"
        exit="hidden2"
      >
        <h1>How would you rate your experience?</h1>
        <div className="set__modal__input">
            <div className="rating__container">
              <Rating
                size="large"
                className="rating"
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(parseInt(newValue));
                  console.table(ratingValue);
                }}
              />
            </div>
          <label htmlFor="">Comment:</label>
          <textarea type="text" className="text__input" value={commentValue} onChange={(e)=>{setCommentValue(e.target.value);}} />
          <div className="buttons">
            <button onClick={handleIsRatingOpen}>Close</button>
            <button onClick={handleRating}>🎉Submit</button>
          </div>
        </div>
      </motion.div>
    </StyledRatingModal>
  );
};

export default RatingModal;
