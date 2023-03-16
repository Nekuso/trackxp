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
    gap: 0.5rem;

    .add__modal__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

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
      row-gap: 0.8rem;

      .res__container {
        width: 100%;
        .img__input {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 1rem;

          .img__container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            img {
              width: 100%;
            }
  
            label {
              opacity: 0;
              position: absolute;
              transition: all 0.3s ease-in-out;
              i {
                font-size: 2rem;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
              }
            }

            :hover {
              background: #ccc;

              label {
                opacity: 1;
                i {
                  color: white;
                }
              }
            }

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
    }

    .roles__container {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.8rem;
      padding: 0.7rem;
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

    .action__container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      .btn {
        padding: 0.8rem 1rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      .cancel {
        flex: 1 1;
        background: #ccc;
        color: black;
        :hover {
          background: #aaa;
        }
      }

      .create {
        flex: 1 1;
        // background: #2ecc71;
        background: #27ae60;
        color: white;
        :hover {
          background: #27ae60;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .add__modal {
      width: 45%;
      min-height: 50%;

      .add__modal__header {
        .title {
          font-size: 0.8rem;
        }
      }

      .add__modal__body {
        .res__container {
          .img__input {
            gap: 0.5rem;
            margin-bottom: .5rem;
            .img__container {
              width: 30%;
              label {
                i {
                  font-size: 1.5rem;
                }
              }
            }
          }

          .info__container {
            row-gap: 0.2rem;
            .input__container {
              label {
                font-size: 0.8rem;
              }
              input {
                font-size: 0.7rem;
                padding: 0.5rem 0.5rem;
              }
            }
          }
        }

        .roles__container {
          gap: 0.2rem;
          .input__container {
            padding: 0.7rem;
            h2 {
              font-size: 0.8rem;
            }
            p {
              font-size: 0.6rem;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .add__modal {
      width: 35%;
      min-height: 50%;

      .add__modal__header {
        .title {
          font-size: 1rem;
        }
      }

      .add__modal__body {
        gap: 0.5rem;

        .res__container {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .img__input {
            width: 65%;
            gap: 0.5rem;
            margin: 0;

            .img__container {
              width: 65%;

              label {
                i {
                  font-size: 2rem;
                }
              }
            }
          }

          .info__container {
            row-gap: 0.2rem;
            .input__container {
              label {
                font-size: 0.7rem;
              }
              input {
                font-size: 0.6rem;
                padding: 0.6rem;
              }
            }
          }
        }

        .roles__container {
          gap: 0.2rem;
          .input__container {
            padding: 0.7rem;
            border-radius: 0.5rem;
            h2 {
              font-size: 0.7rem;
            }
            p {
              font-size: 0.6rem;
            }
          }
        }
      }
    }
  }
`;
