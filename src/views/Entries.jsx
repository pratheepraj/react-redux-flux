// @flow

import React, { Component } from 'react';
import Loading from './Loading.jsx';
import Entry from './Entry.jsx';
import Star from './Star.jsx';
import { connect } from 'react-redux';

const entries = [
  {
    _id: 1,
    date: '19th Sep 2017',
    body: 'Lorem ipsum dolor sit amet',
    feeling: 'angry',
    isStarred: true,
  },
  {
    _id: 2,
    date: '19th Sep 2017',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ius to nobis reiciendis modi to nobis reiciendis modi suscipit',
    feeling: 'happy',
    isStarred: false,
  },
];

class Entries extends Component {
  constructor() {
    super();

    this.onClickFilter = this.onClickFilter.bind(this);
  }

  onClickFilter: Function;

  state = {
    starredEntriesOnly: false,
  };

  onClickFilter() {
    this.setState({
      starredEntriesOnly: !this.state.starredEntriesOnly,
    });
  }

  render() {
    const entriesView = this.props.entries.map(entry => <Entry key={entry._id} {...entry} />);
    return (
      <div>
        <div className="entries">
          <div className={`filter ${this.state.starredEntriesOnly ? 'active' : ''}`}>
            <div className="for-text" onClick={this.onClickFilter}>
              <span>Show only starred entries</span>
            </div>
            <div className="for-star" onClick={this.onClickFilter}>
              <Star active={this.state.starredEntriesOnly} />
            </div>
          </div>

          {entriesView}
          <p>&nbsp;</p>
          <Loading />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    entries: state.entries,
  };
}

export default connect(mapStateToProps)(Entries);
