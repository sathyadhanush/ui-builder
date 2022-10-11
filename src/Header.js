import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Buttons from './components/Buttons';
import Text from "./components/text";
import Colum  from './components/Colum';
import Row from './components/Row';
import Image from './components/Image';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  button:{
marginLeft:'20',
  },
  paper: {
    marginLeft:theme.spacing(40),
  
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function App() {
  const [age, setAge] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
       <Box>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={9} className={classes.image} >
      <Buttons/><Colum/><Row/><Text/><Image/>

      </Grid>
      
      <Grid item xs={12} sm={6} md={3} component={Paper} elevation={6} square>
        <div>
         
     <h4>TEXT</h4>
     <TextField
          id="outlined-textarea"
          placeholder="Placeholder"
          multiline
        />
        <hr/>
        <h4>Font</h4>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      
      </FormControl>
    <br></br>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    
      </FormControl>
      <br></br>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <TextField  />
       <hr/>
<h4>Colour</h4>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">color</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="color"
        onChange={handleChange}
      >
       
        <MenuItem value={10}>white</MenuItem>
        <MenuItem value={20}>blue</MenuItem>
        <MenuItem value={30}>red</MenuItem>
      </Select>
    </FormControl>
    <h4>Alignment</h4>
<FormatAlignCenterIcon/><FormatAlignRightIcon/><FormatAlignLeftIcon/>
    <h4>Max Lines</h4>
    <TextField></TextField>
    <hr/>
    <h4>Transform</h4>
    <hr/>
  <h4>Padding<AddIcon className={classes.paper} ></AddIcon> </h4>
  <hr/>
  <h4>Padding<MinimizeIcon className={classes.paper} ></MinimizeIcon> </h4>
  <hr/>
  <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Flexible"
          labelPlacement="end"
        />
        <hr/>
  <h4>Padding<AddIcon className={classes.paper} ></AddIcon> </h4>
  <hr/>
  <h4>Padding<AddIcon className={classes.paper} ></AddIcon> </h4>
  <hr/>
  <h4>Padding<AddIcon className={classes.paper} ></AddIcon> </h4>
  <hr/>
  <h4>Padding<AddIcon className={classes.paper} ></AddIcon> </h4>
  <hr/>
  <h4>Padding<AddIcon className={classes.paper} ></AddIcon> </h4> 
  <hr/>
  <h4>Padding<AddIcon className={classes.paper} ></AddIcon> </h4> 
  <hr/>
  <h4>Padding<AddIcon className={classes.paper} ></AddIcon> </h4> 
  </div>
      </Grid>
    </Grid>
    </Box>
    </div>
  );
}

export default App;