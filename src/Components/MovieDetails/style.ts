import styled from 'styled-components'

export const MovieDetails = styled.div`
    contain: content;
    margin: 5px;
    height: 150px;
    background-color: #93C6E7;
    border-radius: 6px;
    text-align: center;
    padding: 0 1rem;
}
`

export const Link = styled.a`
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    transition: 0.3s;
    text-align: center;
    width: fit-content;
    border-radius: 6px;  
    background-color: #00425A;
    color: #FFFBF5;    
    padding: 1rem;

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7);
    }
`