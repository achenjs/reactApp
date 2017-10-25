import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStore'

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

class City extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  handleChangeCity = (newCity) => {
    this.props.userInfoActions.update({
      cityName: newCity
    });
    LocalStore.setItem(CITYNAME, newCity);
    this.props.history.go(-1);
  }

  render () {
    return (
      <div>
        <Header title="选择城市" router={this.props.history} />
        <CurrentCity cityName={this.props.userInfo.cityName} />
        <CityList changeFn={this.handleChangeCity} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.userinfo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);