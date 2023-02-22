import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default class Modal extends Component {
    
  render() {
    return (
      <div className="create_todo">
        <ul>
          <li>Create a Todo</li>
          <li>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              className="Textarea"
            />
          </li>
          <li>
            {" "}
            <TextField
              className="Textarea"
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
            />
          </li>
          
          <li>
            <FormControl fullWidth className="Textarea">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                 
                label="Age" 
              >
                <MenuItem value={'Done'}>Done</MenuItem>
                <MenuItem value={'In_Progress'}>In_Progress</MenuItem>
                <MenuItem value={'Pending'}>Pending</MenuItem>
              </Select>
            </FormControl>
          </li>

          <li className="btncontainer">
            <Button variant="contained" color="success" className="allBtn">
              Add
            </Button>
            <Button variant="contained" color="error" className="allBtn" onClick={()=>this.props.changeStatus(false)}>
              Close
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}
