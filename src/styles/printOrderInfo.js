import styled from "styled-components";

export const StyledPrintOrderInfo = styled.div`
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
    background: #ffffff69;
    backdrop-filter: blur(10px);
    cursor: pointer;

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

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 1024px) {
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

  @media print {
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
      background: #ffffff69;
      backdrop-filter: blur(10px);
      cursor: pointer;

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
          font-size: 7.5vw;
        }

        p {
          font-size: 5.5vw;
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
              font-weight: 500;
              font-size: 6vw;
            }
            .item__title {
              font-weight: 700;
              font-size: 7.2vw;
            }
          }
        }
      }
    }
  }
`;
