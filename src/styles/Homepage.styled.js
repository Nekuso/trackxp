import styled from "styled-components"

export const StyledHomepage = styled.div`

    .homepage__section {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #243160;
        width: 100vw;
        height: 100vh;

        .hero__container {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 1fr;
            grid-template-areas: 
                "image image"
                "text text";
            row-gap: 2rem;
            width: 90vw;
            justfy-content: center;
            align-items: center;

            .hero__text {
                grid-area: text;
                
                .hero__badge {
                    display: inline;
                    padding: .2rem 1.3rem;
                    border-radius: 2rem;
                    font-size: 1rem;
                    background: #FFFFFF59;
                }
                
                .hero__title {
                    padding: .4rem 0;
                    font-size: 8vw;
                }

                .hero__description {
                    font-size: 4vw;
                    font-weight: 500;
                    padding: .4rem 0;
                }

                .tracking__input__container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: 3.8rem;
                    margin: 1rem 0;
                    background: #FFFFFF59;
                    border-radius: 1.3rem;
                    overflow: hidden;
                    
                    .tracking__input {
                        width: 85%;
                        height: 100%;
                        padding: 1rem;
                        border: none;
                        background: transparent;
                        
                        ::placeholder {
                            color: #FFFFFF;
                        }
                    }

                    .tracking__input__button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: none;
                        border: none;
                        width: 15%;
                        height: 100%;
                        overflow: hidden;
                        border-radius: 1.3rem;
                        transition: all .2s ease-in-out;
                        
                        :hover {
                            cursor: pointer;
                            background: #FFFFFF59;
                        }

                        i {
                            font-size: 1.8rem;
                        }
                    }
                }
            }

            .hero__img {
                display: flex;
                justify-content: center;
                align-items: center;
                grid-area: image;
                img {
                    width: 30vh;
                }
            }
        }

    }
    

    @media screen and (min-width: 768px) {
        .homepage__section {
            .hero__container {
                grid-template-areas:
                    "text image"
                    "text image"
                ;

                .hero__text {
                    .hero__badge {
                        font-size: 2vw;
                    }

                    .hero__title {
                        font-size: 4vw;
                    }

                    .hero__description {
                        font-size: 2vw;
                    }
                    .hero__input__coontainer {

                    }
                }

                .hero__img {
                    img {
                        width: 80%;
                        height: 80%;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .homepage__section {
            .hero__container {
                width: 80vw;
                .hero__text {
                    .hero__badge {
                        font-size: 1.2vw;
                    }

                    .hero__title {
                        font-size: 3.5vw;
                    }

                    .hero__description {
                        font-size: 1.8vw;
                    }
                }

                .hero__img {
                    img {
                        width: 70%;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .homepage__section {
            .hero__container {
                width: 80vw;
                .hero__text {
                    .hero__badge {
                        font-size: 1vw;
                    }

                    .hero__title {
                        font-size: 3vw;
                    }

                    .hero__description {
                        font-size: 1.6vw;
                    }
                }

                .hero__img {
                    img {
                        width: 70%;
                    }
                }
            }
        }
    }
`;

