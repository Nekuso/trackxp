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
                    background: #000000;
                }
                .is-active span:nth-child(2){
                    opacity: 0;
                    transform: translateX(10px);
                }
                .is-active span:nth-child(3){
                    transform: translate(0px, -8px) rotate(-45deg);
                    background: #000000;
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

                a {
                    h2 {
                        color: #000000;
                    }
                }

                button {
                    display: flex;
                    justfy-content: center;
                    align-items: center;
                    padding: .5rem;
                    border: none;
                    background: none;
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
        
    }

`