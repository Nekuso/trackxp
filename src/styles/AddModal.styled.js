import styled from "styled-components";

export const StyledAddModal = styled.div`
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
    width: 95%;
    height: 90%;
    background: #fafafa;
    border-radius: 1rem;
    padding: 1rem;
    z-index: 111;

    .add__modal__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0.5rem 0;

      .title {
        font-size: 1.5rem;
      }

      i {
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0.3rem;
      }
    }

    .add__modal__body {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow-y: scroll;

      .add__user__info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 1rem;
        background: white;

        h2 {
          font-size: 1.3rem;
          font-weight: 500;
          padding: 0.3rem 0;
        }

        .fullName__input__container {
          display: flex;
          width: 100%;
          justify-content: space-between;

          .user__input {
            width: 48%;
            p {
              font-size: 0.8rem;
              margin-left: 0.7rem;
            }
            input {
              width: 100%;
              border: none;
              border-radius: 0.5rem;
              padding: 0.8rem;
              border: 1px solid #ccc;
            }
          }
        }

        .contact__container {
          width: 100%;
          p {
            font-size: 0.8rem;
            margin-left: 0.7rem;
          }
          input {
            width: 100%;
            border: none;
            border-radius: 0.5rem;
            padding: 0.8rem;
            border: 1px solid #ccc;
          }
        }
        .payment__container {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;

          select {
            text-align: center;
            width: 100%;
            border: none;
            border-radius: 0.5rem;
            padding: 0.5rem;
            border: 1px solid #ccc;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .add__modal {
      width: 85%;
      height: 90%;
      background: white;
      border-radius: 1rem;
      padding: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .add__modal {
    }
  }
`;
