import React from 'react';
import {StyledStack} from "../styles/Stack.styled";
import ReactLogo from "../img/ReactLogo.png";
import NodeLogo from "../img/NodeLogo.png";
import FramerLogo from "../img/FramerLogo.png";
import FireBaseLogo from "../img/FireBaseLogo.png";
import StyledLogo from "../img/StyledLogo.png";
import {motion} from 'framer-motion';

const Stack = () => {

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


  return (
    <StyledStack>
        <motion.div className="stack__content"
          variants={container}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true, amount: 0.4 }}
        >
            <motion.h2 className="stack__title" variants={container}>
              <mark>Stacked</mark><br/>with modern tools and frameworks
            </motion.h2>
            <div className="stack__images">
              <motion.div
                variants={container}
                whileTap={{ scale: 0.8 }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                className="stack__image">
                <img src={ReactLogo} alt="" />
              </motion.div>
              <motion.div
                variants={container}
                whileTap={{ scale: 0.8 }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              className="stack__image">
                <img src={NodeLogo} alt="" />
              </motion.div>
              <motion.div
                variants={container}
                whileTap={{ scale: 0.8 }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                className="stack__image">
                <img src={FramerLogo} alt="" />
              </motion.div>
              <motion.div
                variants={container}
                whileTap={{ scale: 0.8 }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                className="stack__image">
                <img src={FireBaseLogo} alt="" />
              </motion.div>
              <motion.div
                variants={container}
                whileTap={{ scale: 0.8 }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                className="stack__image">
                <img src={StyledLogo} alt="" />
              </motion.div>
            </div>
        </motion.div>
    </StyledStack>
  )
}

export default Stack