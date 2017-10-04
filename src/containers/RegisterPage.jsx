// @flow

import React from 'react';
import TopBar from '../views/TopBar.jsx';
import RegisterForm from '../views/RegisterForm.jsx';
import PageTitle from '../views/PageTitle.jsx';

const RegisterPage = () =>
  <div>
    <TopBar />
    <main id="main" className="main">
      <PageTitle value="Sign Up for Free" />
      <RegisterForm />
    </main>
  </div>;

export default RegisterPage;
