import styled from "styled-components";

export const StyledSidebar = styled.div`

    .sidebar__links {
        margin-top: 10%;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .home__logo {
            h2 {
                color: #000000;
                width: auto;
                margin: 0 auto 1rem 0;
                font-size: 1.5rem;
                text-align: center;
                padding: 0 1rem;

                mark {
                    background: none;
                    color: #5773db;
                }
            }
        }

        h4 {
            color: #000000;
            width: 80%;
            margin: 0 auto;
            font-size: 1rem;
            padding: 0 1rem;
        }
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            .link {
                display: flex;
                align-items: center;
                width: 80%;
                margin: .3rem 0;
                font-size: .8rem;
                font-weight: 600;
                padding: .5rem 1rem;
                border-radius: 10px;
                color: #000000;
                transition: .4s ease-in-out;
                
                i {
                    color: #5773db;
                    margin-right: .5rem;
                    font-size: 1.5rem;
                    transition: .4s ease-in-out;
                }
                
                :hover {
                    background: black;
                    color: white;
                }
            }
        }
    }

    .other__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40%;

        .other__link {
            display: flex;
            align-items: center;
            width: 80%;
            margin: .3rem 0;
            font-size: .8rem;
            font-weight: 600;
            padding: .8rem 1rem;
            border-radius: 10px;
            color: #000000;
            transition: .4s ease-in-out;

            i {
                color: #5773db;
                margin-right: .5rem;
                font-size: 1.5rem;
                transition: .4s ease-in-out;
                
            }
            :hover {
                background: black;
                color: white;
            }
        }
    }


`;