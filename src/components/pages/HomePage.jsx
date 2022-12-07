import { React, useEffect, useState } from "react";
import { StyledHomePage } from "../../styles/HomePage.styled";
import HeroRobot from "../../img/HeroRobot.webm";
import HeroRobot2 from "../../img/HeroRobot2.mp4";
import Satellite from "../../img/Satellite.png";
import Cloud from "../../img/Cloud.png";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import About from "../About";
import { ScrollerMotion } from "scroller-motion";
import AboutData from "../AboutData";
import Stack from "../Stack";
import LoaderImg from "../../img/LoaderImg.gif";
import Guide from "../Guide";

function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/${searchValue}`);
  };

  const homeVariants = {
    hidden: {
      opacity: 0,
    },
    hidden2: {
      opacity: 0,
      y: 10,
    },
    hidden3: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    visible2: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
    visible3: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };

  const LoaderContainer = {
    exit: {
      y: "-100vh",
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 30,
      }
    }
  }

  const LoaderVariants = {
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
    exit: { opacity: 0, y: 40 },
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 6000)
  }, []);
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [hoverVariant, setHoverVariant]= useState("default")

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
      },
      backgroundColor:"transparent",
      border: "2px solid black",
      height: "32px",
      width: "32px",
      borderRadius: "50%",
      position: "fixed",
      pointerEvents: "none",
      zIndex: 9999999,
    }
  }

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({x: e.clientX, y: e.clientY})
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])
  return (
    <motion.div
      variants={homeVariants}
      exit="hidden"
    >
      <StyledHomePage>
        <AnimatePresence>
          {isLoading ? 
            <motion.div className="loader" variants={LoaderContainer} exit="exit">
              <motion.div className="loader__content" variants={LoaderVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  variants={LoaderVariants}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  drag
                  dragConstraints={{left:0, top:0, right:0, bottom:0}}
                >
                  <motion.img className="loader__img" src={LoaderImg} alt=""/>
                </motion.div>
                  <motion.h2
                  variants={LoaderVariants}
                >Synchronizing</motion.h2>
              </motion.div>
            </motion.div> : null
          }
        </AnimatePresence>
          <motion.div className="cursor" variants={cursorVariants} animate={hoverVariant}></motion.div>
        <ScrollerMotion spring={{mass: 1.25, stiffness: 100, damping: 50}} scale={1}>
          <Navbar />
          <div className="homepage__section section">
            <div className="hero__container">
              <motion.div
                className="hero__text"
                variants={homeVariants}
                initial={"hidden2"}
                animate={"visible2"}
                exit={"hidden2"}
              >
                <motion.img src={Satellite} className="text__img1" alt=""
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
                <motion.img src={Cloud} className="text__img2" alt=""
                  animate={{
                    y: [0, 15, 0],
                    transition: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }
                  }}
                />
                <p className="hero__badge">NEW</p>
                <h1 className="hero__title">
                  Tracking made easy
                  <br />
                  with Track<mark>XP</mark>
                </h1>
                <h3 className="hero__description">
                  A real-time tracking system that enables you to optimize the
                  best updates for a particular order.
                </h3>

                <form
                  onSubmit={handleSearch}
                  className="tracking__input__container"
                >
                  <input
                    className="tracking__input"
                    type="text"
                    placeholder="Tracking Number"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button className="tracking__input__button">
                    <i className="bx bx-search-alt" />
                  </button>
                </form>
              </motion.div>

              <motion.div
                className="hero__img"
                variants={homeVariants}
                initial={"hidden3"}
                animate={"visible3"}
                exit={"hidden3"}
                whileTap={{ scale: 0.8 }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              >
                <video
                  autoPlay="autoplay"
                  muted="muted"
                  loop="loop"
                  className="img"
                  controls={false}
                >
                  <source src={HeroRobot} type="video/webm" />
                  <source src={HeroRobot2} type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </div>
          <Stack/>
          <About />
          <AboutData/>
          <Guide/>
        </ScrollerMotion>
      </StyledHomePage>
    </motion.div>
  );
}

export default HomePage;
