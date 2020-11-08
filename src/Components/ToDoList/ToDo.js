import React from "react";
import {InputGroup, FormControl, Button, Container, Row, Col, Card} from "react-bootstrap";
import style from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import idGenerator from "./idGenerator"



class ToDo extends React.Component {
    state = {
        tasks: [],
        inputValue: '',
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


    render() {
        const {tasks, inputValue} = this.state;
        const tasksArrey = tasks.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card className={style.task}>
                        <Card.Body>
                            <Card.Title>{task.text.slice(0, 9)}</Card.Title>
                            <Card.Text>
                                {task.text}
                            </Card.Text>
                            <Button
                                variant="danger"
                                onClick={()=>this.removeTask(task._id)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                            <Button variant="warning" className={style.editButton}>
                                <FontAwesomeIcon icon={faEdit} />
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        });
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={12}>
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