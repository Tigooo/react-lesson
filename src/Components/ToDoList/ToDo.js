import React from "react";
import {InputGroup, FormControl, Button, Container, Row, Col, Card} from "react-bootstrap";
import style from "./style.modul.css";
// import Task from "./Task";

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
        const tasks = [inputValue, ...this.state.tasks];
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
    render() {
        const {tasks, inputValue} = this.state;
        const tasksArrey = tasks.map((task, i) => {
            return (
                <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card className={style.task}>
                        <Card.Body>
                            <Card.Title>{task.slice(0, 9)}</Card.Title>
                            <Card.Text>
                                {task}
                            </Card.Text>
                            <Button variant="primary">Go</Button>
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