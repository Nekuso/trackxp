import styled from "styled-components";

export const StyledSinglePage = styled.div`
    width: 90%;
    height: 98%;
    // background: red;

    .single__page__section {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        height: 100%;
        row-gap: 1%;

        .order__info__container {
            width: 100%;
            .order__info {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
                padding: 1.3rem;
                border-radius: .7rem;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
                img {
                    width: 90%;
                    border-radius: .7rem;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                }
    
                .order__title {
                    padding: 1rem 0;
                    width: 100%;
                    text-align: center;
                    
                    h2 {
                        font-size: 5vw;
                    }
    
                    p {
                        font-size: 4vw;
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
                        row-gap: .7rem;
                        .item__desc {
                            p {
                                font-weight: 400;
                                font-size: 4vw;
                            }
                            .item__title {
                                font-weight: 700;
                                font-size: 4vw;
                            }
                        }
                    }
                }
            }
        }
        
        .order__table__container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: auto;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: .7rem;

            .order__table {
                width: 100%;
                padding: 1rem;

                tr {
                    th {
                        font-size: 1rem;
                        padding-right: .4rem;
                        padding-bottom: .8rem;
                    }
                    td{
                        text-align: center;
                        padding: .3rem 0;
                        font-size: .8rem;
                    }
                    .particular__align {
                        text-align: left;
                    }
                    
                    .grand__total {
                        border-top: 1px solid black;
                        font-weight: 700;
                        font-size: 1.2rem;
                        padding: .8rem 0 0 0;
                    }
                }
            }
        }
        
        .order__cycle__container {
            width: 100%;
            height: 200px;
            grid-area: big;
            background: yellow;
            border-radius: .7rem;
        }
    }
    
    @media screen and (min-width: 768px) {
        width: 95%;
        height: 95%;

        .single__page__section {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: .5rem;

            .order__info__container {
                flex: 1 0 18%;
                height: auto;

                .order__info {
                    width: 100%;
                    height: auto;
                    padding: 1rem;
    
                    img {
                        width: 160px;
                    }
        
                    .order__title {
                        padding-top: .5rem;
                        h2 {
                            font-size: .7rem;
                        }
                        p {
                            font-size: .6rem;
                        }
                    }
                    
                    .order__desc {
                        padding: 0;
                        
                        .left, .right {
                            row-gap: .4rem;
                            .item__desc {
                                text-overflow: ellipsis;
                                p {
                                    font-size: .7rem;
                                }
                                .item__title {
                                    font-size: .6rem;
                                }
                            }
                        }
                    }
                }
            }
            
            .order__table__container {
                flex: 1 0 60%;
                height: auto;
                border-radius: .7rem;

                .order__table {
                    padding: 1rem;
    
                    tr {
                        th {
                            font-size: .9rem;
                            padding-right: 0;
                            padding-bottom: .5rem;
                        }
                        td{
                            text-align: center;
                            padding: .1rem 0;
                            font-size: .7rem;
                        }
                        .particular__align {
                            text-align: left;
                        }
                        
                        .grand__total {
                            font-size: 1.1rem;
                            padding: .4rem 0 0 0;
                        }
                    }
                }
            }
            
            .order__cycle__container {
                width: 100%;
                height: 100%;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        height: 90%;
        .single__page__section {
            gap: 1rem;
            .order__info__container {
                flex: 1 0 20px;
                height: auto;

                .order__info {
                    width: 100%;
                    height: auto;
                    padding: 1.5rem;
    
                    img {
                        width: 180px;
                    }
        
                    .order__title {
                        padding-top: .5rem;
                        h2 {
                            font-size: .9rem;
                        }
                        p {
                            font-size: .8rem;
                        }
                    }
                    
                    .order__desc {
                        padding: 0;
                        .left, .right {
                            row-gap: .4rem;
                            .item__desc {
                                text-overflow: ellipsis;
                                p {
                                    font-size: .8rem;
                                }
                                .item__title {
                                    font-size: .8rem;
                                }
                            }
                        }
                    }
                }
            }
            
            .order__table__container {
                flex: 1 0 60%;
                height: auto;

                .order__table {
                    padding: 1.5rem;
    
                    tr {
                        th {
                            font-size: 1.2rem;
                            padding-bottom: .5rem;
                        }
                        td{
                            text-align: center;
                            padding: .15rem 0;
                            font-size: .8rem;
                        }
                        .particular__align {
                            text-align: left;
                        }
                        
                        .grand__total {
                            font-size: 1.2rem;
                        }
                    }
            }
            
            .order__cycle__container {
                width: 100%;
                height: 100%;
            }
        }
    }
`;