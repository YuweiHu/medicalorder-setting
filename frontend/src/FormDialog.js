import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
// import { Input } from '@material-ui/core';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState('');

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  //提交表單
  function handleSubmit() {
    axios.get('/senddata')
      .then(res => console.log(res))
      console.log('Submit!');
  }

  return (
    <div id='btn-container'>
      <Button id='btn' variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.name}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ID : {props.id}<br/>
            Name : {props.name}<br/>
            Gender : {props.gender}<br/>
            Order : {data}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <form action='/senddata'>
            <TextField
                value={data}
                onChange={(e) => {setData(e.target.value)}}
                autoFocus
                margin="dense"
                name="order"
                id="order"
                label="Order"
                type="text"
                fullWidth
              />
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary" type='submit'>
                Submit
              </Button>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
}
