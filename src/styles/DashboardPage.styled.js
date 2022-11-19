import styled from "styled-components";

export const StyledDashboardPage = styled.div`
  .dashboard__section {
    width: 100vw;
    height: 100vh;
    background: transparent;
    transition: all 0.2s ease-in-out;
    
    
    .dashboard__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: auto;
      width: 100%;
      transition: all 0.2s ease-in-out;

      .dashboard__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        width: 100vw;
        position: relative;
        background: #f4f4f4;

        .is-Active {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 999;
        }

        .nav__hamburger {
          cursor: pointer;
          display: grid;
          // position: fixed;
          z-index: 101;

          user-select: none;

          appearance: none;
          border: none;
          outline: none;
          background: none;

          span {
            display: block;
            position: relative;
            background: #000000;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            border-radius: 2px;
            transform-origin: 0, 0;
            transition: 0.4s;
          }
        }

        .is-active span:nth-child(1) {
          transform: translate(0px, 10px) rotate(45deg);
          background: #ffffff;
        }
        .is-active span:nth-child(2) {
          opacity: 0;
          transform: translateX(10px);
        }
        .is-active span:nth-child(3) {
          transform: translate(0px, -8px) rotate(-45deg);
          background: #ffffff;
          width: 33px;
        }

        span:nth-child(2) {
          justify-self: start;
          width: 23px;
        }
        span:nth-child(3) {
          justify-self: start;
          width: 13px;
        }

        .home__logo {
          h2 {
            color: #000000;

            mark {
              background: none;
              color: #5773db;
            }
          }
        }

        .hamburger__wrapper {
          display: none;
          transition: all 0.4s ease-in-out;
        }

        .wrapper__active {
          display: flex;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          z-index: 30;
          background: #3030301f;
          backdrop-filter: blur(5px);
          transition: all 0.4s ease-in-out;
        }

        .hamburger__content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 60vw;
          height: 100vh;
          background: #303030e7;
          display: flex;
          position: fixed;
          top: 0;
          right: 0;
          left: -100%;
          bottom: 0;
          z-index: 50;
          transition: 0.4s ease-in-out;
          .hamburger__links {
            margin: 10vh 1rem 0 1rem;
            padding: 0.5rem;
            li {
              display: flex;
              align-items: center;

              i {
                margin-right: 1rem;
                font-size: 1.5rem;
                color: white;
              }
              .link {
                margin: 1rem 0;
                font-size: 1rem;
                color: white;
              }
            }
          }

          .other__container {
            display: flex;
            flex-direction: column;
            padding: 1.5rem;

            .other__link {
              display: flex;
              margin: 1rem 0;
              font-size: 1rem;
              color: white;
              i {
                margin-right: 1rem;
                font-size: 1.5rem;
                color: white;
              }
            }
          }
        }

        .nav__active {
          left: 0;
        }

        button {
          display: flex;
          justfy-content: center;
          align-items: center;
          padding: 0.5rem;
          border: none;
          background: none;
          cursor: pointer;
          i {
            font-weight: 600;
            font-size: 1.8rem;
            color: #000000;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      .dashboard__main {
        display: grid;
        width: 100%;
        height: 100%;
        .main__container {
          display: flex;
          justify-content: center;
          // align-items: center;
          width: 100%;
          height: 100%;
          background: #f4f4f4;
          // overflow-y: scroll;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    transition: all 0.2s ease-in-out;
    .dashboard__section {
      .dashboard__wrapper {
        height: 100%;
        .dashboard__nav {
          display: none;
          padding: 0.3rem 2rem;
          .nav__hamburger {
            display: none;
          }
          .hamburger__wrapper {
            display: none;
          }

          .wrapper__active {
            display: none;
          }

          .hamburger__content {
            display: none;
          }

          .nav__active {
            display: none;
          }
        }

        .dashboard__main {
          display: flex;
          // justify-content: space-between;
          align-items: center;
          width: 100%;
          background: white;
          .main__container {
            display: flex;
            justify-content: center;
            // align-items: center;
            width: 100%;
            height: 100%;
            border-top: 0.5px solid #00000023;
            overflow-x: hidden;
            overflow-y: scroll;
            background: #fafafa;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .dashboard__section {
      .dashboard__wrapper {
        .dashboard__main {
          
        }
      }
    }
  }
`;
