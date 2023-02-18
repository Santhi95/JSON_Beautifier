import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import { makeStyles, useTheme, Typography } from '@material-ui/core'

// const useStyles = makeStyles(theme ({
//   buttonlayout: {
//     ,
//     [theme.breakpoints.only('sm')]: {
//        color: 'blue'
//     }
//   }
// })
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: { 
//     primary: {
//       light: '#757ce8',
//       main: '#282c34',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });


let theme = createTheme();
theme = responsiveFontSizes(theme);
export default theme