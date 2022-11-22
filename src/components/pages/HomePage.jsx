import {React, useEffect, useState} from 'react'
import {StyledHomePage} from '../../styles/HomePage.styled'
// import HeroImg from '../../img/HeroImg.png'
import HeroImg2 from '../../img/HeroImg2.gif'
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

function HomePage() {

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => { 
    console.log(searchValue);
  }, [searchValue]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/${searchValue}`);

  }

  const homeVariants = {
    hidden: {
      opacity: 0,
    },
    hidden2: {
      opacity: 0,
      y: 10
    },
    hidden3: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      }
    },
    visible2: {
      opacity: 1,
      y:0,
      transition: {
        delay: 1,
        duration: 1,
      }
    },
    visible3: {
      opacity: 1,
      y:0,
      transition: {
        delay: 1.5,
        duration: 1,
      }
    }
  }

  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"

      >
      <StyledHomePage>
        <Navbar/>
        <div className="homepage__section">
          <div className="hero__container">
            <motion.div className="hero__text"
              variants={homeVariants}
              initial={"hidden2"}
              animate={"visible2"}
              exit={"hidden2"}>
              <p className="hero__badge">
                NEW
              </p>
              <h1 className="hero__title">
                Tracking made easy<br/>
                with TrackXP.
              </h1>
              <h3 className="hero__description">
                A real-time tracking system that enables you to 
                optimize the best updates for
                particular order.
              </h3>

              <form onSubmit={handleSearch} className="tracking__input__container">
                <input 
                  className="tracking__input" 
                  type="text" 
                  placeholder="Tracking Number"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="tracking__input__button">
                  <i className='bx bx-search-alt'/>
                </button>
              </form>
            </motion.div>

            <motion.div className="hero__img"
              variants={homeVariants}
              initial={"hidden3"}
              animate={"visible3"}
              exit={"hidden3"}>
              <img src={HeroImg2} alt="" />
            </motion.div>
          </div>
        </div>
      </StyledHomePage>
    </motion.div>
  )
}

export default HomePage;