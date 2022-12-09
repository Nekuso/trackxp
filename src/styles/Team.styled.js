import styled from "styled-components";

export const StyledTeam = styled.div`
    width: 100%;
    min-height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    oveflow-x: hidden;

    .team__content {
        width: 90vw;
        height: auto;
        margin: 1rem 0;
        // background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        text-align: center;

        .team__title {
            h1 {
                font-weight: 900;
                padding: 0.4rem 0;
                font-size: 8vw;
                line-height: 1;
                background: linear-gradient(to right, #5C31D4 0%, #D43192 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            h3 {
                line-height: 1.2;
                font-weight: 500;
                font-size: 4vw;
            }
        }

        .team__members {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            gap: 2rem;
            .team__member {
                flex: 0 0 40%;
                display: flex;
                flex-direction: column;
                align-items: space-between;
                justify-content: flex-start;
                gap: 1rem;
                .team__member__img {
                    position: relative;
                    width: 100%;
                    background: linear-gradient(to right, #5C31D4 0%, #D43192 100%);
                    overflow: hidden;
                    border-radius: 2rem;
                    border-radius: 100%;
                    position: relative;
                    filter: grayscale(100%);
                    -webkit-filter: grayscale(100%);
                    transition: all 0.4s ease-in-out;
                    
                    img {
                        width: 100%;
                        transform: translateY(15%);
                        transition: all 0.4s ease-in-out;
                    }
                    :hover {
                        filter: grayscale(0%);
                        -webkit-filter: grayscale(0%);
                        img {
                            transform: scale(1.1) translateY(10%);
                        }
                    }
                }

                .team__member__description {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    overflow-wrap: break-word;
                    text-overflow: ellipsis;
                    text-align: center;
                    h3 {
                        font-weight: 400;
                        font-size: 1.5rem;
                        line-height: .8;
                    }
                    h1 {
                        font-weight: 700;
                        font-size: 1rem;
                        background: linear-gradient(to right, #5C31D4 0%, #D43192 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .team__member__links {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: .7rem;
                        i {
                            font-size: 2rem;
                        }
                    }
                }
            }
        }

    }

    @media screen and (min-width: 768px) {

        .team__content {
            width: 80vw;

            .team__title {
                h1 {
                    font-size: 4vw;
                }
                h3 {
                    font-size: 1.8vw;
                }
            }

            .team__members {
                width: 80%;
                gap: auto;
                .team__member {
                    flex: 0 25%;

                    .team__member__description {
                        h3 {
                            font-size: 1.2rem;
                        }
                        h1 {
                            font-size: .8rem;
                        }

                        .team__member__links {
                            i {
                                font-size: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px) {
        min-height: 100vh;
        .team__content {
            width: 80vw;

            .team__title {
                width: 50%;
                h1 {
                    font-size: 3vw;
                }
                h3 {
                    text-align: center;
                    font-size: 1.1vw;
                }
            }

            .team__members {
                width: 60%;
                justify-content: center;
                column-gap: 15%;
                .team__member {
                    flex: 0 23%;
                    .team__member__description {
                        h3 {
                            font-size: 1.1rem;
                        }
                        h1 {
                            font-size: .7rem;
                        }

                        .team__member__links {
                            i {
                                font-size: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }

`;
