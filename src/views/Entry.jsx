import React, { Component } from 'react';
import Star from './Star.jsx';
import Emojis from './Emojis.jsx';
import EntryBox from './EntryBox';

class Entry extends Component {
  constructor() {
    super();
    this.onClickHeader = this.onClickHeader.bind(this);
  }

  onClickHeader: Function;

  state = {
    isExpanded: true,
  };

  onClickHeader() {
    console.log(this.state);
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    return (
      <div className="card">
        <div className={`entry ${this.state.isExpanded ? 'active' : ''}`}>
          <div className="card-section">
            <header onClick={this.onClickHeader}>
              <div className="for-date">
                <small>
                  {this.props.date}
                </small>
              </div>
              <div className="for-emoji">
                <Emojis selected={this.props.feeling} selectedOnly={true} />
              </div>
              <div className="for-star">
                <Star active={this.props.isStarred} />
              </div>
              <div className="snippet">
                {this.props.date}
              </div>
            </header>
            <article>
              <div>
                {this.props.body}
              </div>
            </article>
            <EntryBox {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;
