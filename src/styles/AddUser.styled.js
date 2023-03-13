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
      width: 100%;
      height: 100%;

      .img__input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 30%;
        gap: 1rem;

        img {
          width: 100%;
          border-radius: 50%;
        }

        label {
          i {
            font-size: 2rem;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
