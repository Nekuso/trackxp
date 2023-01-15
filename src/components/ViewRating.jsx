import { React } from "react";
import { motion } from "framer-motion";
import { StyledRatingModal } from "../styles/RatingModal.styled";
import Rating from '@mui/material/Rating';

const ViewRating = ({handleViewRating, ratingValue, commentValue}) => {
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

  return (
    <StyledRatingModal>
      <motion.div
        className="closer"
        onClick={() => handleViewRating()}
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
        <h1>Rating and Feedback</h1>
        <div className="set__modal__input">
          <div className="rating__container">
            <Rating
              size="large"
              className="rating"
              name="read-only"
              value={ratingValue}
              readOnly
            />
          </div>
          <label htmlFor="" className="comment">Comment</label>
          <textarea type="text" className="text__input" value={commentValue} readOnly/>
          <div className="buttons">
            <button onClick={handleViewRating}>Close</button>
          </div>
        </div>
      </motion.div>
    </StyledRatingModal>
  );
};

export default ViewRating;
