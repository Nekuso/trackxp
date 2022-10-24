import styled from "styled-components";

export const StyledWidget = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: .6rem 1.8rem;
  width: 100%;
  height: 30%;
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
      color: #000000;
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
        font-size: 1.3rem;
      }
    }
  }

  .middle {
    h1 {
      color: #000000;
      font-size: 2.5rem;
      font-weight: 900;
    }
  }

  .bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .widget__link {
      font-size: 1.1rem;
      cursor: pointer;
      text-decoration: underline;
      color: #000000;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: blue;
      border-radius: 25%;

      i {
        font-size: 2.5rem;
        color: #ffffff;
      }
    }
  }
`;
