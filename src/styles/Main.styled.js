import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .main__container {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }

  .float {
    position: absolute;
    width: 7rem;
    height: auto;
  }
  .set1{
    top: -2%;
    left: 45%;
    width: 7rem;
    animation: floating ease-in-out 4s infinite;
  }
  .set2{
    top: 20%;
    left: 10%;
    width: 7rem;
    animation: floating ease-in-out 8s infinite;
  }
  .set3{
    top: 60%;
    left: 85%;
    width: 10rem;
    animation: floating ease-in-out 3s infinite;
  }
  .set4{
    top: 70%;
    left: -1%;
    width: 10rem;
    animation: floating ease-in-out 5s infinite;
  }
  .set5{
    top: 40%;
    left: 65%;
    width: 10rem;
    animation: floating ease-in-out 4s infinite;
  }
  .set6{
    top: 55%;
    left: 30%;
    width: 10rem;
    animation: floating ease-in-out 4s infinite;
  }
  .set7{
    top: 0%;
    left: 90%;
    width: 10rem;
    animation: floating ease-in-out 6s infinite;
  }

  @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 7px); }
    100%   { transform: translate(0, -0px); }   
  }

`;
