import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/themes/light';
import './styles/global.css';

import Routes from './app.routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Routes />
    </ThemeProvider>
  );
};
export default App;
