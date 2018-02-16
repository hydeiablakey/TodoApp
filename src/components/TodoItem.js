import React from 'react';


class TodoItem extends React.Component {
  constructor(props) {
    super();
    this.state = { complete: props.done };
  }
  
  //Allows to strike out text based on if the state is true or false. 
  //True if the state is set to false, meaning the state starts out as
  // false since it is not striked out. Then when it is striked out, change to true.

  handleClick = () => {
    if (this.state.complete === true) {

      this.setState({ complete: false });
    } else {
      this.setState({ complete: true });
    }
  };

  removeClick = () => {
    console.log("You have removed the task " + this.props.task + "with id: " + this.props.id)
    
    // goes into the task property in the todoItem that is within the App component. 
    this.props.onRemove(this.props.id)
  }
  
  render() {
    let task = this.props.task + '(id: ' + this.props.id + ')';
    if (this.state.complete) {
      task = <s>{task}</s>;
    }
    
    return (
    <div>
    <div onClick={this.handleClick}>{task} 
    <button className="removeButton btn-xs" onClick={this.removeClick}><b>&#9747;</b></button></div>
        
    </div>
    )
    
  }
}

export default TodoItem;