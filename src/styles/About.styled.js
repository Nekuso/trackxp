import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100%;
  min-height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  oveflow-x: hidden;

  .float {
    position: absolute;
    width: 7rem;
  }

  .object1 {
    top: 53%;
    left: -9%;
    width: 11rem;
  }
  .object2 {
    top: 0;
    right: 0%;
    width: 10rem;
  }
  .object3 {
    bottom: 0%;
    right: 0%;
    width: 10rem;
  }
  

  .about__content {
    width: 90vw;
    height: auto;
    margin: 1rem 0;
    // background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    z-index: 20;
    oveflow-x: hidden;


    .about__title{
      width: 100%;
      h2{
        font-size: 4vw;
        font-weight: 700;
      }

      h1{
        line-height: 1.2;
        font-size: 6vw;
        font-weight: 900;
        mark {
          background: none;
          background: #5C31D4;
          background: linear-gradient(to right, #5C31D4 0%, #D43192 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    .items__container {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      align-items: stretch;
      flex-wrap: wrap;
      gap: 2%;
      row-gap: .7rem;
      

      .item {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 1 1 48%;
        background: #262D31;
        padding: 1rem;
        padding-top: 6.5rem;

        border-radius: 1rem;

        :hover {
          cursor: pointer; 

          .img__container {
            img {
              transform: translateY(-1rem);
              animation: float 2s ease-in-out infinite;
            }
          }
        }

        .img__container {
          position: absolute;
          top: -20px;
          width: 8rem;

          img {
            width: 100%;
            transform: translate(0,  0px);
            transition: all 0.3s ease-in-out;
          }
        }
        
        .item__content {
          color: white;
          
          h2 {
            text-align: center;
            font-size: 1.1rem;
            padding-bottom: .7rem;
            ::selection {
              color: none;
              background: none;
            }
          }
          p {
            font-size: .8rem;
            ::selection {
              color: none;
              background: none;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .about__content {
      .items__container {
        .item {
          :nth-last-child(1){
            flex-direction: row;
            padding: 1rem;
            justify-content: space-between;
            .img__container {
              position: relative;
              top: 0;
              width: 30%;
            }
  
            .item__content {
              width: 65%;
              h2 {
                text-align: left;
              }
            }
          }
        }
      }
    }
  }

  @keyframes float {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, -9px); }
    100%   { transform: translate(0, -0px); }   
  }
  @keyframes float2 {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, -15px); }
    100%   { transform: translate(0, -0px); }   
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;

    .object1 {
      top: 25%;
      left: -4%;
      width: 12rem;
    }
    .object2 {
      top: 0%;
      right: 0%;
      width: 12rem;
    }
    .object3 {
      bottom: 0%;
      right: 0%;
      width: 12rem;
    }

    .about__content {
      .about__title {
        h2 {
          font-size: 2.5vw;
          line-height: 1.5; 

        }
        h1 {
          font-size: 4vw;
          line-height: 1.2;
        }
      }

      .items__container {
        justify-content: space-between;
        .item{
          flex: 0 1 32%;
          padding: 1.5rem;
          padding-top: 7.5rem;

          .item__content {
            p {
              font-size: 1.7vw;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;

    .object1 {
      top: 20%;
      left: -4%;
      width: 14rem;
    }
    .object2 {
      top: 5%;
      right: 7%;
      width: 12rem;
    }
    .object3 {
      bottom: 0%;
      right: -4%;
      width: 15rem;
    }

    .about__content {
      width: 85vw;

      .about__title {
        h2 {
          font-size: 2.5vw;
          margin-bottom: .3rem;
        }
        h1 {
          font-size: 3.5vw;
        }
      }

      .items__container {
        .item {
          flex: 0 1 31%;
          padding: 2rem;
          padding-top: 8.5rem;

          .img__container {
            width: 9.5rem;
          }

          .item__content {
            h2 {
              font-size: 2.2vw;
            }
            p {
              font-size: 1.3vw;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {

    .object1 {
      top: 20%;
      left: -2%;
      width: 18rem;
    }
    .object2 {
      top: 0%;
      right: 10%;
      width: 16rem;
    }
    .object3 {
      bottom: 0%;
      right: -4%;
      width: 20rem;
    }

    .about__content {
      width: 80vw;

      .about__title {
        h2 {
          font-size: 2vw;
        }
        h1 {
          font-size: 3vw;
        }
      }

      .items__container {
        .item {
          flex: 0 1 28%;
          padding: 1.5rem;
          padding-top: 9.5rem;

          .item__content {
            h2 {
              font-size: 1.8vw;
            }
            p {
              font-size: 1.1vw;
            }
        }
      }
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    height: 80vw;
  }
`;
