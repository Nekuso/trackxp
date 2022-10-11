import styled from "styled-components";

export const StyledLoginPage = styled.div`
    .login__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: #243160;

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
                
                h2 {
                    text-align: center;
                    font-size: 9vw;
                }

                p {
                    font-size: 3.5vw;
                    text-align: center;
                }

                .login__form {
                    h4 {
                        margin: 1rem 0 0;
                        font-size: 5.5vw;
                    }
                    input {
                        width: 100%;
                        border: none;
                        padding: .8rem 1rem;
                        border-radius: 1rem;
                    }
                }
            }
        }
    }
`