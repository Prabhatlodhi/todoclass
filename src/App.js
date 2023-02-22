import React, { Component } from "react";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import "./App.css";


export default class App extends Component {
  constructor(){
    super();
    this.state = {
        modalStatus: false,

        todos: [
          {
            id: 1,
            name: "Todo1",
            description: "Discription here",
            status: "In progress",
          },
          {
            id: 2,
            name: "Todo2",
            description: "Discription here",
            status: "In progress",
          },
          {
            id: 3,
            name: "Todo3",
            description: "Discription here",
            status: "In progress",
          },
          {
            id: 4,
            name: "Todo4",
            description: "Discription here",
            status: "In progress",
          },
          {
            id: 5,
            name: "Todo5",
            description: "Discription here",
            status: "In progress",
          },
        ],
        currentEditModal: {},
    };
}

//for disapper the modal
changeModalStatus = (status, id) => {
    this.setState({
        modalStatus: status,
        currentEditModal: this.state.todos.filter((ele)=> ele.id === id)[0],
    })
}

//for sending the data from modal to array
createTodo = (name, description, status)=>{
  this.state.todos.push({
    id: Date.now(),
    name:name,
    description: description,
    status: status
  })
  this.setState( {todos: this.state.todos});
}

deleteTodo = (id) => {
  this.setState({ todos : this.state.todos.filter((ele) => ele.id !== id )});
}

updateTodo = (name, description, status, id)=> {
  const temp = this.state.todos.map((ele)=>{
    if(ele.id === id){
      return{
        id,
        name,
        status,
        description,
      }
    }
    return ele;
  })
  this.setState({
    todos: temp
  })
}


  render() {
    return (
      <div className="ooverall">
        <Header changeStatus={this.changeModalStatus}/>
        <MainBody todos={this.state.todos} deleteTodo={this.deleteTodo} changeStatus={this.changeModalStatus}/>
        {
          this.state.modalStatus && (
            <Modal changeStatus={this.changeModalStatus} createTodo={this.createTodo} currentEditTodo={this.state.currentEditModal} updateTodo={this.updateTodo}/>
          )
        }
        <Footer />
      </div>
    );
  }
}
