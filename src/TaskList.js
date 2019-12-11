import React, { Component } from 'react';
import './TaskList.scss';
import taskListJson from './data/taskList.json';
import TaskListItem from './TaskListItem';
import ShowMoreButton from './ShowMoreButton';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            numberOfTasksToDisplay: 5
        };
    }

    componentDidMount() {
        const tasksList = JSON.parse(JSON.stringify(taskListJson));
        this.setState({
            tasks: tasksList.tasks
        });
    }

    updateTask = (taskId, attribute, newValue) => {
        let tasks = this.state.tasks;

        let updatedTaskList = tasks.map(task => {
            if (task.id === taskId) {
                task[attribute] = newValue;
            }
            return task;
        });

        this.setState({
            tasks: updatedTaskList
        });
    }

    handleShowMoreButtonClick = () => {
        let oldValue = this.state.numberOfTasksToDisplay;
        let newValue = oldValue + 5;

        this.setState({
            numberOfTasksToDisplay: newValue
        });
    }

    render () {
        let { tasks, numberOfTasksToDisplay} = this.state;

        return (
            <div className="task-list">
                <div className="list-header">
                    <p>Description</p>
                    <p>Completed</p>
                </div>
                <ul>
                    {
                        tasks
                            .filter((task, index) => index < numberOfTasksToDisplay)
                            .map(task => <TaskListItem key={task.id} taskDetails={task} updateTask={this.updateTask} />)
                    }
                </ul>
                {tasks.length > numberOfTasksToDisplay && (
                    <ShowMoreButton handleClick={this.handleShowMoreButtonClick} />
                )}
            </div>
        );
    }
}

export default TaskList;