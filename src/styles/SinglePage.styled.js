import styled from "styled-components";

export const StyledSinglePage = styled.div`
    width: 95%;
    height: 98%;
    // background: red;

    .single__page__section {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        height: 100%;
        row-gap: 1%;

        .order__info {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            padding: 2rem;
            border-radius: .7rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            img {
                width: 100%;
                border-radius: .7rem;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }

            .order__title {
                padding: 1rem 0;
                width: 100%;
                text-align: center;
                border-bottom: 1px solid gray;
                
                h2 {
                    font-size: 1rem;
                }
                a {
                    font-size: 1rem;
                    color: black;
                }
            }

            .order__desc {
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding-top: 1rem;

                .left, .right {
                    display: flex;
                    flex-direction: column;
                    row-gap: .5rem;
                    .item__desc {
                        .item__title {
                            font-size: .8rem;
                        }
                    }
                }
            }
        }
        
        .order__table {
            width: 100%;
            height: 200px;
            grid-area: medium;
            background: green;
            border-radius: .7rem;
        }
        
        .order__cycle {
            width: 100%;
            height: 200px;
            grid-area: big;
            background: yellow;
            border-radius: .7rem;
        }
    }

    @media screen and (min-width: 768px) {
        height: 95%;

        .single__page__section {
            display: grid;
            justify-content: space-between;
            align-items: space-between;
            width: 100%;
            height: 100%;
            grid-template-columns: 22% 77%;
            grid-template-rows: 49% 49%;
            grid-template-areas:
                "small medium"
                "big big"
            ;
            row-gap: 2%;
            
            .order__info {
                height: 100%;
                grid-area: small;
            }
            
            .order__table {
                width: 100%;
                height: 100%;
                grid-area: medium;
            }
            
            .order__cycle {
                width: 100%;
                height: 100%;
                grid-area: big;
            }
        }
    }
`;