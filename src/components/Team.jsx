import React from "react";
import { StyledTeam } from "../styles/Team.styled";
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
      twitter: "https://twitter.com/",
      links: (
        <div className="team__member__links">
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook-circle" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram" />
          </a>
        </div>
      ),
    },
    {
      img: `${ProjectManager}`,
      name: "Dave",
      title: "Project Manager",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      links: (
        <div className="team__member__links">
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin-square" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-twitter" />
          </a>
        </div>
      ),
    },
    {
      img: `${SystemAnayst}`,
      name: "Sargine",
      title: "Systems Analyst",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      links: (
        <div className="team__member__links">
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin-square" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-github" />
          </a>
        </div>
      ),
    },
    {
      img: `${Designer}`,
      name: "Adrian",
      title: "Designer(UI/UX)",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      links: (
        <div className="team__member__links">
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-dribbble" />
          </a>
        </div>
      ),
    },
    {
      img: `${Programmer}`,
      name: "Nixxo",
      title: "Programmer",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      links: (
        <div className="team__member__links">
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-github" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="bx bxl-codepen" />
          </a>
        </div>
      ),
    },
  ];

  return (
    <StyledTeam>
      <div className="team__content">
        <div className="team__title">
          <h1>Our Team</h1>
          <h3>
            A small team of dedicated individuals working together to bring you
            the best possible experience.
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
                  {member.links}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </StyledTeam>
  );
};

export default Team;
