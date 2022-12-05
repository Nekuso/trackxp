import styled from "styled-components";

export const StyledGuide = styled.div`
  width: 100%;
  min-height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  oveflow-x: hidden;

  .guide__content {
    width: 90vw;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;

    .title {
      text-align: center;
      font-size: 8vw;
      font-weight: 900;
      line-height: 1;
    }

    .guide__steps {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;

      .step {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2.5rem;
        
        :nth-child(odd) {
          flex-direction: row-reverse;

          .step__desc {
            text-align: right;
          }
        } 
        
        .step__img {
          flex: 1;
          img {
            width: 100%;
          }
        }
        
        .step__desc {
          width: 60%;
          text-align: left;

          h3 {
            font-size: 4.5vw;
            line-height: .8;
          }
          
          h1 {
            font-size: 9vw;
            font-weight: 900;
            background: #5C31D4;
            background: linear-gradient(to right, #5C31D4 0%, #D43192 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          p {
            font-size: 3.5vw;
            font-weight: 500;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    min-height: 100vh;

    .guide__content {
      width: 90vw;
      gap: 6rem;

      .title{
        text-align: left;
      }

      .guide__steps {

        .step {
          
          .step__desc {

            h3 {
              font-size: 2.5vw;
            }

            h1 {
              font-size: 5vw;
            }

            p {
              font-size: 2vw;
            }
          }
        }
      }
    }
    
  }

  @media screen and (min-width: 1024px) {

    .guide__content {
      width: 80vw;
      padding: 4rem 0;

      .guide__steps {
        gap: 0rem;
        .step {
          gap: 3rem;
          .step__desc {
            width: 65%;
            h3 {
              font-size: 1.5vw;
            }

            h1 {
              font-size: 3vw;
            }

            p {
              font-size: 1.5vw;
            }
          }
        }
      }
    }
`;
