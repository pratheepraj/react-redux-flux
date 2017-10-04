// @flow

import React, { Component } from 'react';
import Star from './Star.jsx';
import Emojis from './Emojis';

class EntryBox extends Component {
  constructor() {
    super();

    this.onClickStar = this.onClickStar.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmoji = this.onChangeEmoji.bind(this);
  }

  onClickStar: Function;
  onChangeText: Function;
  onSubmit: Function;
  onChangeEmoji: Function;

  state = {
    isStarred: false,
    feeling: '',
    body: '',
  };

  componentDidMount() {
    console.log('entrybox', this.props);
    const { isStarred, feeling, body } = this.props;
    if (isStarred) {
      this.setState({ isStarred });
    }
    if (feeling) {
      this.setState({ feeling });
    }
    if (body) {
      this.setState({ body });
    }
  }

  onClickStar() {
    this.setState({
      isStarred: !this.state.isStarred,
    });
  }

  onChangeText(
    event: SyntheticKeyboardEvent & {
      target: HTMLInputElement,
    },
  ) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmit(event: SyntheticMouseEvent) {
    event.preventDefault();
    console.log('submit', this.state);
  }

  onChangeEmoji(feeling: string) {
    this.setState({ feeling });
  }

  render() {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <div className="entry-box">
          <div className="card">
            <div className="card-section">
              <textarea
                placeholder="Write something..."
                rows="6"
                value={this.state.body}
                onChange={this.onChangeText}
              />

              <div className="options">
                <div className="feeling">
                  <Emojis onChangeEmoji={this.onChangeEmoji} selected={this.props.feeling} />
                </div>

                <div className="star-container" onClick={this.onClickStar}>
                  <Star active={this.state.isStarred} />
                </div>
              </div>

              <button className="button">Done</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default EntryBox;
