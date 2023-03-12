import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 1rem;
  z-index: 51;

  .home__link {
    display: flex;
    align-items: center;

    i {
      color: #5773db;
      font-size: 1.8rem;
      margin-right: 0.5rem;
    }
    h2 {
      color: black;
      width: auto;
      font-size: 1.8rem;
      text-align: center;

      mark {
        background: #5c31d4;
        background: linear-gradient(to right, #5c31d4 0%, #d43192 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .nav__links {
    .dash__nav__container {
      .nav__dash__button {
        border: none;
        border-radius: 4rem;
        text-align: center;
        font-weight: 700;
        color: white;
      }
    }

    li {
      .Link {
        padding: 0.3rem 0;
        border-bottom: 3px solid rgba(255, 255, 255, 0);
        transition: 0.4s ease-in-out;
        color: black;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 0;
    max-width: 90vw;
    .nav__links {
      display: block;
      width: 230px;
      transition: 0.4s ease-in-out;
      position: fixed;
      top: 0;
      right: -100%;
      bottom: 0;
      padding: 5rem 0;
      z-index: 100;

      .dash__nav__container {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 3rem;
        text-align: center;
        .github__link {
          color: white;
          i {
            font-size: 2rem;
          }
        }
        .nav__dash__button {
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          padding: 1rem;
          color: #ffff;
        }
      }

      li {
        margin: 3rem;
        text-align: center;
        .Link {
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          padding: 1rem;
          color: #ffff;
        }
      }
    }

    .nav__active {
      justify-content: center;
      position: fixed;
      top: 0;
      top: 0;
      right: 0;
      bottom: 0;
      gap: 1rem;
      background: #303030e7;
      transition: 0.4s ease-in-out;
    }

    .is-Active {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999;
    }

    .nav__hamburger {
      cursor: pointer;
      display: grid;
      position: relative;
      z-index: 101;

      user-select: none;

      appearance: none;
      border: none;
      outline: none;
      background: none;

      span {
        display: block;
        position: relative;
        background: #04294f;
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
      background: #ffff;
    }
    .is-active span:nth-child(2) {
      opacity: 0;
      transform: translateX(10px);
    }
    .is-active span:nth-child(3) {
      transform: translate(0px, -8px) rotate(-45deg);
      background: #ffff;
      width: 33px;
    }

    span:nth-child(2) {
      justify-self: end;
      width: 23px;
    }
    span:nth-child(3) {
      justify-self: end;
      width: 13px;
    }
  }

  @media screen and (min-width: 769px) {
    .nav__links {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 70%;
      height: auto;
      position: relative;

      .dash__nav__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        .github__link {
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            color: #293241;
            font-size: 2rem;
          }
        }
        .nav__dash__button {
          padding: 0.5rem 1.1rem;
          border: none;
          border-radius: 4rem;
          text-align: center;
          background: #293241;
          font-weight: 700;
          color: white;
          font-size: 0.7rem;
        }
      }

      li {
        margin: 0.5rem 1.5rem;
        .Link {
          font-size: 0.7rem;
          font-weight: 500;
        }

        .Signup {
          background: #ffff;
          color: #000000;
          padding: 0.6rem 1.3rem;
          border-radius: 1rem;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        }
      }
    }
    .nav__hamburger {
      display: none;
    }
    .nav__active {
      display: flex;
      position: relative;
      background: none;
    }
  }
  @media screen and (min-width: 1100px) {
    max-width: 90%;
    .brand__logo {
      width: 10vw;
    }
    .nav__links {
      .nav__dash__button {
        font-size: 0.8rem;
        padding: 0.8rem 1rem;
      }
      li {
        .Link {
          font-size: 1vw;
        }
      }
    }
  }
`;
