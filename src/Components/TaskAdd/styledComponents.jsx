
import styled from 'styled-components'

export const Container = styled.div`
background-color:#f6f6f6;
display:flex;
flex-firection:row;
justify-content:center;
height:100vh;
width:100%;
padding-top:20px;
padding-bottom:20px;
`

export const TaskContainer = styled.div`
background-color:#ffffff;
border-radius:8px;
padding:20px;
`

export const Heading = styled.div`
color:#000000;
font-family:Roboto;
font-size:25px;
font-weight:bold;
`

export const InputContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:10px;
margin-bottom:10px;
`

export const Input = styled.input`
height:40px;
width:300px;
background-color:transparent;
color:#000000;
font-family:Roboto;
font-size:14px;
padding-left:15px;
border:2px solid #dcdcdc;
border-radius:4px;
padding-left:20px;
margin-right:30px;
outline:none;

//change border-color
&:focus {
    border:2px solid #da70d6;
}
`
export const Button = styled.button`
height:40px;
width:120px;
background-color:#da70d6;
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
color:#ffffff;
font-family:Roboto;
padding:10px;
font-size:14px;
font-weight:bold;
border-radius:8px;
border-width:0px;
cursor:pointer;
`

export const UnorderList = styled.ul`
height:70vh;
list-style-type:none;
display:flex;
flex-direction:column;
padding-left:0px;
overflow-y:auto;
`

export const Para = styled.p`
color:#bebebe;
font-family:Roboto;
font-size:18px;
`


