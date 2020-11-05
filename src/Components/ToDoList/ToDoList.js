import React from "react";
import {InputGroup, FormControl, Button } from "react-bootstrap"
import Task from "./Task";

class ToDoList extends React.Component {
    state = {
        tasks: [],
        inputValue: ''
    };

    handleChange = (event) => {
        this.setState(
            {
                inputValue: event.target.value
            }
        )
    };
    handleclick = () =>{
      const {inputValue} = this.state ;
      const tasks = [...this.state.tasks];
        tasks.push(inputValue);
        this.setState({
            tasks: tasks,
            inputValue: ''
        })
    };

    render() {
        const {inputValue, tasks} = this.state;
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Add new task"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.handleChange}
                        value={inputValue}
                    />
                    <InputGroup.Append>
                        <Button variant="primary"
                        onClick={this.handleclick}
                        >Add</Button>
                    </InputGroup.Append>
                </InputGroup>
                   <ol>
                       {tasks.map((task, index)=>{
                           return <Task key={index} data={task}/>
                       })}
                   </ol>
            </div>
        )
    }
}

export default ToDoList;