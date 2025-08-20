import React, { Component } from 'react'

export default class ToDolist extends Component {
    state={
      task:'',
      todos:[]
    }

    update = (e) => this.setState({task:e.target.value})
    
    add=()=>{
      const{ task, todos}=this.state;
      if (!task.trim()) return 
      this.setState({todos:[...todos,task], task:""})
    }

    delete=(i)=>{
      this.setState({todos: this.state.todos.filter((_,index)=>index !==i)})
    }

  render() {
    const {task, todos} = this.state
    return (
      <div >
        <input type="text" value={task} onChange={this.update} placeholder='enter the task' style={{padding:'10px'}} />
        <button onClick={this.add} style={{padding:'10px'}}>Add</button>
        <ul>
          {todos.map((todo,i)=>(
              <li key={i}>
                {todo}
                <button onClick={()=>this.delete(i)}>X</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
