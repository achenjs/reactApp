import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Detail extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      id: this.props.match.params.id
    }
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div>
        {this.state.id}
      </div>
    )
  }
}

export default Detail
