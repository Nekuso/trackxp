import React from 'react';
import { motion } from 'framer-motion';
import { StyledGuide } from '../styles/Guide.styled';
import Step from "../img/Step.png"

const steps = [
  {
    className: "step",
    img: `${Step}`,
    firstTitle: "Take your Costumer's",
    secondTitle: "ORDER",
    description: "Simply input the costumer's information such as name, contact number, and particulars then print their receipt.",
  },
  {
    className: "step",
    img: `${Step}`,
    firstTitle: "Process the order and", 
    secondTitle: "UPDATE",
    description: "Process and keep track of the orders you've received and update the status of the order in real time. ",
  },
  {
    className: "step scanner",
    img: `${Step}`,
    firstTitle: "View the order using",
    secondTitle: "SCAN",
    description: "Save time for your costumers by letting them Scan the QR code of the order and view the order's details such as the their information, order details, and real time status.",
  },
  {
    className: "step",
    img: `${Step}`,
    firstTitle: "Finish the order and",
    secondTitle: "COMPLETE",
    description: "Once the order's process is done, simply complete the order and the costumer will be notified that their order is ready for pick up.",
  },
]

const Guide = () => {

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 3,
        type: "spring",
        stiffness: 90,
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  };

  const OtherContainer = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 3,
        type: "spring",
        stiffness: 90,
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  };

  return (
    <StyledGuide>
      <motion.div className="guide__content"
        variants={container}
      >
        <motion.h1 className="title"
          variants={container}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true, amount: 0.9 }}
        >
          Here's how it
          <br/>works.
        </motion.h1>
        <div className="guide__steps">
          {steps.map((step, index) => (
            <motion.div className={step.className} key={index + 1}
              variants={OtherContainer}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.div className="step__img"
                variants={OtherContainer}
              >
                <img src={step.img} alt="" />
              </motion.div>
              <div className="step__desc">
                <motion.h3
                  variants={OtherContainer}
                >{step.firstTitle}</motion.h3>
                <motion.h1
                  variants={OtherContainer}
                >{step.secondTitle}</motion.h1>
                <motion.p
                  variants={OtherContainer}
                  >
                  {step.description}
                </motion.p>
              </div>
              
            </motion.div>
          ))}
        </div>

      </motion.div>
    </StyledGuide>
  )
}

export default Guide