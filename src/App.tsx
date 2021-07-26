import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/themes/light';
import './styles/global.css';

import PageMainUsers from './PageUsers/main';
/* import PanelUser from './PageUsers/panel'; */
/* import MaterialUIPage from './MaterialUI'; */
/* import AppNotification from './ReactSpring/MessageHub'; */

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <PageMainUsers />
    </ThemeProvider>
  );
};
export default App;
