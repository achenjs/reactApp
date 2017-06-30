import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import RouteMap from './router'
import configureStore from './store/configureStore'

import './static/css/reset.css'
import './static/css/common.scss'

//  创建 Redux 的 store 对象
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <RouteMap />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
