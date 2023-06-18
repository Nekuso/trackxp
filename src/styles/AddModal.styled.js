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
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100%;
      overflow-y: scroll;

      .add__user__info {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 1rem;
        background: white;

        h2 {
          font-size: 1.3rem;
          font-weight: 500;
          padding: 0.3rem 0;
        }

        .fullName__container {
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
            appearance: none;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
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

      .add__user__particulars {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        width: 100%;
        border: 1px solid #ccc;
        padding: 1.5rem 1rem;
        border-radius: 1rem;
        background: white;

        thead {
          tr {
            display: flex;
            justify-content: space-between;
            align-items: center;

            th {
              font-size: 1.5rem;
            }

            .amounts {
              text-align: center;
              display: flex;
              justify-content: space-evenly;
              width: 40%;

              p {
                font-size: 0.7rem;
                width: 50%;
              }
            }
          }
        }

        tbody {
          tr {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin: 0.3rem 0;
            .particular__input {
              width: 40%;
              display: flex;
              gap: 0.5rem;

              input {
                font-weight: 700;
                text-align: center;
                width: 100%;
                border: none;
                border-radius: 0.5rem;
                padding: 0.4rem;
                border: 1px solid #ccc;
              }
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
          }
          .grand__total {
            td {
              text-align: center;
              font-weight: 700;
              font-size: 1.5rem;
            }
          }
        }
      }

      .submit__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem 0;

        .grand__total {
          display: flex;
          gap: 1rem;
          font-weight: 700;
          p {
            font-size: 0.9rem;
          }
        }

        .buttons {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          p {
            cursor: pointer;
            font-size: 1rem;
          }
          button {
            cursor: pointer;
            font-size: 1.1rem;
            padding: 0.6rem 2rem;
            border: none;
            border-radius: 2rem;
            background: black;
            color: white;
            transform: scale(0.9);
            transition: all 0.2s ease-in-out;

            :hover {
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .add__modal {
      width: 90%;
      height: auto;
      border-radius: 1rem;
      padding: 1.5rem;

      .add__modal__header {
        padding-top: 0;
        .title {
          font-size: 1rem;
        }
      }

      .add__modal__body {
        padding-bottom: 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 0;
        scroll-y: hidden;

        .add__user__info {
          border-radius: 0.5rem;
          width: 38%;
          gap: 0.3rem;
          padding: 0.8rem;

          h2 {
            font-size: 1rem;
          }

          .fullName__container {
            .user__input {
              p {
                font-size: 0.7rem;
              }
              input {
                font-size: 0.7rem;
                padding: 0.6rem;
              }
            }
          }

          .contact__container {
            p {
              font-size: 0.7rem;
            }
            input {
              font-size: 0.7rem;
              padding: 0.6rem;
            }
          }

          .payment__container {
            p {
              font-size: 0.8rem;
            }
            select {
              font-size: 0.7rem;
              padding: 0.6rem;
            }
          }
        }
        .add__user__particulars {
          border-radius: 0.5rem;
          width: 61%;
          padding: 1rem;

          thead {
            tr {
              th {
                font-size: 1rem;
              }
              .amounts {
                width: 30%;
                p {
                  font-size: 0.7rem;
                }
              }
            }
          }

          tbody {
            tr {
              align-items: center;
              margin: 0.1rem 0;
              td {
                font-size: 0.7rem;
              }
              .particular__input {
                width: 30%;
                gap: 0.3rem;
                justify-content: space-evenly;
                input {
                  width: 100%;
                  border-radius: 0.3rem;
                  font-size: 0.7rem;
                  padding: 0.2rem;
                }
              }
            }
          }
        }

        .submit__container {
          padding: 1rem 0 0 0;

          .grand__total {
            gap: 2rem;
          }

          .buttons {
            gap: 0.5rem;

            p {
              font-size: 0.8rem;
            }
            button {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .add__modal {
      width: 45%;
      height: auto;
      padding: 1rem;
      .add__modal__header {
        padding-top: 0;
        .title {
          font-size: 1rem;
          padding: 0.2rem 1.5rem;
        }

        i {
          font-size: 2rem;
        }
      }

      .add__modal__body {
        padding-bottom: 0;
        align-items: flex-start;
        scroll-y: hidden;
        overflow-y: hidden;

        .add__user__info {
          width: 40%;
          gap: 0.3rem;

          h2 {
            font-size: 1rem;
          }

          .fullName__container {
            .user__input {
              p {
                font-size: 0.7rem;
              }
              input {
                font-size: 0.7rem;
                padding: 0.4rem;
              }
            }
          }

          .contact__container {
            p {
              font-size: 0.7rem;
            }
            input {
              font-size: 0.7rem;
              padding: 0.6rem;
            }
          }

          .payment__container {
            p {
              font-size: 0.8rem;
            }
            select {
              font-size: 0.7rem;
              padding: 0.6rem;
            }
          }
        }
        .add__user__particulars {
          width: 58%;
          padding: 1rem;

          thead {
            tr {
              th {
                font-size: 1rem;
              }
              .amounts {
                p {
                  font-size: 0.7rem;
                }
              }
            }
          }

          tbody {
            tr {
              align-items: center;
              margin: 0.1rem 0;
              td {
                font-size: 0.7rem;
              }
              .particular__input {
                justify-content: space-around;
                input {
                  width: 100%;
                  border-radius: 0.3rem;
                  font-size: 0.7rem;
                  padding: 0.1rem;
                }
              }
            }
          }
        }

        .submit__container {
          padding: 1rem 0 0 0;

          .grand__total {
            gap: 1.5rem;
          }

          .buttons {
            gap: 0.8rem;
            button {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;
