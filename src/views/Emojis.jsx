// @flow

import React, { Component } from 'react';
import happySrc from '../media/happy.png';
import angrySrc from '../media/angry.png';
import sadSrc from '../media/sad.png';
import laughingSrc from '../media/laughing.png';
import loveSrc from '../media/love.png';
import astonishedSrc from '../media/astonished.png';

const feelingTypes = ['happy', 'laughing', 'love', 'astonished', 'sad', 'angry'];

const emojiSrc = {
  happy: happySrc,
  love: loveSrc,
  sad: sadSrc,
  angry: angrySrc,
  astonished: astonishedSrc,
  laughing: laughingSrc,
};

class Emojis extends Component {
  constructor() {
    super();

    this.onClickEmoji = this.onClickEmoji.bind(this);
  }

  onClickEmoji: Function;

  state = {
    selected: '',
  };

  componentDidMount() {
    if (this.props.selected) {
      this.setState({ selected: this.props.selected });
    }
  }

  onClickEmoji(
    event: SyntheticMouseEvent & {
      target: HTMLImageElement & {
        getAttribute: Function,
      },
    },
  ) {
    const selectedType: string = event.target.getAttribute('data-type');
    this.setState({
      selected: selectedType,
    });

    if (this.props.onChangeEmoji) {
      this.props.onChangeEmoji(selectedType);
    }
  }

  render() {
    if (this.props.selectedOnly) {
      return (
        <img src={emojiSrc[this.props.selected]} className="emoji" alt={`Emoji of feeling ${this.props.selected}`} />
      );
    }

    const emojis = feelingTypes.map((feeling, i) => {
      const active = feeling === this.state.selected ? 'active' : '';
      return (
        <img
          key={i}
          className={`emoji selectable ${active}`}
          data-type={feeling}
          src={emojiSrc[feeling]}
          alt={`Emoji of feeling ${feeling}`}
          onClick={this.onClickEmoji}
        />
      );
    });

    return (
      <span className="emojis">
        {emojis}
      </span>
    );
  }
}

export default Emojis;
