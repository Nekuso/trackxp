import styled from "styled-components";

export const StyledLoginPage = styled.div`
    .login__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        background: rgb(0,8,77);
        background: linear-gradient(0deg, rgba(0,8,77,1) 0%, rgba(44,67,137,1) 100%);
        overflow: hidden;

        .login__container {
            display: grid;
            grid-template-columns: 45% 45%;
            grid-template-rows: 40% 60%;
            grid-template-areas: 
                "image image"
                "form form"
            ;
            justify-content: space-between;
            align-items: center;
            width: 80vw;
            height: 85vh;

            .login__img__container{
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

            .login__form__container {
                grid-area: form;
                width: 100%;
                height: 100%;
                
                .login__form__content {
                    h2 {
                        text-align: center;
                        font-size: 9vw;
                        color: white;
                    }
                    
                    p {
                        font-size: 3.5vw;
                        text-align: center;
                        color: white;
                    }
                    
                    .login__form {
                        h4 {
                            color: white;
                            margin: 1rem 0 0;
                            font-size: 5.5vw;
                        }
                        input {
                            width: 100%;
                            border: none;
                            border-radius: .5rem;
                            padding: .8rem 1.4rem;
                            color: #000000;
                        }

                        button {
                            background: #4b65c2;
                            width: 100%;
                            padding: 1rem 2rem;
                            color: white;
                            border: none;
                            border-radius: 1.8rem;
                            font-size: 5vw;
                            font-weight: 700;
                            margin: 1rem 0;
                            transition: all .3s ease-in-out;
    
                            &:hover {
                                cursor: pointer;
                                background: #5c79e2;
                            }
                        
                        }
                    }
                    span {
                        p {
                            text-align: center;
                            color: red;
                        }
                    }

                    h3 {
                        text-align: center;
                        font-size: 4.5vw;
                        color: white;
                        
                        a {
                            color: #4b65c2;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .login__section {
            .login__container {
                height: 60vh;
                grid-template-rows: 50% 50%;
                grid-template-areas:
                    "image form"
                    "image form"
                ;

                .login_ _img__container {
                
                }

                .login__form__container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .login__form__content {
                        width: 100%;
                        h2 {
                            font-size: 2.6vw;
                        }
                        
                        p {
                            font-size: 1.4vw;
                        }

                        .login__form {
                            h4 {
                                margin: 1rem 0 0;
                                font-size: 1.4vw;
                            }
                            
                            input {
                                font-size: 1.3vw;
                                padding: .7rem 1rem;
                            }
                            button {
                                margin: .6rem 0;
                                font-size: 1.6vw;
                                padding: .6rem 0;
                            }
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
        .login__section {
            .login__container {
                width: 70vw;
                grid-template-columns: 50% 40%;
                .login__form__container {
                    .login__form__content {
                        h2 {
                            font-size: 2.8vw;
                        }

                        p {
                            margin: 0 auto;
                            width: 75%;
                            font-size: 1vw;
                        }

                        .login__form {
                            h4 {
                                font-size: 1.3vw;
                            }

                            input {
                                font-size: 1vw;
                                padding: 1rem;
                            }
                            button {
                                margin: 1rem 0 1rem 0;
                                font-size: 1.3vw;
                                padding: .8rem;
                            }
                        }
                    }
                }
            }
        }
    }
`