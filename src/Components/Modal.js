import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentEditTodo ? this.props.currentEditTodo.name : "",
      desc: this.props.currentEditTodo ? this.props.currentEditTodo.description : "",
      status: this.props.currentEditTodo ? this.props.currentEditTodo.status : "",
    };
  }

  createTodo = () => {
    if(this.props.currentEditTodo){
        this.props.updateTodo(this.state.title, this.state.desc, this.state.status, this.props.currentEditTodo.id)
    }else{
        this.props.createTodo(this.state.title, this.state.desc, this.state.status);
        this.props.changeStatus(false);
    }
  };

  render() {
    return (
      <div className="create_todo">
        <ul>
          <li>
            {
                this.props.currentEditTodo ? 'Update To do ' : 'Create to do'
            }
          </li>
          <li>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              className="Textarea"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={ this.state.title }
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
              onChange={(e) => this.setState({ desc: e.target.value })}
              value={this.state.desc}
            />
          </li>

          <li>
            <FormControl fullWidth className="Textarea">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Status"
                onChange={(e) => this.setState({ status: e.target.value })}
                value={ this.state.status }
              >
                <MenuItem value={"Done"}>Done</MenuItem>
                <MenuItem value={"In Progress"}>In Progress</MenuItem>
                <MenuItem value={"Pending"}>Pending</MenuItem>
              </Select>
            </FormControl>
          </li>

          <li className="btncontainer">
            <Button
              variant="contained"
              color="success"
              className="allBtn"
              onClick={this.createTodo}
            >
            {
                this.props.currentEditTodo ? 'Update ' : 'Add'
            }
            </Button>
            <Button
              variant="contained"
              color="error"
              className="allBtn"
              onClick={() => this.props.changeStatus(false)}
            >
              Close
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}
