import React from "react";

class Alert extends React.Component {

  render() {
    return (
        <div class="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
    );
  }
}

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div className="container-fluid">
          <Alert/>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="txt-input-name" className="col-md-4">
                Name:
              </label>
              <div className="col-md-8">
                <input type="text"
                       name="txt-input-name"
                       className="form-control col-md-4"
                       value={this.state.value}
                       onChange={this.handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <textarea value={this.state.value} onChange={this.handleChange}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default RegisterForm;