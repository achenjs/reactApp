import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    // 监控变化
    this.setState({
      value: e.target.value
    })
  }

  handleKeyUp = (e) => {
    // 监控 enter 事件
    if (e.keyCode !== 13) {
      return
    }
    this.props.handleEnter(e.target.value)
  }

  render () {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="请输入关键字"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        value={this.state.value} />
      )
  }

  componentDidMount () {
    // 默认值
    this.setState({
      value: this.props.value || ''
    });
  }
}

export default SearchInput;