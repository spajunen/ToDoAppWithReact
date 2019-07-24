import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class Task extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.quote.id}</td>
                <td>{this.props.quote.name}</td>
                <td>
                    <Button variant="outline-secondary" type="button" onClick={() => this.props.poista(this.props.quote.id)}>Done</Button>
                    {/*<button type="button" onClick={() => this.props.muuta(this.props.quote.id)}>Update</button>*/}
                </td>
            </tr>
        );
    }
}

export default Task;