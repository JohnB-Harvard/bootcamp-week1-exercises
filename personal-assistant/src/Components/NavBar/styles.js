import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MyLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-style: bold;
    font-family: Helvetica, sans-serif;
    font-size: 2em;
    background-color: purple;
    transition: font-size .2s ease;
    justify-content: center;
    &:visited{
        color: white;
        text-decoration: none;
    }
    &:hover{
        color: lime;
        font-size: 2.5em;
    }
`
export const Bar = styled.div`
    background-color: purple;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`
