import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: "33%",
        background: "#f1f1f1",
       
        height: "500px",
        
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function Form() {
  const classes = useStyles();
  const [value, setValue] = React.useState({
      name: "",
      email: "",
      message: ""
  });
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, [event.target.name]: event.target.value})
  };

  const handleSubmit = (e:any) => {
    setOpen(true)  
    
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        >
        
        <TextField
          
          name="name"
          label="Nombre y Apellido"
          multiline
          maxRows={4}
          type="text"
          onChange={handleChange}
          variant="outlined"
          
        />
        <TextField
         
          label="Email"
          placeholder="Indique su email"
          type="email"
          name="email"
          onChange={handleChange}
          multiline
          variant="outlined"
        
        />
        <TextField
          
          label="Mensaje"
          name="message"
          onChange={handleChange}
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
      <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Enviar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Mensaje enviado correctamente!
        </Alert>
      </Snackbar>
      </Grid>
    
    {/* <input type="text" name="name" required/>
     <input type="email" name="email" required/>
     <button type="submit">Send</button> */}
    </form>
  );
}