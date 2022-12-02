import styled from "styled-components";

export const StyledAboutData = styled.div`
  width: 100%;
  min-height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  oveflow-x: hidden;

  * {
    ::selection {
      color: none;
      background: transparent;
    }
  }

  img {
    pointer-events: none;
  }

  .about__data__content {
    width: 90vw;
    height: auto;
    margin: 1rem 0;
    // background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    .about__data__img {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-area: image;
      cursor: pointer;
      position: relative;

      .float {
        position: absolute;
        z-index: 11;
      }

      .object1 {
        width: 9rem;
        top: 0;
        left: -5%;
      }
      .object2 {
        width: 10rem;
        bottom: -17%;
        right: -14%;
      }

      .img__layer{
        z-index:10;
      }
        .img {
          pointer-events: none;
          width: 50vh;
          background: transparent;
        }
    }

    .about__data__text {
      display: flex;
      flex-direction: column;
      height: auto;
      gap: .6rem;
      position: relative;
      z-index: 10;

      .float {
        position: absolute;
      }

      .object3 {
        bottom: -13%;
        right: 0;
        width: 9rem;
        z-index: 9;
      }
      
      .title {
        .badge {
          font-size: 5vw;
          line-height: .6;
        }
        .text__title {
          font-weight: 900;
          padding: 0.4rem 0;
          font-size: 8vw;
          line-height: 1.2;
          mark {
            color: #5773db;
            background: none;
          }
        }
      }

      .desc {
        font-size: 4vw;
        font-weight: 500;
      }

      .button__container {
        width: 100%;
        .button {
          display: inline-block;
          width: auto;
          position: relative;
          z-index: 1;
          cursor: pointer;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.6rem 1.1rem;
          border: 1px solid transparent;
          border-radius: 2rem;
          color: white;
          background: black;
          transition: all 0.4s ease-in-out;
          overflow: hidden;
  
          :before {
            content: "";
            position: absolute;
            border: none;
            top: 0;
            left: 0;
            height: 100%;
            width: 0;
            border-radius: 15px;
            background-color: #fafafa;
            z-index: -1;
            -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
            box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
            transition: all 250ms;
          }
          :hover {
            border: 1px solid black;
            :before {
              width: 100%;
            }
            color: black;
            transform: scale(1.05);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: center;

    .about__data__content {
      width: 90vw;
      flex-direction: row;

      .about__data__img {
        .object1 {
          top: -7%;
          left: -6%;
          width: 8rem;
        }

        .object2 {
          width: 10rem;
          bottom: -8%;
          left: -30%;
        }

        .img {
          width: 45vw;
        }
      }
  
      .about__data__text {

        .object3 {
          width: 8rem;
          bottom: 0;
          top: -30%;
        }

        .title {
          .badge {
            font-size: 1.8vw;
            line-height: .6;
          }
    
          .text__title {
            font-size: 4vw;
          }
        }
  
        .desc {
          font-size: 1.8vw;
        }

        .button__container {
          .button {
            font-size: 1.3vw;
            padding: 0.6rem 1.6rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
    .about__data__content {
      width: 85vw;

      .about__data__img {

        .object1 {
          top: -8%;
          left: -12%;
          width: 11rem;
        }

        .object2 {
          width: 12rem;
          bottom: -14%;
          left: -35%;
        }

        .img {
          width: 40vw;
        }
      }

      .about__data__text {

        .object3 {
          width: 13rem;
          bottom: 0;
          right: -20%;
          top: -50%;
        }
        .title {
          .badge {
            font-size: 1.5vw;
            line-height: .6;
          }
  
          .text__title {
            font-size: 3vw;
          }
        }

        .desc {
          font-size: 1.4vw;
        }

        .button__container {
          .button {
            font-size: 1vw;
          }
        }
    }
  }

  @media screen and (min-width: 1200px) {
    .about__data__content {
      .about__data__img {
        .object1 {
          top: -8%;
          left: -15%;
          width: 15rem;
        }

        .object2 {
          width: 18rem;
          bottom: -15%;
          left: -40%;
        }
      }

      .about__data__text {
        .object3 {
          width: 15rem;
          right: -15%;
          top: -50%;
        }
      }
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    height: 80vw;
  }


`;

