import React from 'react'

import FirebaseApp from '../../Services/FirebaseApp'

import { Typography, Button } from '@material-ui/core'

const Home = () => {
  return (
    <React.Fragment>
      <Typography variant='h2' align='center'>
        Lukan Rocks
      </Typography>
      <Button
        variant='outlined'
        color='secondary'
        onClick={() => FirebaseApp.auth().signOut()}>
        Sair
      </Button>
    </React.Fragment>
  )
}

export default Home
