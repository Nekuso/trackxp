import { setDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import {StyledSetTargetModal} from "../styles/SetTargetModal.styled";
import {doc} from 'firebase/firestore';
import {db} from "../firebase";
import {motion} from "framer-motion"

function SetTargetModal({handleSetTargetModal, handleTargetNotification}) {

    const [target, setTarget] = useState(0);

    const handleUpdateTarget = async() => {

      await setDoc(doc(db,"analytics", "targets"), {
          target: target,
      })
      handleSetTargetModal();
      handleTargetNotification();
    }
    const modalVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: .2,
          duration: 1,
        }
      },
      hidden2: {
        opacity: 0,
        y: "100vh",
      },
      visible2: {
        opacity: 1,
        y: 0,
        transition: {
          delay: .3,
          duration: 1,
          type: "spring",
          stiffness: 70,
        }
      },
    }

  return (
    <StyledSetTargetModal>
        <motion.div className="closer" onClick={()=>{handleSetTargetModal()}}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        />
        <motion.div className="set__modal"
            variants={modalVariants}
            initial="hidden2"
            animate="visible2"
            exit="hidden2"
        >
            <h1>Enter Today's Target</h1>
            <div className="set__modal__input">
                <input type="number" placeholder="P 0.00" onChange={e => setTarget(e.target.value)}/>
                <div className="buttons">
                    <button onClick={()=>{handleSetTargetModal()}}>Cancel</button>
                    <button onClick={handleUpdateTarget}>Update</button>
                </div>
            </div>
        </motion.div>
    </StyledSetTargetModal>
  )
}

export default SetTargetModal