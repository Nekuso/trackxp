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
      position: relative;
      cursor: pointer;
      color: #000000;
      font-size: 2rem;
      padding: .2rem;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      
      .round__container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 40px;
        right: 0;
        border-radius: 1rem;
        background: white;
        border: 1px solid #e0e0e0;
        width: auto;
        height: auto;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        
        .update__target {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          text-align: center;
          transition: all 0.3s ease-in-out;
          :hover {
            border: none;
            background: black;
            i, p {
              color: white;
            }
          }
          i, p {
            color: black;
          }
          
          p {
            width: 250px;
            font-size: 1rem;
          }
        }
        
      }

      .closed {
        display: none;
      }

      :hover {
        color: white;
        background: #000000;
      }
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
      justify-content: space-evenly;
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
          border-radius: 2rem;
          padding: .2rem 1rem;
          i {
            font-size: 0.8rem;
            margin-right: 0.5rem;
            font-weight: 700;
          }
          .result__amount {
            font-size: 1.2rem;
            font-weight: 700;
          }
        }

        .positive {
          background: #00ff4818;
          border: 1px solid #40bd47;
          i {
            color: #40bd47;
          }
          .result__amount {
            color: #40bd47;
          }
        }

        .negative {
          background: #ff000018;
          border: 1px solid #ff0000;
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

        .round__container {
          top: 25px;
          border-radius: 0.5rem;

          .update__target {
            padding: 0.3rem;
            i {
              font-size: 0.8rem;
            }
            p {
              font-size: 0.5rem;
              width: 100px;
            }
          }
        }
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
        justify-content: space-evenly;
        gap: 0.5rem;

        .item {
          .item__title {
            color: #00000091;
            text-align: center;
            font-size: 0.6rem;
          }
          .item__result {
            padding: 0.1rem 0.5rem;
            i {
              font-size: 0.4rem;
              margin-right: 0.2rem;
            }

            .result__amount {
              font-size: 0.6rem;
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
    // min-height: 7.5vw;
    border-radius: .5rem;
    padding: 1rem;

    .top {
      .title {
        font-size: .9vw;
        color: #00000091;
        font-weight: 700;
      }

      i {
        color: #000000;
        font-size: 1.6vw;
        .round__container {
          top: 25px;
          border-radius: 0.5rem;

          .update__target {
            padding: 0.5rem;
            i {
              font-size: 1.2vw;
            }
            p {
              font-size: .8vw;
              width: 140px;
            }
          }
        }
      }
    }

    .bottom {
      display: flex;
      gap: .1rem;
      padding: 0 0 1rem 0;

      .featured__chart {
        width: 50%;
      }

      .title {
        font-weight: 700;
        font-size: 1vw;
        color: #00000091;
      }

      .amount {
        font-weight: 900;
        font-size: 1.6vw;
      }

      .desc {
        font-size: .9vw;
      }

      .summary {
        padding: .5rem 0 0 0;
        gap: 1rem;
        align-items: center;

        .item {
          .item__title {
            color: #00000091;
            text-align: center;
            font-size: 1.2vw;
          }
          .item__result {
            padding: .2rem .8rem;
            i {
              font-size: .8vw;
              margin-right: 0.2rem;
            }

            .result__amount {
              font-size: 1vw;
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

//   @media screen and (min-width: 1024px) and (min-height: 600px) {

//   .bottom {
//     .title {
//       font-weight: 700;
//       font-size: .8rem;
//       color: #00000091;
//     }

//     .amount {
//       font-weight: 900;
//       font-size: 1.4rem;
//     }

//     .desc {
//       font-size: .8rem;
//     }
//   }
// }

//   @media screen and (min-width: 1280px) and (min-height: 800px) {
//     height: auto;
//     .bottom {
//       .title {
//         font-weight: 700;
//         font-size: 1rem;
//         color: #00000091;
//       }
  
//       .amount {
//         font-weight: 900;
//         font-size: 2rem;
//       }
  
//       .desc {
//         font-size: 1rem;
//       }
//     }
//   }
`;
