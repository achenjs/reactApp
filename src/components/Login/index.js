import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Login extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render () {
    return (
      <div>
        Login
      </div>
    )
  }

}

export default Login;