import styled from 'styled-components'

export const MyButton = styled.button`
    background-color: purple;
    color: white;
    transition: border .225s ease;
    border-color: black;
    border-radius: 4px;
    &:hover{
        border-radius: 0px;
        border-color: white;
        border-style: solid;
        background-color: red;
    }
    &:active{
        border-color: green;
    }
`
export const MyDiv = styled.div`
    width: 100%;
    height: 100 px;
    background-color: black;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Myh1 = styled.h1`
    font-size: 5em;
    color: white;
    text-align: center;
    font-family: Papyrus, Georgia, Times, serif
`
export const MyInput = styled.input`
    font-size: 2em;
    background-color: transparent;
    color: lightgray;
    border: none;
    transition: border .225s ease;
    font-family: Helvetica, Georgia, Times, serif;
    &:hover{
        border-width: 2px;
        border-radius: 2px;
        border-style: solid;
        border-color: grey;
    }
`

export const Myth = styled.th`
    font-size: 2em;
    color: purple;
    font-family: Helvetica, sans-serif;
    text-align: center;
    font-style: bold;
`

export const Mytd = styled.td`
    font-size: 1.5em;
    color: purple;
    font-family: Helvetica, sans-serif;
    text-align: center;
`

export const DeleteButton = styled.button`
    font-size: 1 em;
    color: red;
    background-color: white;
    font-family: Helvetica, sans-serif
`
