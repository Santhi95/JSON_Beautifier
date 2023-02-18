import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/Theme';
import {
  Experimental_CssVarsProvider as CssVarsProvider
} from '@mui/material/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <CssVarsProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CssVarsProvider>
  // </React.StrictMode>
);


