import React from "react";
import {InputGroup, FormControl, Button, Container, Row, Col} from "react-bootstrap";
import idGenerator from "./idGenerator"
import Tasks from "../Tasks/Tasks";
import style from "./style.module.css";



class ToDo extends React.Component {
    state = {
        tasks: [],
        inputValue: '',
        selectedTodo: []
    };

    hendleChnge = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };
    addTask = () => {
        const {inputValue} = this.state;
        const newtask = {
            text: inputValue,
            _id: idGenerator()
        };
        const tasks = [newtask, ...this.state.tasks];
        this.setState({
            tasks: tasks,
            inputValue: ''
        })
    };
    handelKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addTask();
        }
    };
    removeTask = (taskId)=>{
        const newtask = this.state.tasks.filter(task => task._id !==taskId);
        this.setState({
            tasks:newtask
        })
    };

    handleCkeck = (taskid) => {
        const selectedTodo = new Set(this.state.selectedTodo);

        if (selectedTodo.has(taskid)) {
            selectedTodo.delete(taskid);
        }else {
            selectedTodo.add(taskid);
        }
        this.setState({
            selectedTodo
        });
    };

    removeSelected = () => {
        let tasks = [...this.state.tasks];
        this.state.selectedTodo.forEach((id)=>{
            tasks = tasks.filter((task)=> task._id !== id);
        });
        this.setState({
            tasks,
            selectedTodo: ''
        });
    };
    render() {
        const {tasks, inputValue, selectedTodo} = this.state;
        const tasksArrey = tasks.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Tasks
                        data={task}
                        remove={this.removeTask}
                        onCheck= {this.handleCkeck}
                        disabled = {!!selectedTodo.size}
                    />
                </Col>
            )
        });
        return (
            <div>
                <Container>
                    <Row>
                        <Col  xs={10} sm={10} md={10} lg={10} xl={10} >
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Add new task"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={this.hendleChnge}
                                    onKeyPress={this.handelKeyDown}
                                    value={inputValue}
                                />
                                <InputGroup.Append>
                                    <Button variant="primary"
                                            onClick={this.addTask}
                                            disabled={!inputValue}
                                    >Add</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Button variant="danger"
                                    onClick={this.removeSelected}
                                    className={`${style.removeButton} ${selectedTodo.size ? style.displayNone: ' '}`}
                                    disabled = {!selectedTodo.size}
                            >Remove</Button>
                        </Col>
                    </Row>
                    <Row>
                        {tasksArrey}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ToDo;