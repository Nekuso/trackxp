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
      width: 100%;

      .item {
        .item__title {
          color: #00000091;
          text-align: center;
        }
        .item__result {
          display: flex;
          align-items: center;

          i {
            font-size: 0.8rem;
            margin-right: 0.3rem;
          }

          .result__amount {
            font-size: 1rem;

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
    width: 32%;
    height: 100%;
    border-radius: 0.5rem;
  }
`;
