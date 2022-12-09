import React from 'react';
import { StyledTeam } from '../styles/Team.styled';
import Documentor from "../img/Documentor.png";
import ProjectManager from "../img/ProjectManager.png";
import SystemAnayst from "../img/SystemAnalyst.png";
import Designer from "../img/Designer.png";
import Programmer from "../img/Programmer.png";

const Team = () => {

    const teamData = [
        {
            img: `${Documentor}`,
            name: "Natalie",
            title: "Documentor",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/"
        },
        {
            img: `${ProjectManager}`,
            name: "Dave",
            title: "Project Manager",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/"
        },
        {
            img: `${SystemAnayst}`,
            name: "Sargine",
            title: "Systems Analyst",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/"
        },
        {
            img: `${Designer}`,
            name: "Adrian",
            title: "Designer(UI/UX)",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/"
        },
        {
            img: `${Programmer}`,
            name: "Nixxo",
            title: "Programmer",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/"
        }
    ]

  return (
    <StyledTeam>
        <div className="team__content">
            <div className="team__title">
                <h1>Our Team</h1>
                <h3>
                    A small team of dedicated individuals working together to bring you the best possible experience.
                </h3>
            </div>
            
            <div className="team__members">
                {teamData.map((member, index) => {
                    return (
                        <div className="team__member" key={index + 1}>
                            <div className="team__member__img">
                                <img src={member.img} alt="" />
                            </div>
                            <div className="team__member__description">
                                <h3>{member.name}</h3>
                                <h1>{member.title}</h1>
                                <div className="team__member__links">
                                    <i className='bx bxl-facebook-circle'></i>
                                    <i className='bx bxl-twitter' ></i>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            

        </div>
    </StyledTeam>
    )
}

export default Team