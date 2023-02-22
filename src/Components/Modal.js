import React, { Component } from 'react'
import TextField from '@mui/material/TextField';



export default class Modal extends Component {
  render() {
    return (
      <div className='create_todo'>
      <h2>Create a Todo</h2>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    )
  }
}
