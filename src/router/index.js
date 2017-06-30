import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

class RouteMap extends Component {
  updateHandle () {
    console.log('每次router变化之后触发')
  }

  render () {
    return (
      <Router>
        <Route path="/" component={(props) => (
          <App {...props}>
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/list" component={List} />
              <Route path="/detail/:id" component={Detail} />
              <Route component={NotFound} />
            </Switch>
          </App>
        )} />
      </Router>
    )
  }
}

export default RouteMap;
