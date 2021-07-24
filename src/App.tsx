import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/themes/light';
import './styles/global.css';

import PageMainUsers from './PageUsers/main';

/* import MaterialUIPage from './MaterialUI'; */
/* import AppNotification from './ReactSpring/MessageHub'; */

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageMainUsers />
    </ThemeProvider>
  );
};
export default App;
