import React from 'react'
import {StyledHomepage} from '../../../styles/Homepage.styled'
import HeroImg from '../../../img/HeroImg.png'

function Homepage() {

  return (
    <StyledHomepage>
        <div className="homepage__section">
          <div className="hero__container">
            <div className="hero__text">
              <p className="hero__badge">
                NEW
              </p>
              <h1 className="hero__title">
                Tracking made easy<br/>
                with TrackXp.
              </h1>
              <h3 className="hero__description">
                A proper tracking system that enables you to 
                optimize the best routes available for the 
                particular delivery.
              </h3>

              <form className="tracking__input__container">
                <input className="tracking__input" type="text" placeholder="Tracking Number"/>
                <button className="tracking__input__button">
                  <i className='bx bx-search-alt'/>
                </button>
              </form>
            </div>

            <div className="hero__img">
              <img src={HeroImg} alt="" />
            </div>
          </div>
        </div>
    </StyledHomepage>
  )
}

export default Homepage;