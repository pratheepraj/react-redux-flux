// @flow

import React from 'react';
import TopBar from '../views/TopBar.jsx';
import LoginForm from '../views/LoginForm.jsx';
import PageTitle from '../views/PageTitle.jsx';

const LoginPage = () =>
  <div>
    <TopBar />
    <main id="main" className="main">
      <PageTitle value="Login" />
      <LoginForm />
    </main>
  </div>;

export default LoginPage;
