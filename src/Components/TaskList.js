import React, {Component} from 'react';
import Task from "./Task";
import Table from "react-bootstrap/Table";

class TaskList extends Component {
    render () {
        var quoteNodes = this.props.quote.map((quote) =>
            <Task poista={this.props.poista} quote={quote} key={quote.id}/>);
        return (
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Done?</th>
                </tr>
                </thead>
                <tbody>{quoteNodes}</tbody>
            </Table>
        );
    }
}

export default TaskList;