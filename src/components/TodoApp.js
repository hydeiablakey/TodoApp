import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoApp extends React.Component {
  constructor(props) {
    super()
    this.state = {tasks: props.dataItems}
  }
  
  handleAdd = (itemName) => { 
    //state tasks refers to the tasks array of items. 
    const currentTasks = this.state.tasks;
    const idNumber = Math.floor(Math.random() * 1000); // Pseudo random id
  
    const newTasks = currentTasks.concat({
      id: idNumber,
      name: itemName, 
      completed:false
    });

    this.setState({tasks: newTasks })

  }
  //id is referring to this.props.id which is item.id 
  handleRemove = (id) => {
    const currentTasks = this.state.tasks;
    const updatedTasks = currentTasks.filter(function(task) {
      if (task.id === id) {
        return false
      } else {
        return true
      }
    });

    this.setState({
      tasks: updatedTasks
    });
  }

  render() {
    //here we store a collection of todo items 
    const items = [];
      
    // //loop takes info in tasks array and returns all values under name
    for (let i = 0; i < this.state.tasks.length; i++) {
       //pushes all values under name into the t array.
       const item = this.state.tasks[i];


       items.push(
         <TodoItem
           id={ item.id }
           task={ item.name } 
           done={ item.completed} 
           onRemove={ this.handleRemove }
         />
       );
    }
    
    
    return (
      <div>

        <h1 className='header-app-text'>Todolist Application</h1>
        <TodoForm onAdd={this.handleAdd}  />
        <hr />
        { items }
        
      </div>
    );
  }
}



 

export default TodoApp;
