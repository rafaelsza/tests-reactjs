import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/themes/light';
import './styles/global.css';

import PanelUser from './PageUsers/panel';

/* import PageMainUsers from './PageUsers/main'; */
/* import MaterialUIPage from './MaterialUI'; */
/* import AppNotification from './ReactSpring/MessageHub'; */

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <PanelUser />
    </ThemeProvider>
  );
};
export default App;
