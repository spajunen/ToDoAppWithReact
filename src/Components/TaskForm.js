import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class TaskForm extends Component {

    state = {
        name: ''
    };

    handleTaskName = (e) => {
        this.setState({name: e.target.value});
    };

    handleId = (e) => {
        this.setState({id: e.target.value});
    };

    handleAddClick = (e) => {
        e.preventDefault();
        const newTask = {
            name: this.state.name
        };
        this.setState({name: ''});
        this.props.add(newTask);
    };

    handleUpdateClick = (e) => {
        e.preventDefault();
        const updatedTask = {
            name: this.state.name
        };
        this.props.update(this.state.id, updatedTask);
        //pitäisi tarkastaa myös onko id listalla
        if (this.state.id == null) {
            alert("Anna muokattavan quoten id")
        }
        this.setState({id: '', name: ''});
    };

    render() {
        console.log("state on", this.state);
        return (

            <Form>
                <h2>Add or Update Task:</h2>
                <br/>
                <Form.Group as={Row} controlId="formBasicId">
                    <Form.Label column sm="2">Id</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Id, only when updating!"
                                      value={this.state.id} onChange={this.handleId}/></Col>
                    {/*<input type="text" placeholder="Id, only when updating!" id="form_id"*/}
                    {/*       value={this.state.id} onChange={this.handleId} />*/}
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicQuote">
                    <Form.Label column sm="2">To Do</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows="3" type="text" placeholder="task"
                                      value={this.state.name} onChange={this.handleTaskName}
                                      required="required"/></Col>
                </Form.Group>



                <Form.Group as={Row}>
                    <Col sm={{span: 10, offset: 2}}>
                        <Button variant="outline-secondary" type="submit" value="Add"
                                onClick={this.handleAddClick}>Add</Button>&nbsp;
                        <Button variant="outline-secondary" type="submit" value="Update"
                                onClick={this.handleUpdateClick}>Update</Button>
                    </Col>
                </Form.Group>
            </Form>

        );
    }
}

export default TaskForm;