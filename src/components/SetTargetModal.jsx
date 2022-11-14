import { setDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import {StyledSetTargetModal} from "../styles/SetTargetModal.styled";
import {doc} from 'firebase/firestore';
import {db} from "../firebase";

function SetTargetModal({handleSetTargetModal}) {

    const [target, setTarget] = useState(0);


    const handleUpdateTarget = async() => {

        await setDoc(doc(db,"analytics", "targets"), {
            target: target,
        })
        handleSetTargetModal();
    }


  return (
    <StyledSetTargetModal>
        <div className="closer" onClick={()=>{handleSetTargetModal()}}/>
        <div className="set__modal">
            <h1>Enter Today's Target</h1>
            <div className="set__modal__input">
                <input type="number" placeholder="P 0.00" onChange={e => setTarget(e.target.value)}/>
                <div className="buttons">
                    <button onClick={()=>{handleSetTargetModal()}}>Cancel</button>
                    <button onClick={handleUpdateTarget}>Update</button>
                </div>
            </div>
        </div>
    </StyledSetTargetModal>
  )
}

export default SetTargetModal