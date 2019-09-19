import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [renderorder, setRenderorder] = React.useState('');
  const [data, setData] = React.useState('');

  function handleClickOpen() {
    setOpen(true);
    axios.get("/json")
    .then((res) => {
      let end = res.data.length - 1;
      setRenderorder(res.data[end].order)})
  }
  
  function handleClose() {
    setOpen(false);
  }
  //提交表單
  function handleSubmit() {
    setOpen(false);
    // console.log(data)
    axios.get(`/senddata?order=${data}`)
      .then(res => console.log(res.data))
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
            Order : {renderorder}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <TextField
                value={data}
                onChange={(e) => {setData(e.target.value)}}
                autoFocus
                margin="dense"
                name="order"
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
        </DialogActions>
      </Dialog>
    </div>
  );
}
