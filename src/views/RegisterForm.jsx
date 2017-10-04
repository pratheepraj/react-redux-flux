// @flow

import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange: Function;
  onSubmit: Function;

  state = {
    name: 'pratheep',
    email: '',
    username: '',
    password: '',
  };

  render() {
    return (
      <div className="card">
        <div className="card-section">
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Name</label>
              <input name="name" type="text" onChange={this.onChange} value={this.state.name} />
            </div>
            <div>
              <label>Email</label>
              <input name="email" type="text" onChange={this.onChange} value={this.state.email} />
            </div>
            <div>
              <label>Username</label>
              <input name="username" type="text" onChange={this.onChange} value={this.state.username} />
            </div>
            <div>
              <label>Password</label>
              <input name="password" type="password" onChange={this.onChange} value={this.state.password} />
            </div>
            <div>
              <button className="button">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onChange(event: SyntheticKeyboardEvent & { target: HTMLInputElement }, field: string) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event: SyntheticKeyboardEvent) {
    event.preventDefault();
  }
}

export default RegisterForm;
