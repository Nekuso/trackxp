import styled from "styled-components"

export const StyledAddModal = styled.div`
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
    
    .closer {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        z-index: 101;
    }
    .add__modal {
        width: 95%;
        height: 90%;
        background: white;
        border-radius: 1rem;
        padding: 1rem;
        z-index: 111;

        .add__modal__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            
            .title {
                font-size: 1.5rem;
            }
            
            i {
                cursor: pointer;
                font-size: 1.5rem;
                padding: .3rem;
            }
        }
    }


    @media screen and (min-width: 768px) {
        .add__modal {
            width: 80%;
            height: 80%;
            background: white;
            border-radius: 1rem;
            padding: 2rem;
        }
    }

    @media screen and (min-width: 1024px) {
        .add__modal {
        }
    }
`