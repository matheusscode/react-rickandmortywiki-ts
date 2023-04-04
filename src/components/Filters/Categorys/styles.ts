import styled from "styled-components";

export const ItemsContainer = styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    gap: 0.8rem;
    margin-top: 0.6rem;
    flex-wrap: wrap;

    @media only screen and (max-width: 1300px)  {
        height: 100px;
    }
`