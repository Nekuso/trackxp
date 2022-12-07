import {React} from 'react'
import { StyledAboutData } from '../styles/AboutData.styled';
import DataImg from "../img/AboutDataImg.gif";
import Cloud2 from "../img/Cloud2.png";
import Float4 from "../img/Float4.png";
import Float1 from "../img/Float1.png";
import { motion } from 'framer-motion';


const AboutData = () => {

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 1,
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
    <StyledAboutData>
      <motion.div className="about__data__content" 
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true, amount: 0.2 }}
      >

        <div className="about__data__img">
            <motion.img src={Cloud2} alt="" className="object1 float" 
              animate={{
                y: [0, 15, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            />
          <motion.img src={Float4} alt="" className="object2 float" 
            animate={{
              y: [0, 15, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
            }}
          />
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="img__layer"
          >
            <motion.img src={DataImg} 
              variants={container}
              className="img"
              alt=""
            />
          </motion.div>
        </div>
        <div className="about__data__text">
          <motion.img src={Float1} alt="" className="object3 float" 
            animate={{
              y: [0, 15, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
            }}
          />
          <div className="title">
            <motion.h3 className="badge"
              variants={container}
              >About Data</motion.h3>
            <motion.h1 className="text__title"
              variants={container}
              >Keep <mark>Track</mark> Of It All</motion.h1>
          </div>
          <motion.p className="desc"
              variants={container}
              >Good data allows organizations to establish baselines, benchmarks, and goals to keep moving forward. Because data alows you to measure, you wil be able to establish baselines, find benchmarks and set performance goals.</motion.p>
          <motion.div className="button__container"
            variants={container}
          >
            <div className="button">
              EXPLORE
            </div>
          </motion.div>
        </div>
      </motion.div>
    </StyledAboutData>
  )
}

export default AboutData