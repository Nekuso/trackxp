import styled from "styled-components";

export const StyledFeatured = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  border-radius: 1rem;
  background: #f5f6f8;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .title {
      font-size: 1.3rem;
      color: #00000091;
      font-weight: 700;
    }

    i {
      cursor: pointer;
      color: #000000;
      font-size: 2rem;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    gap: 0.5rem;

    .featured__chart {
      width: 60%;
      margin: 0 auto;
    }

    p {
      color: #000000;
      text-align: center;
    }

    .title {
      font-weight: 700;
      font-size: 1.3rem;
      color: #00000091;
    }

    .amount {
      font-weight: 900;
      font-size: 2.5rem;
    }

    .desc {
      font-size: 1.1rem;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      width: 100%;
      flex-wrap: wrap;

      .item {
        .item__title {
          color: #00000091;
          text-align: center;
          font-size: 1.4rem;
        }
        .item__result {
          display: flex;
          align-items: center;
          text-align: center;
          i {
            font-size: 0.8rem;
            margin-right: 0.4rem;
          }
          .result__amount {
            font-size: 1.4rem;
            font-weight: 600;
          }
        }

        .positive {
          i {
            color: #40bd47;
          }
          .result__amount {
            color: #40bd47;
          }
        }

        .negative {
          i {
            color: #be4141;
          }
          .result__amount {
            color: #be4141;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 28%;
    height: 100%;
    border-radius: 0.5rem;
    padding: 0.7rem;

    .top {
      .title {
        font-size: 0.6rem;
        color: #00000091;
        font-weight: 700;
      }

      i {
        color: #000000;
        font-size: 1.1rem;
      }
    }

    .bottom {
      display: flex;
      gap: 0.2rem;
      padding: 0;

      .featured__chart {
        width: 60%;
      }

      .title {
        font-weight: 700;
        font-size: 0.7rem;
        color: #00000091;
      }

      .amount {
        font-weight: 900;
        font-size: 1.3rem;
      }

      .desc {
        font-size: 0.4rem;
      }

      .summary {
        padding: 0;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        .item {
          .item__title {
            color: #00000091;
            text-align: center;
            font-size: 0.6rem;
          }
          .item__result {
            i {
              font-size: 0.4rem;
              margin-right: 0.2rem;
            }

            .result__amount {
              font-size: 0.8rem;
              font-weight: 600;
            }
          }

          .positive {
            i {
              color: #40bd47;
            }
            .result__amount {
              color: #40bd47;
            }
          }

          .negative {
            i {
              color: #be4141;
            }
            .result__amount {
              color: #be4141;
            }
          }
        }
      }
    }
  }
`;
