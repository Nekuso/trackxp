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
    }
    @media screen and (min-width: 768px) {
        .team__content {
            width: 80vw;
        }

`