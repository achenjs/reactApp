import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  handleClick = () => {
    this.props.router.go(-1);
  }

  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={this.handleClick}>
          <i className="icon-chevron-left"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header;