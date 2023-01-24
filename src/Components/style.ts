import styled from 'styled-components'

export const FixedNavBar = styled.div`
    overflow: hidden;
    background-color: #03001C;
    position: fixed;
    top: 0;
    width: 100%;
    color: #fff;
    padding: 8px;
    z-index: 1;
}
`

export const BodyContainer = styled.div`
    padding: 16px;
    margin-top: 100px;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(2,1fr);
    }
`