import styled from "styled-components";

export const StyledWidget = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 1.8rem;
  width: 100%;
  height: auto;
  background: #f5f6f8;
  border: none;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .top__title {
      font-size: 1.3rem;
      color: #00000091;
      font-weight: 700;
    }

    .percentage {
      display: flex;
      align-items: center;

      i {
        color: #40bd47;
        font-size: 0.8rem;
        font-weight: 700;
        margin-right: 0.3rem;
      }
      p {
        font-weight: 700;
        color: #40bd47;
        font-size: 1.4rem;
      }
    }

    .positive {
      i {
        color: #40bd47;
      }
      p {
        color: #40bd47;
      }
    }

    .negative {
      i {
        color: #be4141;
      }
      p {
        color: #be4141;
      }
    }
  }

  .middle {
    h1 {
      color: #000000;
      font-size: 2.rem;
      font-weight: 900;
    }
  }

  .bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .widget__link {
      background: black;
      font-size: .8rem;
      cursor: pointer;
      color: #FFFFFF;
      padding: .3rem .8rem;
      border-radius: 2rem;
      transition: all .3s ease-in-out;

        :hover {
          transform: scale(105%);
        }
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: blue;
      border-radius: 25%;

      i {
        font-size: 2rem;
        color: #ffffff;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 32%;
    padding: .8rem .8rem;
    border-radius: .5rem;

    .top {
      .top__title {
        font-size: .5rem;
        font-weight: 700;
      }
  
      .percentage {
        i {
          font-size: 0.3rem;
          font-weight: 700;
        }
        p {
          font-size: .6rem;
        }
      }
    }
  
    .middle {
      h1 {
        color: #000000;
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  
    .bottom {
      .widget__link {
        font-size: .5rem;
      }
  
      .icon {
        padding: 0.3rem;
  
        i {
          font-size: .5rem;
          color: #ffffff;
        }
      }
  }

  @media screen and (min-width: 1024px) {
    width: 32%;
    padding: 1rem 1.2rem;
    border-radius: .5rem;

    .top {
      .top__title {
        font-size: .8rem;
        font-weight: 700;
      }
  
      .percentage {
        i {
          font-size: 0.8rem;
          font-weight: 700;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  
    .middle {
      h1 {
        color: #000000;
        font-size: 2rem;
        font-weight: 700;
      }
    }
  
    .bottom {
      .widget__link {
        font-size: .8rem;
      }
  
      .icon {
        padding: 0.3rem;
  
        i {
          font-size: 1.8rem;
          color: #ffffff;
        }
      }
  }
`;
