import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = 'http://localhost:3000/poems'

class App extends React.Component {

  state = {
    poems : [],
    showForm : false
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(poems => this.setState({
      poems : poems
    }))
  }

  handleClick = () => {
    this.setState({
      showForm : !this.state.showForm
    })
    console.log(this.state.showForm)
  }


  addNewPoem = (poem) => {
    console.log(poem)
    const configObject = {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    },
    body : JSON.stringify(poem)
  }
  fetch(API, configObject)
  .then(res => res.json())
  .then(poem => this.setState({
    poems : [...this.state.poems, poem]
  }))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.handleClick()}>Show/hide new poem form</button>
          {this.state.showForm === true ? <NewPoemForm addNewPoem={this.addNewPoem}/> : false}
          {/* {false && <NewPoemForm />} */}
        </div> 
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
