import styled from "styled-components";

export const StyledOrders = styled.div`
  width: 95%;
  height: 95%;
  h1 {
    color: black;
    font-size: 1rem;
  }

  .orders__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem .5rem .5rem;

    .title {
      font-size: 1.5rem;
    }

    .new__button {
      cursor: pointer;
      font-size: .9rem;
      font-weight: 700;
      padding: .5rem 1rem;
      border: none;
      border-radius: 2rem;
      color: white;
      background: #0dcc63;
      transition: all .2s ease-in-out;
      
      &:hover {
        box-shadow: 0 0 6px #5c7;
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    .orders__header {
      padding: 1rem .5rem .5rem .5rem;
  
      .title {
        font-size: 1.5rem;
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
  
      .title {
        font-size: 1.8rem;
      }
  
      .new__button {
        padding: .6rem 1.5rem;
        font-size: .8rem;
        font-weight: 700;
      }
    }
  }
`;
