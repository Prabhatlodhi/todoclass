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
      title: "",
      desc: "",
      status: "",
    };
  }

  createTodo = () => {
    this.props.createTodo(this.state.title, this.state.desc, this.state.status);
    this.props.changeStatus(false);
  };

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
              onChange={(e) => this.setState({ title: e.target.value })}
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
              Add
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
