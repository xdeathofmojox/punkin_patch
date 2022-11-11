import React from 'react';

class CreateCharacterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        myers_briggs: "entp",
        enneagram: "", 
        media: ""
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
        console.log(this.state.name);
        console.log(this.state.myers_briggs);
        console.log(this.state.enneagram);
        console.log(this.state.media);
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Media
            <input
              name="media"
              type="text"
              value={this.state.media}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Myers Briggs:
            <select
              name="myers_briggs"
              value={this.state.myers_briggs}
              onChange={this.handleInputChange}>
                <option value="istj">ISTJ</option>
                <option value="isfj">ISFJ</option>
                <option value="infj">INFJ</option>
                <option value="intj">INTJ</option>
                <option value="istp">ISTP</option>
                <option value="isfp">ISFP</option>
                <option value="infp">INFP</option>
                <option value="intp">INTP</option>
                <option value="estj">ESTJ</option>
                <option value="esfj">ESFJ</option>
                <option value="enfj">ENFJ</option>
                <option value="entj">ENTJ</option>
                <option value="estp">ESTP</option>
                <option value="esfp">ESFP</option>
                <option value="enfp">ENFP</option>
                <option value="entp">ENTP</option>
            </select>
          </label>
          <br/>
          <label>
            Enneagram
            <input
              name="enneagram"
              type="text"
              value={this.state.enneagram}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Create" />
        </form>
      );
    }
  }

  export default CreateCharacterForm;