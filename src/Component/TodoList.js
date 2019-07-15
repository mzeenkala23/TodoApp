import React from 'react'
import classes from './TodoList.module.css'
import TodoItem from './TodoListItem/TodoListItem'
 const todoform= (props) =>{

    const item = props.listName.map((item, index)=>{
        return <TodoItem key={item.id}
                name={item.todoItem} 
                id={item.id}
                delete={props.delete}
                done={props.completed}
                completed={item.completed}/>
    })
  return (

    // loop though the to do state
    <div className={classes.TodoList}>
        <ul>
            {item}
        </ul>   
    </div>
  )
}

export default todoform;
