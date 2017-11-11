import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import LoginComponent from '../../components/Login';
import Header from '../../components/Header';
class Login extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      checking: true
    };
  }

  // 点击登录
  loginHandle = (username) => {
    console.log(username);
  }

  render () {
    return (
      <div>
        <Header title="登录"/>
        {
          // 等待验证之后，再显示登录信息
          this.state.checking
          ? <div>{/* 等待中 */}</div>
          : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
        }
      </div>
    )
  }
}

export default Login;
