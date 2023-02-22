import React, { Component } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default class MainBody extends Component {
   
  render() {
    return (
      <div className="mainpage">
        {this.props.todos.map((element, index) => {
          return (
            <div className="singletodo">
              <h2 className="todohead">{element.name}</h2>
              <p className="discription">{element.description} </p>
              <div className="deletebtn_rapper">
              <h4 className="progresshere">{element.status}</h4>
                <DeleteIcon onClick = { () => this.props.deleteTodo(element.id)} />
                <EditIcon/>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
