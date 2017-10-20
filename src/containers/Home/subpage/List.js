import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getListData } from '../../../fetch/home/home';

import ListComponent from '../../../components/List';

import './index.scss';

class List extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render () {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        <ListComponent />
      </div>
    )
  }

  componentDidMount () {
    
  }
}

export default List;