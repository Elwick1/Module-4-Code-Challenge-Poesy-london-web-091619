import React from "react";

class NewPoemForm extends React.Component {

  state = {
      title : "",
      author : "",
      content : ""
    }

    handleTitleChange = (e) => {
      console.log(e.target.value)
      this.setState({
        title : e.target.value
      })
    }

    handleAuthorChange = (value) => {
      this.setState({
        author : value
      })
    }

    handleContentChange = (value) => {
      this.setState({
        content : value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log("Poem Submitted")
      this.props.addNewPoem(this.state)
    }


  render() {
    
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="Title" onChange={this.handleTitleChange}/>
        <input placeholder="Author" onChange={(e) => this.handleAuthorChange(e.target.value)}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} onChange={(e) => this.handleContentChange(e.target.value)}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
