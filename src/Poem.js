import React from "react";

class Poem extends React.Component {

  state = {
    read : true
  }

  handleClick = () => {
    this.setState({
      read : !this.state.read
    })
    console.log(this.state.read)
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- By {this.props.author}</strong>
        </p>
        <button onClick={this.handleClick}>
          {this.state.read === true ? "Mark as unread" : "Mark as Read"} 
          </button> <button onClick={this.props.clickHandler}>Like This Poem</button>
      </div>
    );
  }
}

export default Poem;
