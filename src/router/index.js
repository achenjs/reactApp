import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from '../containers/Home';
import City from '../containers/City';                            //  选择城市页面
import Search from '../containers/Search';                        //  搜索页面
import NotFound from '../containers/NotFound';                    //  404

class RouteMap extends Component {
  render () {
    return (
      <HashRouter>
        <Route component={(props) => (
          <App {...props}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/city" component={City} />
              <Route path="/search/:category?/:keyword?" component={Search} />
              <Route component={NotFound} />
            </Switch>
          </App>
        )} />
      </HashRouter>
    )
  }
}

export default RouteMap;
