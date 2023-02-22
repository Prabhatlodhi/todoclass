import React, { Component } from "react";
import Header from "./Components/Header";
import "./App.css";
import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
        modalStatus: false,
    };
}

changeModalStatus = (status) => {
    this.setState({
        modalStatus: status,
    })
}

  render() {
    return (
      <div className="ooverall">
        <Header changeStatus={this.changeModalStatus}/>
        <MainBody />
        {
          this.state.modalStatus && (
            <Modal changeStatus={this.changeModalStatus}/>
          )
        }
        <Footer />
      </div>
    );
  }
}
