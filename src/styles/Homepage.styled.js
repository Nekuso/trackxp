import styled from "styled-components";
import LightHomepage from "../img/LightHomepage.jpg";


export const StyledHomePage = styled.div`
  width: 100vw;
  height: auto;
  
  .section {
    width: 100%;
    height: 100vh;
  }
  .homepage__section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    background-image: url(${LightHomepage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    color: #04294f;
    color: #262D31;
    
    .hero__container {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 1fr;
      grid-template-areas:
        "image image"
        "text text";
      row-gap: 2rem;
      width: 90vw;
      height: auto;
      justfy-content: center;
      align-items: center;

      .hero__text {
        grid-area: text;

        .hero__badge {
          display: inline;
          padding: 0.2rem 1.3rem;
          border-radius: 2rem;
          font-size: 0.8rem;
          background: #ffffff96;
          border: 1px solid #dbdbdb3f;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          backdrop-filter: blur(20px);
        }

        .hero__title {
          font-weight: 900;
          padding: 0.4rem 0;
          font-size: 8vw;
          line-height: 1.2;
          mark {
            color: #5773db;
            background: none;
          }
        }

        .hero__description {
          font-size: 4vw;
          font-weight: 500;
          padding: 0.4rem 0;
          
        }

        .tracking__input__container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 3.8rem;
          margin: 1rem 0;
          background: #ffffff96;
          border-radius: 1.3rem;
          overflow: hidden;

          .tracking__input {
            width: 85%;
            height: 100%;
            padding: 1rem 1.5rem;
            border: none;
            background: transparent;
            color: black;

            ::placeholder {
              color: black;
            }
          }

          .tracking__input__button {
            display: flex;
            justify-content: center;
            align-items: center;
            background: none;
            border: none;
            width: 15%;
            height: 100%;
            overflow: hidden;
            border-radius: 1.3rem;
            transition: all 0.2s ease-in-out;

            :hover {
              cursor: pointer;
              background: white;
            }

            i {
              color: black;
              font-size: 1.8rem;
            }
          }
        }
      }

      .hero__img {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: image;
        .img {
          width: 40vh;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .homepage__section {
      .hero__container {
        grid-template-areas:
          "text image"
          "text image";

        .hero__text {
          .hero__badge {
            font-size: 1.8vw;
          }

          .hero__title {
            font-size: 4vw;
          }

          .hero__description {
            font-size: 2vw;
          }
          .hero__input__coontainer {
          }
        }

        .hero__img {
          .img {
            width: 110%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .homepage__section {
      .hero__container {
        justify-content: space-between;
        width: 85vw;
        grid-template-columns: 50% 45%;
        .hero__text {
          .hero__badge {
            font-size: 1.2vw;
          }

          .hero__title {
            font-size: 3.5vw;
          }

          .hero__description {
            font-size: 1.4vw;
          }
        }

        .hero__img {
          .img {
            width: 120%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .homepage__section {
      .hero__container {
        width: 80vw;
        .hero__text {
          width: 90%;
          .hero__badge {
            font-size: 1vw;
          }

          .hero__title {
            font-size: 3vw;
          }

          .hero__description {
            font-size: 1.2vw;
          }
        }

        .hero__img {
          .img {
            width: 130%;
          }
        }
      }
    }
  }
`;
