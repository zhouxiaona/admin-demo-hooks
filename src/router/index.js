import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Login from '../page/Login'
import PageLayout from '../page/PageLayout'
import {
    Spin,
} from 'antd';

const AppRouter = () => {
    return (
        <Router>
            <Suspense>
                <Switch>
                    <Route path='/login' exact component={Login} />
                    <PrivateRoute path='/' component={PageLayout} />
                </Switch>
            </Suspense>
        </Router >
    )
}

export default AppRouter