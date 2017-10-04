// @flow

import React, { Component } from 'react';

class PageTitle extends Component {
  props: {
    value: string,
  };

  render() {
    return (
      <h2 style={{ margin: '30px 0' }}>
        {this.props.value}
      </h2>
    );
  }
}

export default PageTitle;
