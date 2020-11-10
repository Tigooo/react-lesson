import React from "react";
import style from "../ToDoList/style.module.css";
import {Button, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";


class Tasks extends React.Component{
    state = {
      checked: false
    };

    handleckeck = ()=> {
      this.setState({
          checked: !this.state.checked
      });
      const {onCheck, data} = this.props;
      onCheck(data._id)
    };
    render() {
        const task = this.props.data;
        const {checked} = this.state;
        const {disabled} = this.props;
        return (
            <Card className={`${style.task} ${checked  ? style.selcetedTask: ''}`}>
                <Card.Body>
                    <input
                        type="checkbox"
                        onClick={this.handleckeck}
                    />
                    <Card.Title>{task.text.slice(0, 9)}</Card.Title>
                    <Card.Text>
                        {task.text}
                    </Card.Text>
                    <Button
                        variant="danger"
                        onClick={()=>this.props.remove(task._id)}
                        disabled={disabled}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Button
                        variant="warning"
                        className={style.editButton}
                        disabled={disabled}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Tasks;