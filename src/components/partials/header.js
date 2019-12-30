import React, {useRef, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import SignaturePad from 'react-signature-canvas'
import './sigCanvas.css'

export default function Header() {
    const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url

    const classes = useStyles();

    const sigCanvas = useRef({}) // create a ref using react useRef hook
    /* a function that uses the canvas ref to clear the canvas 
      via a method given by react-signature-canvas */
    const clear = () => sigCanvas.current.clear()

    /* a function that uses the canvas ref to trim the canvas
    from white spaces via a method given by react-signature-canvas
    then outputs it on our browser console */
    const save =() => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));   

  return (
    <React.Fragment>
     <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Digital Signature Creator
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Just providing an easy way to prepare a digital signature'}
          {'Your signature is yours and can easily be downloaded and retrieved'}
        </Typography>
        <Typography variant="body1">Sign up for additional functions.</Typography>
        <Popup 
            modal 
            trigger={<Button variant ='outlined' color ='secondary'>Open Signature Pad</Button>}
            closeOnDocumentClick={false}
            >
                {close => (
                    <>
                        <SignaturePad
                            penColor='green'
                            ref={sigCanvas} // pass our ref into SignaturePad component
                            canvasProps={{
                                className: 'signatureCanvas'
                            }} 
                        />
                        <Button varient='outlined' color = 'primary' onClick={save}>Save</Button>
                        <Button varient='outlined' color = 'secondary' onClick={clear}>Clear</Button>
                        <Button varient='outlined' color = 'primary' onClick={close}>Close</Button>
                    </>
            
            )}
        </Popup>

        <br />
      <br />
      {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
      {imageURL ? (
        <img
          src={imageURL}
          alt="my signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: "150px"
          }}
        />
      ) : null}

      </Container>
    </div>
    </React.Fragment>
  );
}

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