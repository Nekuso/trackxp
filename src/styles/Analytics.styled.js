import styled from "styled-components";

export const StyledAnalytics = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 93%;
  min-height: 100vh;
  // background: yellow;
  gap: 1rem;
  margin: 1rem auto;

  .analytics__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;

    h1 {
      font-size: 1.5rem;
    }
    .right__actions {
      .date__buttons {
        display: flex;
        border-radius: 0.7rem;
        overflow: hidden;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        button {
          padding: 0.6rem;
          background: #f1f1f1;
          border: none;
          font-size: 0.6rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          :nth-child(2) {
            border-left: 1px solid gray;
          }
        }
        .active {
          background: black;
          color: white;
        }
      }
    }
  }

  .analytics__content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
    // background: red;

    .analytic__widgets {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1rem;

      .widget {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 1rem;
        gap: 1rem;
        width: 100%;
        height: auto;

        .widget__title {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          h3 {
            color: #1b263b;
          }
          i {
            font-size: 1.5rem;
            padding: 0.4rem;
            background: black;
            color: white;
            border-radius: 25%;
          }
        }
        .widget__value {
          width: 100%;
          text-align: center;
        }
      }
    }

    .analytic__charts {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      gap: 1rem;

      .small__charts {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: auto;
        .analytic__reviews {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1rem;
          border: none;
          border-radius: 0.6rem;
          border: 1px solid #e0e0e0;
          transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
          cursor: pointer;
          background: #ffffff69;
          backdrop-filter: blur(10px);

          :hover {
            box-shadow: black 10px 10px 0px;
            transform: translate(-5px, -5px);
            border: 1px solid black;
          }

          h3 {
            font-size: 1rem;
            color: #1b263b;
          }
          .reviews__total {
            display: flex;
            width: 85%;
            justify-content: space-between;
            align-items: center;
            background: #f1f1f1;
            padding: 0.5rem 1rem;
            border-radius: 2rem;

            .rating {
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .analytics__content {
      .analytic__widgets {
        .widget {
          border: none;
          border-radius: 0.6rem;
          border: 1px solid #e0e0e0;
          transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
          cursor: pointer;
          background: #ffffff69;
          backdrop-filter: blur(10px);

          :hover {
            box-shadow: black 10px 10px 0px;
            transform: translate(-5px, -5px);
            border: 1px solid black;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin: 2rem auto;

    .analytics__content {
      .analytic__widgets {
        flex-direction: row;
        border: none;
        border-radius: 0.6rem;
        border: 1px solid #e0e0e0;
        transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
        cursor: pointer;
        background: #ffffff69;
        backdrop-filter: blur(10px);

        :hover {
          box-shadow: black 10px 10px 0px;
          transform: translate(-5px, -5px);
          border: 1px solid black;
        }

        .widget {
          padding: 1.5rem 0.8rem;
          gap: 0.5rem;

          .widget__title {
            font-size: 0.6rem;
            font-weight: 700;
            gap: 0.3rem;

            i {
              font-size: 0.8rem;
            }
          }

          .widget__value {
            font-size: 0.7rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .analytics__header {
      .right__actions {
        .date__buttons {
          display: flex;
          border-radius: 0.7rem;
          overflow: hidden;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

          button {
            background: #f1f1f1;
            border: none;
            padding: 0.8rem;
            font-size: 0.7rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            :nth-child(2) {
              border-left: 1px solid gray;
            }
          }
        }
      }
    }

    .analytics__content {
      .analytic__widgets {
        flex-direction: row;
        border: none;
        border-radius: 0.6rem;
        border: 1px solid #e0e0e0;
        transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
        cursor: pointer;
        background: #ffffff69;
        backdrop-filter: blur(10px);

        :hover {
          box-shadow: black 10px 10px 0px;
          transform: translate(-5px, -5px);
          border: 1px solid black;
        }

        .widget {
          padding: 1.5rem 0.8rem;
          gap: 0.5rem;

          .widget__title {
            font-size: 0.8rem;
            font-weight: 700;
            gap: 0.3rem;

            i {
              font-size: 0.8rem;
            }
          }

          .widget__value {
            font-size: 1rem;
          }
        }
      }

      .analytic__charts {
        .small__charts {
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
          .analytic__reviews {
            width: 45%;
            padding: 1rem;
            border: none;
            border-radius: 0.6rem;
            border: 1px solid #e0e0e0;
            transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
            cursor: pointer;
            background: #ffffff69;
            backdrop-filter: blur(10px);

            :hover {
              box-shadow: black 10px 10px 0px;
              transform: translate(-5px, -5px);
              border: 1px solid black;
            }

            h3 {
              font-size: 0.8rem;
            }
            .reviews__total {
              width: 100%;
              padding: 0.5rem 1rem;
              border-radius: 2rem;
              background: #f1f1f1;
              .rating {
                font-size: 1.8rem;
              }
              .sum {
                font-size: 0.9rem;
              }
            }
            p {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;
