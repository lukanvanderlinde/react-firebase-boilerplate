import React from 'react'

// Libraries
import 'typeface-roboto'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Custom Components
import { AuthProvider } from './Services/Auth'
import PrivateRoute from './Components/PrivateRoute'

// Routes
import { Home, Login, CreateAccount, NotFound } from './Routes'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/create-account' component={CreateAccount} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
