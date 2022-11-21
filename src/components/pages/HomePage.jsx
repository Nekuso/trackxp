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
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
      }
    },
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
            <div className="hero__text">
              <p className="hero__badge">
                NEW
              </p>
              <h1 className="hero__title">
                Tracking made easy<br/>
                with TrackXP.
              </h1>
              <h3 className="hero__description">
                A proper tracking system that enables you to 
                optimize the best routes available for the 
                particular delivery.
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
            </div>

            <div className="hero__img">
              <img src={HeroImg2} alt="" />
            </div>
          </div>
        </div>
      </StyledHomePage>
    </motion.div>
  )
}

export default HomePage;