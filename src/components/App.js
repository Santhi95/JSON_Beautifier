import * as React from 'react';
import { useEffect, useReducer } from 'react';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import AppDrawerWithBody from './AppDrawerWithBody';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

import '../styles/App.css'
import reducer from './reducer';

function App() {
  const defaultState = {
    "activeItem": "JSONBeautifier",
    "theme": "dark",
    "stringInput": "",
    "error": "",
    "copied": false,
    "downloading": false,
    "downloaded": false,
  }
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    setMode(state.theme);
  }, [state.theme])

  return (

    <div className='App'>
      <AppDrawerWithBody Apptitle="JSON Beautifier" state={state} dispatch={dispatch} />
      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ position : "absolute", bottom:"4px" ,right:"4px",textAlign:"right" }} >
        Implemented in React with
        <IconButton aria-label="love" size="small" sx={{ verticalAlign: 'bottom' }}>
          <FavoriteIcon fontSize="inherit" />
        </IconButton>
      </Typography>
    </div>

  );
}

export default App;
