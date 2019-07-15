import React from 'react'
import classes from './TodoListItem.module.css'

const ToDoListItem =(props)=>{

    let styleArray=[classes.TodoListItem]

    if(props.completed){
        styleArray.push(classes.TodoListItem_completed)
    }
  
    
    return(
        <div className={styleArray.join(' ')} >
            <li> {props.name}</li>
            <div className={classes.fass}> 
                <i className="fas fa-check"  onClick={()=>props.done(props.id)}></i>
                <i className="fas fa-times" onClick={()=>props.delete(props.id)}></i>
            </div>
        </div>    
    )

}

export default ToDoListItem;