import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageMainUsers from './PageUsers/main';
import PanelUser from './PageUsers/panel';
import AppNotification from './ReactSpring/MessageHub';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={PageMainUsers} exact />
      <Route path="/profile" component={PanelUser} />
      <Route path="/notifications" component={AppNotification} />
    </BrowserRouter>
  );
};

export default Routes;
