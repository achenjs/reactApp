import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class List extends Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  hanldDetail () {
    this.props.history.push('/detail/2')
  }

  render () {
    return (
      <div onClick={this.hanldDetail.bind(this)}>
        List
      </div>
    )
  }
}

export default List
