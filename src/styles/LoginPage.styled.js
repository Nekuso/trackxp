import styled from "styled-components";

export const StyledLoginPage = styled.div`
  .login__section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    background: rgb(0, 8, 77);
    background: #ffffff;
    overflow: hidden;

    .login__container {
      display: grid;
      grid-template-columns: 45% 45%;
      grid-template-rows: 40% 60%;
      grid-template-areas:
        "image image"
        "form form";
      justify-content: space-between;
      align-items: center;
      width: 80vw;
      height: 85vh;

      .login__img__container {
        grid-area: image;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }
      }

      .login__form__container {
        grid-area: form;
        width: 100%;
        height: 100%;

        .login__form__content {
          h2 {
            text-align: center;
            font-size: 9vw;
            color: black;
          }

          p {
            font-size: 3.5vw;
            text-align: center;
            color: black;
          }

          .login__form {
            h4 {
              color: black;
              margin: 1rem 0 0;
              font-size: 5.5vw;
            }
            input {
              width: 100%;
              border: none;
              border-radius: 0.5rem;
              padding: 0.8rem 1.4rem;
              color: #000000;
              border: 1px solid #6363635d;
            }

            .show__container {
              gap: 0.5rem;
              padding: 0.5rem 0;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              i {
                font-size: 2rem;
                cursor: pointer;
              }
              span {
                font-size: 1rem;
              }
            }
            .loginButton {
              background: #4b65c2;
              width: 100%;
              padding: 1rem 2rem;
              color: white;
              border: none;
              border-radius: 1.8rem;
              font-size: 5vw;
              font-weight: 700;
              margin: 1rem 0;
              transition: all 0.3s ease-in-out;

              &:hover {
                cursor: pointer;
                background: #5c79e2;
              }
            }
          }
          span {
            p {
              text-align: center;
              color: red;
            }
          }

          h3 {
            text-align: center;
            font-size: 4.5vw;
            color: black;

            a {
              color: #4b65c2;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .login__section {
      .login__container {
        height: 60vh;
        grid-template-rows: 60% 40%;
        grid-template-areas:
          "image form"
          "image form";

        .login_ _img__container {
        }

        .login__form__container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .login__form__content {
            width: 100%;
            h2 {
              font-size: 2.6vw;
            }

            p {
              font-size: 1.4vw;
            }

            .login__form {
              h4 {
                margin: 1rem 0 0;
                font-size: 1.4vw;
              }

              input {
                font-size: 1.3vw;
                padding: 0.6rem 0.8rem;
              }

              .show__container {
                i {
                  font-size: 1.5rem;
                }
                span {
                  font-size: 0.7rem;
                }
              }
              .loginButton {
                margin: 0.6rem 0;
                font-size: 1.6vw;
                padding: 0.6rem 0;
              }
            }

            h3 {
              font-size: 1.2vw;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .login__section {
      .login__container {
        width: 70vw;
        grid-template-columns: 50% 40%;
        .login__form__container {
          .login__form__content {
            h2 {
              font-size: 2.8vw;
            }

            p {
              margin: 0 auto;
              width: 75%;
              font-size: 1vw;
            }

            .login__form {
              h4 {
                font-size: 1.3vw;
              }

              input {
                font-size: 1vw;
                padding: 0.6rem 0.8rem;
              }
              .loginButton {
                margin: 1rem 0 1rem 0;
                font-size: 1.3vw;
                padding: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
`;
