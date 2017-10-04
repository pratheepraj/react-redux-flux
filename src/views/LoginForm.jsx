// @flow

import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div className="card">
        <div className="card-section">
          <form onSubmit={evt => this.onSubmit(evt)}>
            <div>
              <label>Username</label>
              <input
                name="username"
                type="text"
                onChange={evt => this.onChange(evt, 'username')}
                value={this.state.username}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                name="password"
                type="text"
                onChange={evt => this.onChange(evt, 'password')}
                value={this.state.password}
              />
            </div>
            <div>
              <button className="button">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onChange(event: SyntheticKeyboardEvent & { target: HTMLInputElement }, field: string) {
    this.setState({ [field]: event.target.value });
  }

  onSubmit(event: SyntheticKeyboardEvent) {
    event.preventDefault();
    console.log('submit');
  }
}

export default LoginForm;
