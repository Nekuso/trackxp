import styled from "styled-components";

export const StyledSinglePage = styled.div`
    width: 95%;
    height: 95%;
    // background: red;

    .single__page__section {
        display: grid;
        justify-content: space-between;
        align-items: space-between;
        width: 100%;
        height: 100%;
        row-gap: 1%;

        .order__info {
            width: 100%;
            height: 100%;
            background: blue;
            border-radius: .7rem;
        }
        
        .order__table {
            width: 100%;
            height: 100%;
            grid-area: medium;
            background: green;
            border-radius: .7rem;
        }
        
        .order__cycle {
            width: 100%;
            height: 100%;
            grid-area: big;
            background: yellow;
            border-radius: .7rem;
        }
    }

    @media screen and (min-width: 768px) {
        .single__page__section {
            display: grid;
            justify-content: space-between;
            align-items: space-between;
            width: 100%;
            height: 100%;
            grid-template-columns: 22% 77%;
            grid-template-rows: 59% 40%;
            grid-template-areas:
                "small medium"
                "big big"
            ;
            row-gap: 1%;
            
            .order__info {
                width: 100%;
                height: 100%;
                grid-area: small;
                background: blue;
                border-radius: .7rem;
            }
            
            .order__table {
                width: 100%;
                height: 100%;
                grid-area: medium;
                background: green;
                border-radius: .7rem;
            }
            
            .order__cycle {
                width: 100%;
                height: 100%;
                grid-area: big;
                background: yellow;
                border-radius: .7rem;
            }
        }
    }
`;