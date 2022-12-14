import styled from "styled-components";

export const StyledSignupPage = styled.div`
    .signup__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        background: rgb(0,8,77);
        background: #ffffff;
        overflow: hidden;

        .signup__container {
            display: grid;
            grid-template-columns: 45% 45%;
            grid-template-rows: 35% 60%;
            grid-template-areas: 
                "image image"
                "form form"
            ;
            justify-content: space-between;
            align-items: center;
            width: 80vw;
            height: 85vh;

            .signup__img__container{
                grid-area: image;
                width: 100%;
                height: 100%;   
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 100%;
                }
            }

            .signup__form__container {
                grid-area: form;
                width: 100%;
                height: 100%;
                
                .signup__form__content {
                    h2 {
                        text-align: center;
                        font-size: 7vw;
                        color: black;
                    }
                    
                    p {
                        font-size: 3.8vw;
                        text-align: center;
                        color: black;
                    }
                    
                    .signup__form {
                        h4 {
                            margin: .8rem 0 0;
                            font-size: 4.5vw;
                            color: black;
                        }
                        input {
                            width: 100%;
                            border: none;
                            border-radius: .5rem;
                            padding: .8rem 1.4rem;
                            color: #000000;
                            border: 1px solid #6363635d;
                        }
                    }
                    
                    button {
                        background: #4b65c2;
                        width: 100%;
                        padding: 1rem 2rem;
                        border: none;
                        border-radius: 1.8rem;
                        font-size: 5vw;
                        font-weight: 700;
                        margin: 1rem 0;
                        transition: all .3s ease-in-out;
                        color: white;
                        
                        &:hover {
                            cursor: pointer;
                            background: #5c79e2;
                        }
                    }
                    
                    h3 {
                        text-align: center;
                        font-size: 4.5vw;
                        color: black;
                        
                        a {
                            color: #5c79e2;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .signup__section {
            .signup__container {
                height: 60vh;
                grid-template-rows: 50% 50%;
                grid-template-areas:
                    "image form"
                    "image form"
                ;

                .signup_ _img__container {
                
                }

                .signup__form__container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .signup__form__content {
                        width: 100%;
                        h2 {
                            font-size: 2.6vw;
                        }
                        
                        p {
                            font-size: 1.4vw;
                        }

                        .signup__form {
                            h4 {
                                margin: 1rem 0 0;
                                font-size: 1.4vw;
                            }
                            
                            input {
                                font-size: 1.3vw;
                                padding: .7rem 1rem;
                            }
                        }
                        
                        button {
                            margin: .6rem 0;
                            font-size: 1.6vw;
                            padding: .6rem 0;
                        }
                        
                        h3 {
                            font-size: 1.2vw;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .signup__section {
            .signup__container {
                width: 70vw;
                grid-template-columns: 50% 40%;

                .signup__form__container {
                    .signup__form__content {
                        h2 {
                            font-size: 2.8vw;
                        }

                        p {
                            margin: 0 auto;
                            width: 75%;
                            font-size: 1vw;
                        }

                        .signup__form {
                            h4 {
                                font-size: 1.3vw;
                            }

                            input {
                                font-size: 1vw;
                                padding: 1rem;
                            }
                        }

                        button {
                            margin: 2rem 0 1rem 0;
                            font-size: 1.3vw;
                            padding: .8rem;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .signup__section {
            .signup__container {
                height: 60vh;
                grid-template-rows: 50% 50%;
                grid-template-areas:
                    "image form"
                    "image form"
                ;

                .signup_ _img__container {
                
                }

                .signup__form__container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .signup__form__content {
                        width: 100%;
                        h2 {
                            font-size: 2.6vw;
                        }
                        
                        p {
                            font-size: 1.4vw;
                        }

                        .signup__form {
                            h4 {
                                margin: 1rem 0 0;
                                font-size: 1.4vw;
                            }
                            
                            input {
                                font-size: 1.3vw;
                                padding: .7rem 1rem;
                            }
                        }
                        
                        button {
                            margin: .6rem 0;
                            font-size: 1.6vw;
                            padding: .6rem 0;
                        }
                        
                        h3 {
                            font-size: 1.2vw;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .signup__section {
            .signup__container {
                width: 65vw;
                grid-template-columns: 50% 40%;
                .signup__form__container {
                    .signup__form__content {
                        h2 {
                            font-size: 2.2vw;
                        }

                        p {
                            margin: 0 auto;
                            width: 75%;
                            font-size: .8vw;
                        }

                        .signup__form {
                            h4 {
                                font-size: 1vw;
                            }

                            input {
                                font-size: 1vw;
                                padding: .7rem;
                            }
                        }

                        button {
                            margin: 2rem 0 1rem 0;
                            font-size: 1.3vw;
                            padding: .8rem;
                        }

                        h3 {
                            font-size: 1vw;
                        }
                    }
                }
            }
        }
    }
`