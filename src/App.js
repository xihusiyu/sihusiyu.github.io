import React, { Component } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";

 let marked = require("marked");

class App extends Component {
  state = {
    markdown: "",
  };

  updateMarkdown = function (markdown) {
    this.setState({ markdown });
  };
  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div className="App container">
        <div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Markdown Input</Form.Label>
            <Form.Control
              as="textarea"  rows={10}
              placeholder="Enter Markdown"
              value={markdown}
              onChange={(event) => this.updateMarkdown(event.target.value)}
            ></Form.Control>
          </Form.Group>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
      </div>
    );
  }
}

export default App;
