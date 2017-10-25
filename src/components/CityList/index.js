import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class CityList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      CityList: [{
        CityName: '北京',
        id: 1
      }, {
        CityName: '上海',
        id: 2
      }, {
        CityName: '杭州',
        id: 3
      }, {
        CityName: '广州',
        id: 4
      }, {
        CityName: '苏州',
        id: 5
      }, {
        CityName: '深圳',
        id: 6
      }, {
        CityName: '郴州',
        id: 7
      }]
    };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  handleClick = (cityName) => {
    const changeFn = this.props.changeFn;
    changeFn(cityName);
  }

  handleRenderList = () => {
    const CityList = this.state.CityList;
    const CityElement = [];
    for (let Item of CityList) {
      CityElement.push(
        <li key={Item.id}>
          <span onClick={this.handleClick.bind(this, Item.CityName)}>{Item.CityName}</span>
        </li>
      )
    };
    return CityElement;
  }

  render () {
    return (
      <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
          {this.handleRenderList()}
        </ul>        
      </div>
    )
  }
}

export default CityList;