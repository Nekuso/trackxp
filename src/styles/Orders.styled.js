import styled from "styled-components";

export const StyledOrders = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  height: 100%;
  h1 {
    color: black;
    font-size: 1rem;
  }

  .orders__header {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem .5rem .5rem;

    .text__header {
      width: 60%;
      .title {
        font-size: 1.3rem;
      }
      .date {
        font-size: .5rem;
      }
    }

    .new__button {
      position: relative;
      z-index: 1;
      cursor: pointer;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 0.6rem 1.1rem;
      border: none;
      border-radius: 2rem;
      color: white;
      background: black;
      transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
      overflow: hidden;

      :before {
        content: "";
        position: absolute;
        border: none;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #fafafa;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
      }
      :hover {
        border: 1px solid black;
        :before {
          width: 100%;
        }
        color: black;
        transform: scale(1.05);
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    .orders__header {
      padding: 1rem .5rem .5rem .5rem;
  
      .text__header {
        .title {
          font-size: 1.5rem;
        }
      }
  
      .new__button {
        font-size: .6rem;
        font-weight: 700;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .orders__header {
      padding: .8rem .5rem;
  
      .text__header {
        .title {
          font-size: 1.3rem;
        }
        .date {
          font-size: .7rem;
        }
      }
  
      .new__button {
        padding: .6rem 1.5rem;
        font-size: .8rem;
        font-weight: 700;
      }
    }
  }
`;
