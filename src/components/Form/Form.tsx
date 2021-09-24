import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import axios from 'axios';


import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,

  Checkbox,
  Container,
  FormHelperText,
  Link,
  Typography
} from '@material-ui/core';

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
  const [open, setOpen] = React.useState<Boolean | any>(false);
  const [open2, setOpen2] = React.useState(false);

  const [textHelper, setTextHelper] = React.useState({
    name: "",
    email: "",
    message: ""
  });
 
  const [fields, setFields] = React.useState({
    name: false,
    email: false,
    message: false
  })

  const emailRegex =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, [event.target.name]: event.target.value})

      if(value.name !== ""){
        setFields({...fields, name: false})
        setTextHelper({...textHelper, name: ""})
      }

      if(!emailRegex.test(value.email)){
      setFields({...fields, email: true})
      setTextHelper({...textHelper, email: "email invalido"})
    
      }else if(emailRegex.test(value.email)){
      setFields({...fields, email: false})
      setTextHelper({...textHelper, email: ""})
    }
  
    if(value.message.length > 0){
      setFields({...fields, message: false})
      setTextHelper({...textHelper, message: ""})
    }
   console.log(fields.name)
  };

  const clearForm = () => {
    return (document.getElementById("myForm") as HTMLFormElement).reset() 
  }

  const handleSubmit = (e:any) => {
   
    if(value.name === ""){
      e.preventDefault()
      setOpen2(true);
      setFields({...fields, name: true})
      setTextHelper({...textHelper, name: "Porfavor ingrese su nombre"})
      return;
    }
    if(value.message === ""){
      e.preventDefault()
      setOpen2(true);
      setFields({...fields, message: true})
      setTextHelper({...textHelper, message: "Porfavor ingrese un mensaje"})
      return;
    } 
    if(value.message.length > 0 && value.name.length > 0) {
      setOpen2(true)  
      axios.post("http://localhost:3001/sendEmail", value)
      clearForm()

    }
    
      setOpen(true)
    
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    
  };


  // function functionEnviar(e:any) {
  //   e.preventDefault()
  //   axios.post("http://localhost:3001/sendEmail", value)

  //     setOpen2(true)
  //     if(open2){
  //       setOpen(true)
  //     }
    
  // }

  return (
    // <form className={classes.root} noValidate autoComplete="off" id="myForm" >
    //   <Grid
    //     container
    //     direction="column"
    //     justifyContent="space-around"
    //     alignItems="center"
    //     >
        
    //     <TextField
    //     required
    //     error={fields.name}
    //     helperText={textHelper.name}
    //       name="name"
    //       label="Nombre y Apellido"
    //       multiline
    //       maxRows={4}
    //       type="text"
    //       onChange={handleChange}
    //       variant="outlined"
    //     />

    //     <TextField
    //     required
    //       error={fields.email}
    //       helperText={textHelper.email}
    //       label="Email"
    //       placeholder="Indique su email"
    //       type="email"
    //       name="email"
    //       onChange={handleChange}
    //       multiline
    //       variant="outlined"
    //     />
        
    //     <TextField
    //     required
    //       error={fields.message}
    //       helperText={textHelper.message}
    //       label="Mensaje"
    //       name="message"
    //       onChange={handleChange}
    //       multiline
    //       rows={4}
          
    //       variant="outlined"
    //     />
    //   <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Enviar</Button>
    //   {open?<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    //   <Alert onClose={handleClose} severity={"success"}>
    //       Mensaje enviado correctamente!
    //     </Alert>
    //   </Snackbar>:open2?
    //   <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
    //   <Alert onClose={handleClose} severity={"warning"}>
    //     Porfavor complete todos los campos
    //   </Alert>
    //   </Snackbar>: false}
     


        
    //   </Grid>
    // </form>
    <Container maxWidth="sm">
    <Formik
            initialValues={{
              email: '',
              name: '',
              msj: '',
            }}
            validationSchema={
            Yup.object().shape({
              email: Yup.string().email('Debe ser un email valido').max(255).required('su email es requerido'),
              name: Yup.string().max(255).required('Nombre y apellido requeridos'),
              msj: Yup.string().max(255).required('No olvide dejar un mensaje'),
            })
          }
            onSubmit={(values, {resetForm}) => {
              resetForm()
              setOpen(true)
              clearForm()
              axios.post("http://localhost:3001/sendEmail", values)
              
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit} id="myForm">
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h3"
                  >
                    Envíame un email
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Completa los campos y contáctame...
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="Nombre y apellido"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
                />
               
                
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Indique su email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.msj && errors.msj)}
                  fullWidth
                  helperText={touched.msj && errors.msj}
                  label="Escriba un mensaje"
                  margin="normal"
                  name="msj"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.msj}
                  variant="outlined"
                  multiline
                  rows={4}
                />
                
                
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Enviar
                  </Button>
                  
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={"success"}>
                        Mensaje enviado correctamente!
                    </Alert>
                    </Snackbar>
                   
                </Box>
                
              </form>
            )}
          </Formik>
          </Container>
  );
}