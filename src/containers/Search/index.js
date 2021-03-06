import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

class Search extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render () {
    const { params } = this.props.match;
    return (
      <div>
        <SearchHeader router={this.props} keyword={params.keyword} />
        <SearchList keyword={params.keyword} category={params.category} />
      </div>
    )
  }
}

export default Search;