import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Box,Container,Typography, Button} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
       background:"#f8feff",
       borderRadius: "8px",
       minHeight: "510px"
    },
    snack:{
      position: "relative",
      bottom: 0,
      top: 150
    }
    
  }),
);

export default function Form() {
  const classes = useStyles();
  const [open, setOpen] = React.useState<Boolean | any>(false);
  

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    
    <Container maxWidth="xs" className={classes.root}>
    <Formik
            initialValues={{
              email: '',
              name: '',
              msj: '',
            }}
            validationSchema={
            Yup.object().shape({
              name: Yup.string().max(100, "Que nombre tan largo...").required('Su nombre y apellido son requeridos'),
              email: Yup.string().email('Debe ser un email valido').max(100, "Tu gato está encima del teclado?").required('Su email es requerido'),
              msj: Yup.string().max(255, "Mucho texto.jpg").required('No olvide dejar un mensaje'),
            })
          }
            onSubmit={(values, {resetForm}) => {
              resetForm()
              setOpen(true)
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
              <form onSubmit={handleSubmit} >
                <Box sx={{ mb: 3 }} >
                  <Typography
                    color="textPrimary"
                    variant="h4"
                    style={{marginTop: "10px"}}
                  >
                    Envíame un email
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Completa todos los campos...
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
                  
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} className={classes.snack}>
                    <Alert onClose={handleClose} severity={"success"} >
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