import {React} from 'react'
import {StyledAbout} from "../styles/About.styled";
import { motion } from 'framer-motion'; 

import About1 from "../img/About1.png";
import About2 from "../img/About2.png";
import About3 from "../img/About3.png";
import Object1 from "../img/Float5.png";
import Object2 from "../img/Cloud.png";
import Object3 from "../img/Float4.png";

const About = () => {

  const aboutData = [
    {
      img: About1,
      title: "Blazingly Fast",
      desc: "TrackXP is simplified, Lightweight and direct, making it blazingly fast. It is built with the latest technologies and is optimized for speed."
    },
    {
      img: About2,
      title: "Real-Time Data",
      desc: "TrackXP is real-time, so you can see your data as it happens. No more waiting for the next day to see your data. "
    },
    {
      img: About3,
      title: "Scalable",
      desc: "TrackXP is built to scale, so you can grow your business without limits. We are always adding new features and improving the existing ones."
    },
  ]
  
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
    <StyledAbout className="about__section" id="about">
      <motion.img src={Object1} alt="" className="object1 float" 
        animate={{
          y: [0, 15, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }
        }}
      />
      <motion.img src={Object2} alt="" className="object2 float" 
        animate={{
          y: [0, 15, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }
        }}
      />
      <motion.img src={Object3} alt="" className="object3 float" 
        animate={{
          y: [0, 15, 0],
          scale:[1, 1.1, 1],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }
        }}
      />
      <motion.div className="about__content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="about__title">
          <span style={{overflow: "hidden"}}>
            <motion.h2
              variants={container}
              >Why TrackXP?</motion.h2>
          </span>
          <motion.h1
            variants={container}
            ><mark>Real-time</mark> tracking for the <br/>on-demand era</motion.h1>
        </div>
        <motion.div className="items__container">
          {aboutData.map((item, index) => (
            <motion.div className="item" key={index} variants={container}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              drag
              dragConstraints={{left:0, top:0, right:0, bottom:0}}
            >
              <div className="img__container">
                <img src={item.img} alt="about"/>
              </div>
              <div className="item__content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </StyledAbout>
  )
}

export default About