import { createTheme } from '@material-ui/core/styles';

/* eslint-disable import/no-anonymous-default-export */

export const light = {
  title: 'light',

  palette: {
    primary: {
      light: '#3aae6d',
      main: '#2e8b57',
      dark: '#256f46',
      contrastText: '#f7f7f7',
    },
    secondary: {
      light: '#d3d3d3',
      main: '#a9a9a9',
      dark: '#878787',
      contrastText: '#565656',
    },
    background: {
      default: '#f7f7f7',
      paper: '#fff',
    },
    table: {
      lineHeader: '#f7f7f7',
      status: {
        background: {
          active: '#d1ead1',
          inactive: '#f5cfcc',
        },
        text: {
          active: '#7cbc7f',
          inactive: '#c56e67',
        },
      },
    },
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      light: '#3aae6d',
      main: '#2e8b57',
      dark: '#256f46',
      contrastText: '#f7f7f7',
    },
    secondary: {
      light: '#d3d3d3',
      main: '#a9a9a9',
      dark: '#878787',
      contrastText: '#565656',
    },
    background: {
      default: '#f7f7f7',
      paper: '#fff',
    },
  },
});
