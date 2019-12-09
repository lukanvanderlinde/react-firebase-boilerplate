import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'

import FirebaseApp from '../../Services/FirebaseApp'
import { AuthContext } from '../../Services/Auth'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'

// TODO: REVIEW STYLE USAGE
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login = ({ history }) => {
  const classes = useStyles()

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await FirebaseApp.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        )
        history.push('/')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to='/' />
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleLogin} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Login
          </Button>
          <Grid container justify='center'>
            <Grid item>
              <Link href='/create-account' variant='body2'>
                Doesn't have an account? Create now
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default withRouter(Login)
