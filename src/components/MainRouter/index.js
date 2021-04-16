import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink, withRouter } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import menuList from '../../type/menuConfig'

const MainRouter = (props) => {
  const [routeList, setRouteList] = useState([])

  useEffect(() => {
    let newList = menuList.reduce((pre, cur) => {
      !!cur.children ? pre = pre.concat(cur.children) : pre.push(cur)
      return pre
    }, [])
    setRouteList(newList)
  }, [])

  return (
    <Switch>
      {routeList.length > 0 && routeList.map((item, index) => {
        return <PrivateRoute path={item.path} exact component={item.components} key={index} />
      })}
      {routeList.length > 0 && <Redirect exact from='/' to={routeList[0].path} />}
    </Switch>
  )
}
export default withRouter(MainRouter)