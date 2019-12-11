import React, { Component } from 'react';
import './TaskListItem.scss';

class TaskListItem extends Component {
    render () {
        const { id, details, completed} = this.props.taskDetails;

        return (
            <li className="task-list-item">
                <p>{details}</p>
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={() => this.props.updateTask(id, "completed", !completed)}
                />
            </li>
        );
    }
}

export default TaskListItem;