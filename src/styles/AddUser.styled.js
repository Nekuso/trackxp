import styled from "styled-components";

export const StyledAddUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 110;

  .closer {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 101;
  }

  .add__modal {
    display: flex;
    flex-direction: column;
    width: 90%;
    min-height: 90%;
    background: #fafafa;
    border-radius: 1rem;
    padding: 1rem;
    z-index: 111;
    background: #f6f2f1;

    .add__modal__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0.5rem 0;

      .title {
        background: black;
        font-size: 1rem;
        color: white;
        padding: 0.2rem 1rem;
        border-radius: 2rem;
        font-weight: 600;
      }

      i {
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0.3rem;
      }
    }

    .add__modal__body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;

      .img__input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1rem;

        img {
          width: 30%;
          border-radius: 50%;
        }

        label {
          i {
            font-size: 2rem;
            cursor: pointer;
          }
        }
      }

      .info__container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        flex-wrap: wrap;
        .input__container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          input {
            width: 100%;
            border-radius: 0.5rem;
            border: 1px solid #ccc;
            padding: 0.5rem 0.8rem;
            outline: none;
            font-size: 1rem;
            font-weight: 600;
          }
        }

        .fname {
          width: 48%;
        }

        .lname {
          width: 48%;
        }

        .email {
          width: 100%;
        }
        .password {
          width: 100%;
        }
      }
    }

    .roles__container {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: .8rem;
      margin-top: 1rem;
      padding: .7rem;
      background: white;
      border-radius: 1rem;

      .input__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        padding: 1rem;
        border-radius: 1rem;
        transition: all 0.3s ease-in-out;

        h2 {
          font-size: 0.7rem;
        }

        p {
          font-size: 0.6rem;
        }

        :hover {
          cursor: pointer;
          background: black;

          h2 {
            color: white;
          }

          p {
            color: white;
          }
        }
      }

      .active {
        background: black;

        h2 {
          color: white;
        }

        p {
          color: white;
        }
      }
    }
  }
`;
