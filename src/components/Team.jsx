import React from 'react';
import { StyledTeam } from '../styles/Team.styled';
import unpreview from "../img/unpreview.png";

const Team = () => {
  return (
    <StyledTeam>
        <div className="team__content">
            <div className="team__title">
                Meet the team section
                <h1>More Content on the way!</h1>
                <img src={unpreview} alt="" className="team__title__img" style={{width: "100%"}}/>
            </div>
            
            <div className="team__members">
                <div className="team__member">
                    <div className="team__member__img">
                    </div>
                </div>
            </div>
            

        </div>
    </StyledTeam>
    )
}

export default Team