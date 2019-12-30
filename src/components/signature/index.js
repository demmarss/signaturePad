import React from 'react'
import CreateSignature from './createSignature'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function Signature() {

    const classes = useStyles();


    

  return (
    <React.Fragment>
     <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <CreateSignature/>
        <Button variant="contained" color="primary">
        Save
      </Button>
      <Button variant="contained" color="secondary">
        Clear
      </Button>
      
      </Container>
    </div>
    </React.Fragment>
  );
}