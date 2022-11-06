import styled from "styled-components";

export const StyledSinglePage = styled.div`
  width: 90%;
  height: 98%;

  .single__page__section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    row-gap: 1%;

    .order__cycle__container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      border-radius: 0.7rem;
      padding: 1rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      
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
          transition: all 0.2s ease-in-out;
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
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 0.7rem;

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

  @media screen and (min-width: 768px) {
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;

    .single__page__section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5rem;
      width: 100%;
      height: auto;

      .order__cycle__container {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        gap: 0.5rem;
        width: 100%;
        // border-radius: 10rem;
        padding: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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
