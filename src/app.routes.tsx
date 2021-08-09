import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageMainUsers from './PageUsers/main';
import PanelUser from './PageUsers/panel';
import AppNotification from './ReactSpring/MessageHub';

import MenuMaterialUI from './MaterialUI';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <MenuMaterialUI />
      <Switch>
        <Route path="/" component={PageMainUsers} exact />
        <Route path="/profile" component={PanelUser} />
        <Route path="/notifications" component={AppNotification} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
