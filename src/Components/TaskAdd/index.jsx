import { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci"
import {v4 as uuidv4} from 'uuid'

import{
    Container,
    TaskContainer,
    Heading,
    InputContainer,
    Input,
    Button,
    UnorderList,
    Para
} from './styledComponents.jsx'

import TaskItem from '../TaskItem/index.jsx'



const TaskAdd = ()=>{
    const[state,setState] = useState({task:'',
        task_list:[]
    })
    const onChangeData = (event)=>{
        setState((prevState)=>({
            task:event.target.value,
            task_list:prevState.task_list,
        }))
    }

    const onSubmitData = ()=>{
        setState(prevState=>({
            task:'',
            task_list:[...prevState.task_list,{id:uuidv4(),task:prevState.task,isChecked:false}],
        }))
    }

    const onDeleteObject = (id)=>{
        console.log(id)
        setState(prevState=>({
            task:prevState.task,
            task_list:[...prevState.task_list.filter((item)=>item.id!==id)],
        }))
    }

    const onChecked = (id)=>{
        setState(prevState=>({
            task:prevState.task,
            task_list:[...prevState.task_list.map(item=>{
                if(item.id===id){
                    return {...item,isChecked:!item.isChecked}
                }
                return item
            })]
        }))
    }
    
    return(
        <Container>
            <TaskContainer>
                <Heading>
                    Task Tracker
                </Heading>
                <InputContainer>
                    <Input type='text' placeholder='Add a new task....' value={state.task} onChange={onChangeData}/>
                    <Button type='button' onClick={onSubmitData}>
                        <CiCirclePlus size={18} color="#ffffff"/>
                        <p>Add Task</p>
                    </Button>
                </InputContainer>
                {state.task_list.length===0?
                <>
                    <Para>No task is added yet.Add task and get start!</Para>
                </>:
                <>
                    <UnorderList>
                        {state.task_list.map(item=>(
                            <TaskItem key={item.id} details={item} onChecked={onChecked} onDeleteObject={onDeleteObject}/>
                        ))}
                    </UnorderList>
                </>}
            </TaskContainer>
        </Container>
)}

export default TaskAdd