import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='headerComponent'>
        <h4>Todo App Using Class Componenet </h4>
        <button className='plusbtn' onClick={()=>this.props.changeStatus(true)}>+</button>
      </div> 
    )
  }
}
