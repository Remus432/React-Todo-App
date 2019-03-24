import React, { Component } from "react";
import Task from "./components/Task";
import "./style.css";
import uuid from "uuid";

class App extends Component {
  constructor() {
    this.state = {
      word: "",
      tasks: []
    }
  }

  addWord = (e) => {
  
    this.setState({ word: e.target.value });
  }

  addTask = (e) => {
    if(this.state.word !== "") {
      this.setState({ 
        tasks: [...this.state.tasks, { id: uuid.v4(), title: this.state.word, isCompleted: false}]
        });
    }
  
    this.setState({word : ""});
  }


  delTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id)})
  }

  render() {
    return (
      <div className="container">
        <div className="search">
          <input type="text" onChange={this.addWord} value={this.state.word}/>
          <button className="btn" onClick={this.addTask}>Add</button>
        </div>
        <ul className="task--list">
          {
            this.state.tasks.map(task => <Task task={task} delTask={this.delTask}/>)
          }
        </ul>
      </div>
    )
  }
}


export default App;