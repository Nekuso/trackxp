import styled from "styled-components";

export const StyledSidebar = styled.div`
    .sidebar__links {
        margin-top: 10%;
        width: 100%;
        height: auto;
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            .link {
                display: flex;
                align-items: center;
                width: 80%;
                margin: .3rem 0;
                font-size: .8rem;
                padding: .8rem 1rem;
                border-radius: 10px;
                color: #000000;
                transition: .4s ease-in-out;
                
                i {
                    color: #000000;
                    margin-right: .5rem;
                    font-size: 1.5rem;
                    transition: .4s ease-in-out;
                }
                
                :hover {
                    background: black;
                    color: white;

                     i {
                        color: white;
                     }
                }
            }
        }
    }
`;