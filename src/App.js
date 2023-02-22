import React, { Component } from "react";
import Header from "./Components/Header";
import "./App.css";
import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <MainBody />
        <Modal />
        <Footer />
      </div>
    );
  }
}
