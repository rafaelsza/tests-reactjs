import { createTheme } from '@material-ui/core/styles';
import { lighten, shade } from 'polished';

/* eslint-disable import/no-anonymous-default-export */

export default {
  title: 'light',

  colors: {
    primary: '#019562',
    secondary: '#00c4a6',
    error: '#c53030',

    background: '#ccc',
    backgroundComponents: '#eee',

    text: '#312e38',
    textSecondary: '#666360',
    textTertiary: '#fff',
    textError: '#fff',

    borderComponents: '#aaa',
    shadow: '#aaa',

    inputBackground: '#fff',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      light: lighten(0.2, '#019562'),
      main: '#019562',
      dark: shade(0.2, '#019562'),
      contrastText: '#fff',
    },
    secondary: {
      light: '#1abcc4',
      main: '#10959c',
      dark: '#027075',
      contrastText: '#000',
    },
    divider: '#fff',
  },
});
