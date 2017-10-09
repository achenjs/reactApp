import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import '../static/css/number.scss'

const renshupic = require('../static/images/number/renshupic.png')

class Number extends Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let arr = []
    for (let i = 1; i <= 9; i++) {
      arr.push(<li className="key" key={i}>{i}</li>)
    }
    arr.push(<li className="key" key={0}>0</li>)
    arr.push(<li className="key delete" key={11}>{"清除"}</li>)

    return (
      <div className="number-bg">
        <div className="wrap">
          <div className="number-img"><img src={renshupic} width="141" height="125" alt="" /></div>
          {arr}
        </div>
      </div>
    )
  }
}

export default Number
