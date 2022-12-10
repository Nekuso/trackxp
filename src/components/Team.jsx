import React from "react";
import { StyledTeam } from "../styles/Team.styled";
import Documentor from "../img/Documentor.png";
import ProjectManager from "../img/ProjectManager.png";
import SystemAnayst from "../img/SystemAnalyst.png";
import Designer from "../img/Designer.png";
import Programmer from "../img/Programmer.png";
import ComputerImg from "../img/ComputerImg.png";
import CodeImg from "../img/CodeImg.png";
import AnnounceImg from "../img/AnnounceImg.png";
import ArcadeImg from "../img/ArcadeImg.png";
import DiceImg from "../img/DiceImg.png";
import DroneImg from "../img/DroneImg.png";
import NoteImg from "../img/NoteImg.png";
import PenImg from "../img/PenImg.png";
import PlaneImg from "../img/PlaneImg.png";
import PieImg from "../img/PieImg.png";
import {motion} from "framer-motion";


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
      float1: `${NoteImg}`,
      float2: `${PenImg}`,
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
      float1: `${PlaneImg}`,
      float2: `${AnnounceImg}`,
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
      float1: `${PieImg}`,
      float2: `${DiceImg}`,
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
      float1: `${DroneImg}`,
      float2: `${ArcadeImg}`,
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
      float1: `${ComputerImg}`,
      float2: `${CodeImg}`,
    },
  ];
  
  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
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
  };

  return (
    <StyledTeam>
      <motion.div className="team__content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="team__title">
          <motion.h1
            variants={container}
          >Our Team</motion.h1>
          <motion.h3
            variants={container}
          >
            A small team of dedicated individuals working together to bring you
            the best possible experience.
          </motion.h3>
        </div>

        <motion.div className="team__members"
        >
          {teamData.map((member, index) => {
            return (
              <motion.div className="team__member" key={index + 1}
                variants={container}
              >
                <div className="team__member__img__container">
                    <img className="float1 float" src={member.float1} alt="" />
                    <img className="float2 float" src={member.float2} alt="" />
                  <div className="team__member__img">
                    <img src={member.img} alt="" />
                  </div>
                </div>
                <div className="team__member__description">
                  <h3>{member.name}</h3>
                  <h1>{member.title}</h1>
                  {member.links}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </StyledTeam>
  );
};

export default Team;
