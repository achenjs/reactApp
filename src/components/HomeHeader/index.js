import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'

import './index.scss'

class HomeHeader extends Component {
  constructor (props, context) {
    super(props, context)
    console.log(this.props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  handleClick = () => {
    console.log(this.props)
    this.props.userInfoActions.update({
      cityName: '深圳'
    })
  }

  render () {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <span onClick={this.handleClick}>{this.props.cityName}</span>
          &nbsp;
          <i className="icon-angle-down"></i>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <input type="text" placeholder="请输入关键字"/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHeader)