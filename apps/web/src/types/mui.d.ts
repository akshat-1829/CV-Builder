import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows?: {
      card: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      card?: string;
    };
  }
}
