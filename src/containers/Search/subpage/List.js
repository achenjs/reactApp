import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { connect } from 'react-redux';

import ListCompoent from '../../../components/List';

import { getSearchData } from '../../../fetch/search/search';

const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 0
};

class SearchList extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = initialState;
  }

  render () {
    const { data } = this.state;
    return (
      <div>
        {
          data.length
          ? <ListCompoent data={this.state.data} />
          : <div>{/* 加载中 */}</div>
        }
      </div>
    )
  }

  componentDidMount = () => {
    this.loadFirstPageData();
  }
  
  loadFirstPageData = () => {
    const cityName = this.props.userinfo.cityName;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(0, cityName, category, keyword);
    this.handleResult(result);
  }

  handleResult = (result) => {
    // 增加 page 计数
    const page = this.state.page;
    this.setState({
        page: page + 1
    })

    result.then(res => {
      return res.json()
    }).then(json => {
      const hasMore = json.hasMore
      const data = json.data

      this.setState({
        hasMore: hasMore,
        // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
        data: this.state.data.concat(data)
      })
    }).catch(ex => {
      console.error('搜索页获取数据报错, ', ex.message)
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { keyword, category } = this.props
    if (keyword === prevProps.keyword && category === prevProps.category) {
      return false;
    };
    this.loadFirstPageData();
  }
  
}

const mapStateToProps = (state, ownProps) => {
  return {
    userinfo: state.userinfo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SearchList);