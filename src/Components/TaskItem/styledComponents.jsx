import styled from 'styled-components'

export const ListItem = styled.li`
background-color:'#F6F6F6';
height:40px;
width:400px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
border-radius:4px;
padding:5px;
margin-bottom:12px;
`

export const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
`

export const Para = styled.p`
color:#000000;
font-family:Roboto;
font-size:15px;
margin:0px;
`


export const DeleteButton = styled.button`
background-color:transparent;
cursor:pointer;
border-width:0px;
color:#a0a0a0;
font-size:18px; 

//hover color 
&:hover{
 color:#ff0000;
}
`

