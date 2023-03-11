import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: none;
  transition: all 0.4s cubic-bezier(0.47, 0, 0.37, 1.47);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0.5rem;
    // width: auto;
    width: 65px;
    height: 100%;
    justify-content: space-between;
    background: #293241;
    border-radius: 0rem 0.8rem 0.8rem 0;

    .top__side {
      .home__logo {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0.4rem 0.4rem;
        border-radius: 0.5rem;
        margin: 0 auto 2rem 0;

        i {
          color: #5773db;
          font-size: 1.7rem;
        }
        h2 {
          display: none;
          color: white;
          width: auto;
          font-size: 1.1rem;
          text-align: center;

          mark {
            background: #5c31d4;
            background: linear-gradient(to right, #5c31d4 0%, #d43192 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      h4 {
        display: none;
        width: 100%;
        color: white;
      }

      .sidebar__links {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;

        .li {
          position: relative;
          display: flex;
          width: 100%;
          align-items: center;
          padding: 0.4rem 0.4rem;
          border-radius: 0.5rem;
          transition: all 0.4s ease-in-out;

          i {
            color: #5773db;
            font-size: 1.7rem;
            transition: all 0.5s ease-in-out;
          }

          .title {
            display: none;
            color: white;
            font-size: 0.8rem;
            font-weight: 600;
          }

          :hover {
            cursor: pointer;
            background: #fafafa;
            i {
              color: #293241;
            }
            .title {
              color: #293241;
            }
          }
        }
      }
    }

    .other__container {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      height: auto;

      .other__link {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0.4rem 0.6rem;
        border-radius: 0.5rem;
        gap: 0.5rem;
        transition: all 0.4s ease-in-out;

        i {
          color: #5773db;
          font-size: 1.7rem;
          transition: all 0.4s ease-in-out;
        }

        .title {
          display: none;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
        }

        :hover {
          cursor: pointer;
          background: #f4f4f4;
          i {
            color: #293241;
          }
          .title {
            color: #293241;
          }
        }
      }
    }

    :hover {
      width: 180px;
      // padding: 2rem 1rem;
      .top__side {
        .home__logo {
          i {
            margin-right: 0.4rem;
            color: #74a4fd;
          }

          h2 {
            display: inline-block;
          }
        }

        .sidebar__links {
          .li {
            i {
              margin-right: 0.4rem;
            }
            .title {
              display: block;
            }
          }
        }
      }
      .other__link {
        i {
          margin-right: 0.4rem;
        }

        .title {
          display: inline;
        }
      }
    }
  }
`;
