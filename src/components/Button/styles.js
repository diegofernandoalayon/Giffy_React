import { Link as LinkWouter } from "wouter";
import styled from '@emotion/styled'

export const Link = styled(LinkWouter)`
background-color: rgba(127, 225, 250, 0.829);
border-radius: 5px;
border: none;
display: block;
font-size: 24px;
margin: 0 auto;
margin-top: 20px;
width: 80%;
:hover{ 
    backgroundColor: rgba(16, 207, 255, 0.829);
    color: black;
    }
`

export const Button = Link.withComponent('button') // de esta manera se pueden copiar los estilos 