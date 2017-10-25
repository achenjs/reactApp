import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import SearchInput from '../SearchInput';

import './style.scss';

class SearchHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  handleBack = () => {
    const { history } = this.props.router;
    history.push('/');
  }
  
  handleEnter = (value) => {
    const { history } = this.props.router;
    history.push('/search/all/' + encodeURIComponent(value));
  }

  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.handleBack}>
          <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          &nbsp;
          <SearchInput
            value={this.props.keyword || ''}
            handleEnter={this.handleEnter}/>
        </div>
      </div>
    )
  }
}

export default SearchHeader;