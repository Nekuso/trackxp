import styled from "styled-components";
import Widget1 from "../img/Widget1.png";
import Widget2 from "../img/Widget2.png";
import Widget3 from "../img/Widget3.png";

export const StyledWidget = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.2rem 1.8rem;
  width: 100%;
  height: auto;
  // background: #f5f6f8;
  border: none;
  border-radius: .6rem;
  // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
    width: 100%;
    justify-content: space-between;

    .top__title {
      font-size: 1.3rem;
      color: #00000091;
      font-weight: 700;
      .tooltip{
        margin-left: .3rem;
      }
    }

    .percentage {
      display: flex;
      align-items: center;
      border-radius: 2rem;
      padding: .2rem .8rem;
      
      i {
        color: #40bd47;
        font-size: 0.7rem;
        font-weight: 700;
        margin-right: 0.3rem;
      }
      p {
        font-weight: 700;
        color: #40bd47;
        font-size: 1rem;
      }
    }
    
    .positive {
      background-color: #00ff4818;
      border: 1px solid #40bd47;
      i {
        color: #40bd47;
      }
      p {
        color: #40bd47;
      }
    }

    .negative {
      background-color: #ff000018;
      border: 1px solid #ff0000;
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
      background: transparent;
      font-size: .8rem;
      cursor: pointer;
      color: black;
      padding: .3rem .8rem;
      border-radius: 2rem;
      border: 1px solid #000000;
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

  :nth-child(1) {
    background-image: url(${Widget1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // .top {
    //   .top__title {
    //     color: #ffffff;
    //   }
    // }
    
    // .middle {
    //   h1 {
    //     color: #ffffff;
    //   }
    // }

    // .bottom {
    //   .widget__link {
    //     color: #ffffff;
    //     border: 1px solid #ffffff;
    //   }
    // }
  }
  :nth-child(2) {
    background-image: url(${Widget2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    // .top {
    //   .top__title {
    //     color: #ffffff;
    //   }
    // }
    
    // .middle {
    //   h1 {
    //     color: #ffffff;
    //   }
    // }

    // .bottom {
    //   .widget__link {
    //     color: #ffffff;
    //     border: 1px solid #ffffff;
    //   }
    // }
  }
  :nth-child(3) {
    background-image: url(${Widget3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // .top {
    //   .top__title {
    //     color: #ffffff;
    //   }
    // }
    
    // .middle {
    //   h1 {
    //     color: #ffffff;
    //   }
    // }

    // .bottom {
    //   .widget__link {
    //     color: #ffffff;
    //     border: 1px solid #ffffff;
    //   }
    // }
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
        padding: .1rem .5rem;
        i {
          font-size: 0.3rem;
          font-weight: 700;
        }
        p {
          font-size: .5rem;
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
        padding: .2rem .4rem;
        font-size: .4rem;
      }
  
      .icon {
        padding: 0.3rem;
  
        i {
          font-size: .8rem;
          color: #ffffff;
        }
      }
  }

  @media screen and (min-width: 1024px) {
    padding: 3vh 1.5vw;
    border-radius: 1rem;
    // min-height: 7.5vw;

    .top {
      .top__title {
        font-size: .8vw;
        font-weight: 700;
      }
  
      .percentage {
        i {
          font-size: 0.6vw;
          font-weight: 700;
        }
        p {
          font-size: .8vw;
        }
      }
    }
  
    .middle {
      h1 {
        color: #000000;
        font-size: 2vw;
        font-weight: 700;
      }
    }
  
    .bottom {
      .widget__link {
        font-size: .7vw;
      }
  
      .icon {
        padding: 0.3rem;
  
        i {
          font-size: 1.4rem;
          color: #ffffff;
        }
      }
    }
  }
`;
