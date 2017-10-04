// @flow

import React from 'react';
import TopBar from '../views/TopBar.jsx';
import EntryBox from '../views/EntryBox.jsx';
import Entries from '../views/Entries.jsx';

const HomePage = () =>
  <div>
    <TopBar />
    <main id="main" className="main">
      <EntryBox />
      <p>&nbsp;</p>
      <Entries />
    </main>
  </div>;

export default HomePage;
