import React from 'react'
import { Route, Redirect, } from 'react-router-dom'
import { Cookies } from '../../type/index.d';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !!Cookies.get('userdata')
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

export default PrivateRoute