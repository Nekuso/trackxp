import styled from "styled-components";

export const StyledFeatured = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border-radius: 1rem;
  // background: #f5f6f8;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: white;
  
  :hover {
    box-shadow: black 10px 10px 0px;
    transform: translate(-5px, -5px);
    border: 1px solid black;
  }

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
      width: 45%;
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
      justify-content: space-around;
      gap: 1rem;
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
            margin-right: 0.5rem;
            font-weight: 700;
          }
          .result__amount {
            font-size: 1.6rem;
            font-weight: 700;
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
      gap: 0.4rem;
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
              font-size: 0.3rem;
              margin-right: 0.2rem;
            }

            .result__amount {
              font-size: 0.8rem;
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

  @media screen and (min-width: 1024px) {
    width: 26%;
    height: 100%;
    border-radius: .5rem;
    padding: 1rem;

    .top {
      .title {
        font-size: 1rem;
        color: #00000091;
        font-weight: 700;
      }

      i {
        color: #000000;
        font-size: 1.3rem;
      }
    }

    .bottom {
      display: flex;
      gap: .2rem;
      padding: 0 0 1rem 0;

      .featured__chart {
        width: 50%;
      }

      .title {
        font-weight: 700;
        font-size: 1rem;
        color: #00000091;
      }

      .amount {
        font-weight: 900;
        font-size: 1.6rem;
      }

      .desc {
        font-size: 1rem;
      }

      .summary {
        padding: .5rem 0 0 0;
        gap: 1rem;
        align-items: center;

        .item {
          .item__title {
            color: #00000091;
            text-align: center;
            font-size: .8rem;
          }
          .item__result {
            i {
              font-size: 0.5rem;
              margin-right: 0.2rem;
            }

            .result__amount {
              font-size: .9rem;
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

  @media screen and (min-width: 1024px) and (min-height: 600px) {

  .bottom {
    .title {
      font-weight: 700;
      font-size: .8rem;
      color: #00000091;
    }

    .amount {
      font-weight: 900;
      font-size: 1.4rem;
    }

    .desc {
      font-size: .8rem;
    }
  }

  @media screen and (min-width: 1280px) and (min-height: 800px) {
    height: auto;
    .bottom {
      .title {
        font-weight: 700;
        font-size: 1rem;
        color: #00000091;
      }
  
      .amount {
        font-weight: 900;
        font-size: 2rem;
      }
  
      .desc {
        font-size: 1rem;
      }

      .summary {
        padding: .5rem 0 0 0;
        gap: 1rem;
        align-items: center;

        .item {
          .item__title {
            color: #00000091;
            text-align: center;
            font-size: 1.2rem;
          }
          .item__result {
            i {
              font-size: 0.8rem;
              margin-right: 0.2rem;
            }

            .result__amount {
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
`;
