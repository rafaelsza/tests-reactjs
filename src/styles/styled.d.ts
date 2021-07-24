import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      background: {
        default: string;
        paper: string;
      };
      table: {
        lineHeader: string;
        status: {
          background: {
            active: string;
            inactive: string;
          };
          text: {
            active: string;
            inactive: string;
          };
        };
      };
    };
  }
}
