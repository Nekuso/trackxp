import styled from "styled-components";
import ViewBackground from "../img/ViewBackground.jpg";

export const StyledView = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  background: #f5f5f5;
  z-index: 1;
  :after {
    content: "";
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0; 
    z-index: -1;
    background-image: url(${ViewBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // filter: contrast(0.8) blur(5px);
  }

  .loading__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .loading__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 70%;
      height: 100%;

      img {
        width: 20rem;
      }

      h2 {
        color: #ffffff;
        text-align: center;
        font-size: 1.3rem;
      }
    }
  }

  .not__found__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .not__found__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 70%;
      height: 100%;

      img {
        width: 25rem;
      }

      h2 {
        color: #ffffff;
        font-size: 1.7rem;
      }
      .home__link 
      {
        color: #5773db;
        font-size: 1.3rem;
      }
    }
  }

  .single__page__section {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 90%;
    height: 90%;
    row-gap: 1rem;

    .update__controls {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .home__link {
        display: flex;
        align-items: center;
    
        i {
          color: #5773db;
          font-size: 1.8rem;
          margin-right: 0.5rem;
        }
        h2 {
          color: #293241;
          width: auto;
          font-size: 1.8rem;
          text-align: center;
    
          mark {
            background: none;
            color: #5773db;
          }
        }
      }

      .buttons {
        display: flex;
        gap: 0.5rem;

        .button {
          position: relative;
          z-index: 1;
          cursor: pointer;
          width: 2.4rem;
          height: 2.4rem;
          padding: 0.7rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem;
          background: black;
          white-space: nowrap;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.47, 0, 0.37, 1.47);

          :before {
            content: "";
            position: absolute;
            border: none;
            top: 0;
            left: 0;
            height: 100%;
            width: 0;
            border-radius: 15px;
            background-color: #fafafa;
            z-index: -1;
            -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
            box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
            transition: all 0.5s cubic-bezier(0.47, 0, 0.37, 1.47);
          }

          i {
            color: white;
            font-size: 1rem;
            font-weight: 500;
          }

          p {
            display: none;
            font-size: 0.6rem;
            color: white;
          }

          :hover {
            width: 120px;
            justify-content: flex-start;
            border: 1px solid black;
            :before {
              width: 100%;
            }

            i {
              margin-right: 0.5rem;
              color: black;
            }

            p {
              color: black;
              display: inline;
            }
          }
        }
      }
    }

    .order__cycle__container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      border-radius: 0.7rem;
      padding: 1rem;
      border: 1px solid #e0e0e0;
      transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
      flex-direction: column-reverse;
      cursor: pointer;
      background: #ffffff69;
      backdrop-filter: blur(10px);

      :hover {
        border: 1px solid black;
        box-shadow: black 10px 10px 0px;
        transform: translate(-5px, -5px);
      }

      .order__cycle__item {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0.7rem;
        border-radius: 0.7rem;
        // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        i {
          background: #5773db;
          padding: 0.5rem;
          font-size: 1.5rem;
          margin-right: 1rem;
          border-radius: 50%;
          color: white;
          box-shadow: 0 0 6px #5773db;
          transition: all 0.2s cubic-bezier(0.47, 0, 0.37, 1.47);
        }

        .order__cycle__title {
          cursor: pointer;
          .cycle__title {
            width: auto;
            color: #5773db;
            font-weight: 700;
            font-size: 1rem;
          }
          .cycle__stamp {
            font-size: 0.8rem;
          }
        }

        :hover {
          i {
            transform: translateY(-16px) scale(1.2);
            box-shadow: 0 0 6px #5773db;
          }
        }
        :nth-last-child(1) {
          i {
            animation: pulse 2s infinite;
            transform: translateY(-16px) scale(1.3);
            box-shadow: 0 0 6px #5773db;
            box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
          }
        }
      }
    }

    .order__info__container {
      width: 100%;
      .order__info {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          padding: 1.3rem;
          border-radius: 0.7rem;
          border: 1px solid #e0e0e0;
          transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
          cursor: pointer;
          background: #ffffff69;
          backdrop-filter: blur(10px);

          :hover {
            border: 1px solid black;
            box-shadow: black 10px 10px 0px;
            transform: translate(-5px, -5px);
          }

          img {
            width: 90%;
            border-radius: 0.7rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }

        .order__title {
          padding: 1rem 0;
          width: 100%;
          text-align: center;

          h2 {
            font-size: 5vw;
          }

          p {
            font-size: 4vw;
            color: black;
          }
        }

        .order__desc {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding-top: 1rem;

          .left,
          .right {
            display: flex;
            flex-direction: column;
            row-gap: 0.7rem;
            .item__desc {
              p {
                font-weight: 400;
                font-size: 4vw;
              }
              .item__title {
                font-weight: 700;
                font-size: 4vw;
              }
            }
          }
        }
      }
    }

    .order__table__container {
      display: flex;
      width: 100%;
      height: auto;
      border-radius: 0.7rem;
      border: 1px solid #e0e0e0;
      transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
      cursor: pointer;
      background: #ffffff69;
      backdrop-filter: blur(10px);

      :hover {
        border: 1px solid black;
        box-shadow: black 10px 10px 0px;
        transform: translate(-5px, -5px);
      }

      .order__table {
        width: 100%;
        padding: 1rem;

        tr {
          th {
            font-size: 1rem;
            padding-right: 0.4rem;
            padding-bottom: 0.8rem;
          }
          td {
            text-align: center;
            padding: 0.3rem 0;
            font-size: 0.8rem;
          }
          .particular__align {
            text-align: left;
          }

          .grand__total {
            border-top: 1px solid black;
            font-weight: 700;
            font-size: 1.2rem;
            padding: 0.8rem 0 0 0;
          }
        }
      }
    }
  }

  @keyframes pulse {
    0% {
      transform: translateY(-16px) scale(1.3);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
    }

    70% {
      transform: translateY(-16px) scale(1.4);
      box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
    }

    100% {
      transform: translateY(-16px) scale(1.3);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
    }
  }

  @media screen and (min-width: 768px) {
    height: 100vh;
    padding: 0;
    overflow-y: scroll;
    align-items: flex-start;
    .single__page__section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5rem;
      height: auto;
      padding: 1.5rem 0;

      .update__controls {
        .title {
          font-size: 1.5rem;
        }

        .buttons {
          .button {
            width: 2.5rem;
            height: 2.5rem;

            i {
              font-size: 1.3rem;
            }

            p {
              font-size: 0.8rem;
            }

            :hover {
              width: 150px;
            }
          }
        }
      }

      .order__cycle__container {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        width: 100%;
        flex-direction: row;
        // border-radius: 10rem;
        padding: 0.5rem;

        .order__cycle__item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem;
          border-radius: 0.7rem;

          i {
            text-align: center;
            padding: 0.5rem;
            font-size: 1.5rem;
            margin-right: 0;
            border-radius: 50%;
            color: white;
            box-shadow: #5773db 0px 3px 8px;
          }

          .order__cycle__title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .cycle__title {
              font-size: 0.7rem;
            }
            .cycle__stamp {
              font-size: 0.5rem;
            }
          }
        }
      }

      .order__info__container {
        flex: 1 0 15%;

        .order__info {
          width: 100%;
          height: auto;
          padding: 1rem;

          img {
            width: 160px;
          }

          .order__title {
            padding-top: 0.5rem;
            h2 {
              font-size: 0.7rem;
            }
            p {
              font-size: 0.6rem;
            }
          }

          .order__desc {
            padding: 0;

            .left,
            .right {
              row-gap: 0.4rem;
              .item__desc {
                text-overflow: ellipsis;
                p {
                  font-size: 0.7rem;
                }
                .item__title {
                  font-size: 0.6rem;
                }
              }
            }
          }
        }
      }

      .order__table__container {
        flex: 1 0 60%;
        height: auto;
        border-radius: 0.7rem;

        .order__table {
          padding: 1rem;

          tr {
            th {
              font-size: 0.9rem;
              padding-right: 0;
              padding-bottom: 0.3rem;
            }
            td {
              text-align: center;
              padding: 0.05rem 0;
              font-size: 0.7rem;
            }
            .particular__align {
              text-align: left;
            }

            .grand__total {
              font-size: 1rem;
              padding: 0.2rem 0 0 0;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
    .single__page__section {
      gap: 1rem;

      .order__cycle__container {
        width: 100%;
        padding: 0.5rem;

        .order__cycle__item {
          border-radius: 0.7rem;

          i {
            text-align: center;
            font-size: 1.5rem;
            margin-right: 0;
            border-radius: 50%;
            color: white;
          }

          .order__cycle__title {
            .cycle__title {
            }
            .cycle__stamp {
              font-size: 0.7rem;
            }
          }
        }
      }

      .order__info__container {
        flex: 1 0 2%;
        height: auto;
        
        .order__info {
            width: 100%;
            height: auto;
            padding: 1.5rem;

          img {
            width: 180px;
          }

          .order__title {
            padding-top: 0.5rem;
            h2 {
              font-size: 0.7rem;
            }
            p {
              font-size: 0.6rem;
            }
          }

          .order__desc {
            padding: 0;
            .left,
            .right {
              row-gap: 0.2rem;
              .item__desc {
                text-overflow: ellipsis;
                p {
                  font-size: 0.7rem;
                }
                .item__title {
                  font-size: 0.7rem;
                }
              }
            }
          }
        }
      }

      .order__table__container {
        flex: 1 0 60%;
        height: auto;

        .order__table {
          padding: 1.5rem;

          tr {
            th {
              font-size: 1rem;
              padding-bottom: 0.3rem;
            }
            td {
              text-align: center;
              padding: 0.1rem 0;
              font-size: 0.8rem;
            }
            .particular__align {
              text-align: left;
            }

            .grand__total {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
`;
