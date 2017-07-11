import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

class RouteMap extends Component {
  render () {
    return (
      <HashRouter>
        <Route component={(props) => (
          <App {...props}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/list" component={List} />
              <Route path="/detail/:id" component={Detail} />
              <Route component={NotFound} />
            </Switch>
          </App>
        )} />
      </HashRouter>
    )
  }
}

export default RouteMap;
