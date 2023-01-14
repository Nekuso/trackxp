import styled from "styled-components";

export const StyledRatingModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 110;
    transition: all 0.3s ease-in-out;
    
    .closer {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(1px);
    }

    .set__modal {
        display: flex;
        flex-direction: column;
        width: 80vw;
        height: auto;
        background: #fafafa;
        border-radius: 1rem;
        padding: 1.5rem;
        z-index: 111;
        h1 {
            text-align: center;
            font-size: 1rem;
        }

        .set__modal__input {
            input {
                width: 100%;
                border: none;
                padding: .5rem;
                margin: 1rem 0;
                border: 1px solid #ccc;
                border-radius: .5rem;
            }
            .text__input {
                width: 100%;
                border: none;
                padding: .5rem;
                margin: .5rem 0;
                border: 1px solid #ccc;
                border-radius: .5rem;
                height: 10rem;
                resize: none;
            }
            .rating__container {
                display: flex;
                justify-content: center;
                width: 100%;
                .rating {
                    padding: 1rem 0;
                    font-size: 3rem;
                }
            }
            
            .buttons {
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
                width: 100%;

                button {
                    cursor: pointer;
                    padding: .5rem 1.5rem;
                    border: none;
                    border-radius: 1rem;
                    background: black;
                    color: white;
                    transition: all .2s ease-in-out;

                    :hover {
                        transform: scale(1.05);
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .set__modal {
            width: 25rem;
            padding: 1.5rem;
            h1 {
                font-size: 1.2rem;
            }
            .set__modal__input {
                .rating__container {
                    width: 100%;
                    .rating {
                        font-size: 3rem;
                    }
                }
                .text__input {
                    height: 10rem;
                }
                .buttons {
                    button {
                        border-radius: 1rem;
                        font-size: .8rem;
                        padding: .5rem 1rem;
                    }
                }
            }
        }
    }
`