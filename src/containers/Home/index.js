import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Gategory from '../../components/Gategory'
import Ad from './subpage/Ad'
import List from './subpage/List'
class Home extends Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Gategory />
        <div style={{height: '15px'}}>{/* 分割线 */}</div>
        <Ad />
        <List />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
