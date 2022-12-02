import {React, useEffect} from 'react'
import { StyledAboutData } from '../styles/AboutData.styled';
import DataImg from "../img/AboutDataImg.gif";
import Cloud2 from "../img/Cloud2.png";
import Float4 from "../img/Float4.png";
import Float1 from "../img/Float1.png";
import { useInView } from 'react-intersection-observer';
import {useAnimation, motion} from 'framer-motion';


const AboutData = () => {
  const {ref, inView} = useInView({
    threshold: 0.1
  });

  const animate1 = useAnimation();

  useEffect(() => {
    if(inView) {
      animate1.start("visible");
    }
    // else {
    //   animate1.start("exit");
    // }
  }, [animate1, inView]);

  const container = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 90,
        when: "beforeChildren",
        staggerChildren: 0.2,
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
  }
  const AboutDataVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y:0,
    }
  }

  return (
    <StyledAboutData>
      <div className="about__data__content" ref={ref}>
        <div className="about__data__img">

          <img src={Cloud2} alt="" className="object1 float" />
          <img src={Float4} alt="" className="object2 float" />
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="img__layer"
          >
            <img src={DataImg} 
              className="img"
              alt=""
            >
            </img>
          </motion.div>
        </div>
        <motion.div className="about__data__text"
          variants={container}
          initial="hidden"
          animate={animate1}
          exit="exit"
        >
          <img src={Float1} alt="" className="object3 float" />
          <div className="title">
            <motion.h3 className="badge"
              variants={AboutDataVariants}
              >About Data</motion.h3>
            <motion.h1 className="text__title"
              variants={AboutDataVariants}
              >Keep <mark>Track</mark> Of It All</motion.h1>
          </div>
          <motion.p className="desc"
              variants={AboutDataVariants}
              >Good data allows organizations to establish baselines, benchmarks, and goals to keep moving forward. Because data alows you to measure, you wil be able to establish baselines, find benchmarks and set performance goals.</motion.p>
          <motion.div className="button__container"
            variants={AboutDataVariants}
          >
            <div className="button">
              EXPLORE
            </div>
          </motion.div>
        </motion.div>
      </div>
    </StyledAboutData>
  )
}

export default AboutData