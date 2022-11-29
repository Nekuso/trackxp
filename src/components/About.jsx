import {React, useEffect} from 'react'
import {StyledAbout} from "../styles/About.styled";
import { useAnimation, motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
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

  const {ref, inView} = useInView({
    threshold: 0.5
  });

  const animateSection = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if(inView) {
      animateSection.start("visible");
      animation1.start("visible1");
      animation2.start("visible2");
      animation3.start("visible");
    }
    else {
      animateSection.start("hidden");
      animation1.start("hidden");
      animation2.start("hidden");
      animation3.start("hiddenV");
    }
  }, [animateSection,animation1,animation2,animation3,inView]);
  
  const container = {
    hiddenV: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 5,
        type: "spring",
        stiffness: 90,
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
  };

  const aboutVariants = {
    hidden: { opacity: 0, y: 20, 
      transition: {
        delay: .2,
      }
    },
    visible1: {
      opacity: 1,
      y:0,
      transition: {
        delay: .3,
        duration: 2.6,
        type: "spring",
        stiffness: 90,
      },
    },
    visible2: {
      opacity: 1,
      y:0,
      transition: {
        delay: .5,
        duration: 2.8,
        type: "spring",
        stiffness: 90,
      },
    },
    hiddenV: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y:0,
    },
  }

  return (
    <StyledAbout className="about__section" ref={ref}>
      <img src={Object1} alt="" className="object1 float" />
      <img src={Object2} alt="" className="object2 float" />
      <img src={Object3} alt="" className="object3 float" />
      <motion.div className="about__content"
      >
        <div className="about__title">
          <motion.h2
            variants={aboutVariants}
            initial="hidden"
            animate={animation1}
            exit="hidden"
            
          >Why TrackXP?</motion.h2>
          <motion.h1
            variants={aboutVariants}
            initial="hidden"
            animate={animation2}
          ><mark>Real-time</mark> tracking for the <br/>on-demand era</motion.h1>
        </div>
        <motion.div className="items__container"
          variants={container}
          initial="hidden"
          animate={animation3}
          exit="hidden"
        >
          {aboutData.map((item, index) => (
            <motion.div className="item" key={index} variants={aboutVariants}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
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