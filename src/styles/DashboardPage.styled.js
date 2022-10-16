import styled from "styled-components";

export const StyledDashboardPage = styled.div`
    .dashboard__section {
        width: 100vw;
        height: 100vh;

        .dashboard__wrapper {
            display: flex;
            justify-content: center;
            width: 100%;

            .dashboard__nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 1rem;

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

`