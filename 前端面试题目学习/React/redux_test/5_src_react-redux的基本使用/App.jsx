import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {
	render() {
		return (
			<div>
				{/* 给容器组件传递store */}
				{/* react-redux需要连接左右手，左手是UI组件，右手是store,store通过props进行传递 */}
				<Count store={store} />
			</div>
		)
	}
}
