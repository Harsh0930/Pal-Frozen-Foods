import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';
import './styles/global.css';

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
  palette: {
    primary: { main: '#6a9a1b' },
    secondary: { main: '#2487ac' },
    text: { primary: '#17251d', secondary: '#68756d' },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
