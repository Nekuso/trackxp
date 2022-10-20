import styled from "styled-components";

export const StyledDashboardPage = styled.div`
    .dashboard__section {
        width: 100vw;
        height: 100vh;

        .dashboard__wrapper {
            display: grid;
            justify-content: center;
            
            .dashboard__nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                width: 100vw;
                position: relative;

                .is-Active {
                    position: fixed;
                    top: 0;
                    right: 0;
                    z-index: 999;
                }

                .nav__hamburger{
                    cursor: pointer;  
                    display: grid;
                    position: relative;
                    z-index: 101;
                    
                    user-select: none;
                
                    appearance: none;
                    border: none;
                    outline: none;
                    background: none;
                
                    span{
                        display: block;
                        position: relative;
                        background: #000000;
                        width: 33px;
                        height: 4px;
                        margin-bottom: 5px;
                        border-radius: 2px;
                        transform-origin: 0,0;
                        transition: .4s;
                    }
                }

                .is-active span:nth-child(1){
                    transform: translate(0px, 10px) rotate(45deg);
                    background: #FFFFFF;
                }
                .is-active span:nth-child(2){
                    opacity: 0;
                    transform: translateX(10px);
                }
                .is-active span:nth-child(3){
                    transform: translate(0px, -8px) rotate(-45deg);
                    background: #FFFFFF;
                    width: 33px;
                }
                
                span:nth-child(2){
                    justify-self: start;
                    width: 23px;
                }
                span:nth-child(3){
                    justify-self: start;
                    width: 13px;
                }

                .home__logo {
                    h2 {
                        color: #000000;
                    }
                }

                .hamburger__wrapper {
                    display: none;
                }

                .wrapper__active {
                    display: flex;
                    position: fixed;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 30;
                    background #3030301f;
                }

                .hamburger__content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60vw;
                    height: 100vh;
                    background: #303030e7;
                    display: flex;
                    position: fixed;
                    top: 0;
                    right: 0;
                    left: -100%;
                    bottom: 0;
                    z-index: 50;
                    transition: .4s ease-in-out;
                    .hamburger__links {
                    }
                }

                .nav__active {
                    left: 0;
                }

                button {
                    display: flex;
                    justfy-content: center;
                    align-items: center;
                    padding: .5rem;
                    border: none;
                    background: none;
                    cursor: pointer;
                    i {
                        font-weight: 600;
                        font-size: 2rem;
                        color: #000000;
                    }
                }
            }
        }
    }


    @media screen and (min-width: 768px) {
        .dashboard__section {
            .dashboard__wrapper {
                .dashboard__nav {
                    .nav__hamburger {
                        display: none;
                    }
                }
            }
        }
    }

`