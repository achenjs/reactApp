import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class LoadMore extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  handleLoadMore = () => {
    this.props.loadMoreFn();
  }

  render () {
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoadingMore
          ? <span>加载中...</span>
          : <span onClick={this.handleLoadMore}>加载更多</span>
}
      </div>
    )
  }

  componentDidmount () {}

}

export default LoadMore;