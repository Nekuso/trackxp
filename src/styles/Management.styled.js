import styled from "styled-components";

export const StyledManagement = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  min-height: 100vh;
  z-index: 1;

  .management__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    width: 100%;
  }

  .management__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 1rem;

    .add__container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: white;
      border-radius: 0.5rem;
      gap: 0.5rem;
      height: auto;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.8rem;
        color: #757575;
      }

      .add__user__btn {
        align-self: flex-end;
        width: auto;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background: black;
        color: white;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover {
          background: #212121;
        }
      }
    }

    .user__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      min-height: 200px;
      background: white;
      overflow: hidden;
      border-radius: 0.5rem;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

      .user__list__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 0.5rem;
        padding: 0.6rem 0.7rem;
        border: 1px solid #e0e0e0;

        .user__content {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5%;

          .img__container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20%;
            .user__img {
              width: 2rem;
              height: 2rem;
              img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }

          .user__info {
            display: flex;
            flex-direction: column;
            width: auto;

            h2 {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 0.8rem;
              font-weight: 600;
            }

            p {
              color: #757575;
              font-size: 0.6rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }

        .user__actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.5rem;

          select {
            padding: 0.3rem;
            border-radius: 0.3rem;
            font-size: 0.7rem;
            cursor: pointer;
            font-weight: 600;
          }

          i {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            color: black;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    -webkit-justify-content: flex-start;
    padding: 2rem 0;
    height: auto;

    .management__header {
      h1 {
        margin: 0.5rem 0;
      }
    }

    .management__content {
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;

      .add__container {
        width: 55%;
        height: auto;

        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 0.6rem;
        }

        .add__user__btn {
          width: auto;
          padding: 0.5rem 0.8rem;
          font-size: 0.7rem;
        }
      }

      .user__list {
        .user__list__item {
          padding: 0.7rem 0.8rem;

          .user__content {
            .img__container {
              width: 40%;
              .user__img {
                width: 3rem;
                height: 3rem;
              }
            }
          }

          .user__actions {
            gap: 0.6rem;

            i {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 90%;

    .management__header {
      margin: 0.5rem 0;
    }

    .management__content {
      .add__container {
        width: 55%;
        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 0.9rem;
        }

        .add__user__btn {
          width: auto;
          font-size: 0.8rem;
        }
      }

      .user__list {
        .user__list__item {
          padding: 0.8rem 1rem;

          .user__content {
            gap: 3%;
            .user__img {
              width: 13%;
            }

            .user__info {
              h2 {
                font-size: 1rem;
              }
              p {
                font-size: 0.7rem;
              }
            }
          }

          .user__actions {
            gap: 1rem;

            select {
              padding: 0.5rem;
              font-size: 0.8rem;
            }

            i {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
`;
