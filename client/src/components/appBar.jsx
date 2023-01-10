import React from 'react';
import PropTypes from 'prop-types';
import { Typography, AppBar, Toolbar, FormControl, Button, TextField, Container } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Assignment, Phone, PhoneDisabled} from '@material-ui/icons';


import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: '10px',
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'space-between'
  },
  IconButton: {
    // flex: '1',
    // marginLeft: 'auto',
  },
  toolbarButtons: {
    marginLeft: 'auto',
    marginRight: '25px',
  },
}))

const MyAppBar = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        
        <ConnectWithoutContactIcon fontSize="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
/>

        <Typography variant="h5" align="center" 
        component="div">
          Expression Recognition/Peer-to-Peer Streaming
        </Typography>

        <div className={classes.toolbarButtons}>
          <IconButton edge="end" color="inherit"
            className={classes.IconButton} onClick={handleOpen}>
            <LiveHelpIcon />
          </IconButton>

          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Streaming App Manual and FAQ"}</DialogTitle>
            <DialogContent>
              <DialogTitle>{"Description"}</DialogTitle>
              <DialogContentText>
              This is a Peer‑to‑Peer video streaming App with facial expression recognition that stores data about users dominant facial expression in real time in addition to live video streaming!
              </DialogContentText>

              <DialogTitle>{"Datacollection"}</DialogTitle>
              <DialogContentText>
                The webapp does not record video data during streaming.
              </DialogContentText>
              <DialogContentText>
                The webapp does record facial expression data during streaming if the user presses the accept button.
              </DialogContentText>
              <DialogContentText>
                The backend serves as both a signalling server and as a MySQL server
              </DialogContentText>
              <DialogContentText>
                The webapp records users names and session data such as length, date, dominant facial expression, etc
              </DialogContentText>
                
              


              <DialogTitle>{"How to use"}</DialogTitle>
              <DialogContentText marginBottom={'20px'}>
                Input the name you want to be referenced by and then click the 'SET ID AND NAME' button.
              </DialogContentText>
              <Button variant="contained" color="primary">SET ID AND NAME</Button>
              <DialogContentText marginTop={'20px'}>
                Other users will be able to call with you by using the name you set
              </DialogContentText>
              <DialogContentText marginTop={'20px'} marginBottom={'20px'} startIcon={<PhoneDisabled fontSize='large' />}>
                You can call other users by putting their name in the input and clicking the call button 
              </DialogContentText>
              <Button variant="contained" color="primary" startIcon={<Phone fontSize='large' />}>CALL</Button>
              <DialogContentText marginTop={'20px'} marginBottom={'20px'}>
                Press the start button to start the facial expression recognition model. Upon closing the call with another user, your dominant facial expression is recorded and stored in the back end
              </DialogContentText>
              <Button variant="contained" color="primary">Start</Button>
            </DialogContent>
          </Dialog>

        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
