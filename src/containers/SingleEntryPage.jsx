// @flow

import React from 'react';
import TopBar from '../views/TopBar.jsx';
import PageTitle from '../views/PageTitle.jsx';

const SingleEntryPage = () =>
  <div>
    <TopBar />
    <main id="main" className="main">
      <PageTitle value="Entry" />
      <div>Post page</div>
    </main>
  </div>;

export default SingleEntryPage;
