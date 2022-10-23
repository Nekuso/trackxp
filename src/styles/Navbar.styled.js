import styled from 'styled-components';


export const StyledNavbar = styled.nav`

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto;
    padding: 2rem 1rem;

    .nav__links {
        .dash__nav__containe {
            .nav__dash__button {
                background: #FFFF;
                color: #000000;
                padding: .6rem 1.3rem;
                border: none;
                border-radius: 1rem;
                text-align: center;
            }
        }

        li {
            .Link {
                padding: .3rem 0;
                border-bottom: 3px solid rgba(255, 255, 255, 0);
                transition: .4s ease-in-out;
                color: #FFFF;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 1.5rem 0;
        max-width: 90vw;
        .nav__links {
            display: block;
            width: 230px;
            transition: .4s ease-in-out;
            position: fixed;
            top: 0;
            right: -100%;
            bottom: 0;
            padding: 5rem 0;
            z-index: 100;

            .dash__nav__container {
                margin: 3rem;
                text-align: center;
                .nav__dash__button {
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 500;
                    padding: 1rem;
                    color: #FFFF;
                }
            }
            
            li {
                margin: 3rem;
                text-align: center;
                .Link {
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 500;
                    padding: 1rem;
                    color: #FFFF;
                }
            }
        }
        
        .nav__active {
            justify-content:center;
            position: fixed;
            top: 0;
            top: 0;
            right: 0;
            bottom: 0;
            gap: 1rem;
            background: #303030e7;
            transition: .4s ease-in-out;
        }
        
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
                background: rgb(252, 252, 252);
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
            background: #FFFF;
        }
        .is-active span:nth-child(2){
            opacity: 0;
            transform: translateX(10px);
        }
        .is-active span:nth-child(3){
            transform: translate(0px, -8px) rotate(-45deg);
            background: #FFFF;
            width: 33px;
        }
        
        span:nth-child(2){
            justify-self: end;
            width: 23px;
        }
        span:nth-child(3){
            justify-self: end;
            width: 13px;
        }
    }

    @media screen and (min-width: 769px) {
        .nav__links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 70%;
            position: relative;

            .nav__dash__button {
                background: #FFFF;
                color: #000000;
                border: none;
                padding: .8rem 1rem;
                border-radius: 1rem;
            }
    
            li {
                margin: 0.5rem 1.5rem;
                .Link {
                    font-size: .7rem;
                    font-weight: 500;
                }

                .Signup{
                    background: #FFFF;
                    color: #000000;
                    padding: .6rem 1.3rem;
                    border-radius: 1rem;
                }
            }
        }
        .nav__hamburger {
            display: none;
        }
        .nav__active {
            display: flex;
            position: relative;
            background: none;
        }
    }
    @media screen and (min-width: 1100px) {
        max-width: 90%;
        .brand__logo {
            width: 10vw;
        }
        .nav__links {
            .nav__dash__button {
                font-size: .8rem;
                padding: .8rem 1rem;
            }
            li{
                .Link {
                    font-size: 1vw;
                }
            }
        }
    }
`