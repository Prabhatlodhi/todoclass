import React, { Component } from "react";

export default class MainBody extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          name: "Todo1",
          description: "Discription here",
          status: "In progress",
        },
        {
          id: 2,
          name: "2",
          description: "Discription here",
          status: "In progress",
        },
        {
          id: 3,
          name: "Todo1",
          description: "Discription here",
          status: "In progress",
        },
        {
          id: 4,
          name: "Todo1",
          description: "Discription here",
          status: "In progress",
        },
        {
          id: 1,
          name: "Todo1",
          description: "Discription here",
          status: "In progress",
        },
      ],
    };
  }
  render() {
    return (
      <div className="mainpage">
        {this.state.todos.map((element, index) => {
          return (
            <div className="singletodo">
              <h2 className="todohead">{element.name}</h2>
              <p className="discription">{element.description} </p>
              <h4 className="progresshere">{element.status}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
