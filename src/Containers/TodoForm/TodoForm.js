
import React, { Component } from 'react'
import classes from './TodoForm.module.css'
import TodoList from '../../Component/TodoList'
import shortid from 'shortid' 


class TodoForm extends Component {
    state={
        TodoList:[],
        TodoName:'',
        btnDisabled:true
    }

    onChangeHandler=(e)=>{

        // disable buttom if no imput is entered
        if(e.target.value.length >0){
            this.setState((prevState)=>{
               return{ btnDisabled: !prevState}
            })
        }else{
            this.setState({btnDisabled: true})
        }

        this.setState({TodoName:e.target.value})
    }

    submitHandler=(e)=>{
        e.preventDefault()
        // make copy of state with new todo to prevent state mutation
        const newTodo={
            todoItem:this.state.TodoName,
            completed:false,
            id: shortid.generate()
        }
        const updatedTodoList=[...this.state.TodoList,newTodo];
        console.log(updatedTodoList)
        // disable button and clear input after submit
        this.setState({TodoName:'', TodoList:updatedTodoList, btnDisabled:true})
       
    }


    deleteItem =(id)=>{
        const todoList=[...this.state.TodoList]
        const list=todoList.filter(item =>{
            return id !== item.id;
        })

        this.setState({TodoList:list})
        
    }

        todoDone=(id)=>{
            const todoList=[...this.state.TodoList]
            // find to do that got marked as completed and change false to true
            todoList.map(item=>{
                if(item.id===id){
                    item.completed=!item.completed
                }
            })    
            this.setState({
                TodoList:todoList
            })
            
        }
        
    
    

  render() {
       

    return (

      <React.Fragment>  
        <h1> add to todo </h1>
        <div className={classes.TodoForm} >
            <form onSubmit={this.submitHandler}>
                <input type='text' placeholder='enter To Do' onChange={this.onChangeHandler} value={this.state.TodoName}></input>
                <button type='submit' disabled={this.state.btnDisabled}> ADD </button>   
                
            </form>
            <TodoList listName={this.state.TodoList} delete={(item)=>this.deleteItem(item)}  completed={(id)=>this.todoDone(id)}/>

        </div>

      </React.Fragment>
    )
  }
}


export default TodoForm;