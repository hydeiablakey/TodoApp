import React from 'react';



class TodoForm extends React.Component {
  constructor(props) {
    super();
    this.state = { inputText: "" };
    //The form's state is set to an empty string.  
  }
  
  //Changing the input text to allow users to type in form. 
  handleInputChange = event => {
    const newValue = event.target.value;
    // console.log(newValue); //showing what users type in the console
    this.setState({ inputText: newValue }); //changing to new state. 
  };

  //alert triggers the add button and adds the form text with it. 
  handleClick = () => {
    
    const newInput = this.state.inputText;
    console.log("You've entered " + newInput);
    
    if (newInput === "") {
      alert("Please enter a Todo list value.")
      return false;
    } 
    
    //This uses the handleAdd function from the TodoApp component.
    this.props.onAdd(newInput);
    //This sets the state to revert back to empty text after pressing add. 
    this.setState({inputText: ""})
    
//Add future if statement that won't allow empty strings in the input box with a remove button. 
  };


  render() {
    return (

      <div>
        {/* i can insert comments like this */}
        <h4 className="header-text"><b>Enter todo items below:</b></h4>
        <br />
        <input className="formInput" value={this.state.inputText} 
          onChange={this.handleInputChange} type="text"/>
        
        <button className="addButton btn-sm" onClick={this.handleClick}>&#10010;</button>
       
        
      </div>
    );
  }
}

export default TodoForm; 
