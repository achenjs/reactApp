import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from './util/localStore'
import { CITYNAME } from './config/localStore'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from './actions/userinfo'

class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      initDone: false
    }
  }

  render () {
    return (
      <div className="App">
        {
          this.state.initDone
          ? this.props.children
          : <div>正在加载...</div>
        }
      </div>
    )
  }

  componentDidMount = () => {
    //  获取位置信息
    let cityName = LocalStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '北京'
    }
    this.props.userInfoActions.update({
      cityName: cityName
    })

    //  更改状态
    this.timer = setTimeout(() => {
      this.setState({
        initDone: true
      })
    }, 100)
  }

  componentWillUnmount = () => {
    this.timer = null
  }
  
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
