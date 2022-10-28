import styled from "styled-components"

export const StyledDataTable = styled.div`
    height: 100%;
    width: 100%;

    .dataTable {
        height: 70vh;

        .dataGrid {
            font-size: 0.8rem;
        }
    }

    @media screen and (min-width: 768px) {
        .dataTable {
            height: 100%;
        }
    }

`