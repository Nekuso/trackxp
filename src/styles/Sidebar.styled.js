import styled from "styled-components";

export const StyledSidebar = styled.div`

    .sidebar__links {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 1rem 0;

        .home__logo {
            h2 {
                color: white;
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
            color: white;
            width: 80%;
            margin: 0 auto;
            font-size: .7rem;
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
                margin: .2rem 0;
                font-size: .6rem;
                font-weight: 600;
                padding: .4rem 1rem;
                border-radius: 10px;
                color: white;
                transition: .4s ease-in-out;
                
                i {
                    color: #5773db;
                    margin-right: .5rem;
                    font-size: 1.4rem;
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
            font-size: .7rem;
            font-weight: 600;
            padding: .4rem 1rem;
            border-radius: 10px;
            color: white;
            transition: .4s ease-in-out;
            
            i {
                color: #5773db;
                margin-right: .8rem;
                font-size: 1.4rem;
                transition: .4s ease-in-out;
                
            }
            :hover {
                background: black;
                color: white;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .sidebar__links {
            padding: 2rem 0;
            
            .home__logo {
                h2 {
                    font-size: 1.6rem;
                }
            }
            h4 {
                font-size: .7rem;
            }
            
            li {
                .link {
                    font-size: .7rem;
                    padding: .5rem 1rem;
                    margin: .3rem 0;
                    i {
                        font-size: 1.3rem;
                        margin-right: .4rem;
                    }
                }
            }
        }
        .other__container {
            .other__link {
                font-size: .8rem;
                padding: .7rem 1rem;
                margin: .3rem 0;

                i {
                    font-size: 1.4rem;
                }
            }
        }
    }
`;