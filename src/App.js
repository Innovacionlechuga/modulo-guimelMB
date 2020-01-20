import React, { Component } from 'react';
import logo from './logo.svg';
import 'nes.css/css/nes.css';

import './App.css';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: "",
            tasks: [],
            
        }
    }

    handleTaskChange = (event) => {
        this.setState({
            newTask: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let newTasks = this.state.tasks;
        newTasks.push(this.state.newTask);
        this.setState({
            newTask: "",
            tasks: newTasks
        })
    }
    
    render() {
        return (
            <div className="container">
                <h1 className="title">
                   Lista de tareas (To-Do)
               <span aria-label="emoji" role="img">🐞</span>
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newTask} onChange={this.handleTaskChange} type="text" className="new-task" />
                    <br />
                    <button className="nes-btn is-primary">Cuack</button>
                </form>
                
                {
                    this.state.tasks.map(task => 
                        <div className="task-container" key={task.toString()}>
                            <label>
                                <input type="checkbox"  className="nes-checkbox  task"/>
                                <span>{task}</span>
                            </label>
                        </div>
                        )
                }

            </div>
        );
    }
}

export default App;
