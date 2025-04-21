
import { VscTrash,VscError } from "react-icons/vsc"
import { BsCheck2Circle } from "react-icons/bs"
import {ListItem,Container,Para,DeleteButton} from './styledComponents.jsx'
//import React from 'react'


const TaskItem = (props)=>{
    const {details,onDeleteObject,onChecked} = props 
    const{id,task,isChecked} = details 
    console.log(isChecked,id)

    const deleteId = ()=>{
        onDeleteObject(id)
    }

    const isCheck = ()=>{
        onChecked(id)
    }

    
    return(
    
    <ListItem style={{backgroundColor:isChecked?'#fff5f5' : '#F6F6F6'}}>
        <Container>
        {isChecked?<BsCheck2Circle style={{color:'#3cb371',fontSize:18,marginRight:10}}/>:
        <DeleteButton type='button' onClick={isCheck}>
            <VscError/>
        </DeleteButton>}
        <Para style={{textDecoration:isChecked?'line-through':'none'}}>{task}</Para>
        </Container>
        <DeleteButton type='button' onClick={deleteId}>
            <VscTrash/>
        </DeleteButton>
    </ListItem>
   )
}

export default TaskItem
