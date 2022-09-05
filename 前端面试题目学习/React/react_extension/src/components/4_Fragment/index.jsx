import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
	render() {
		return (
			// 编译之后，Fragment会被丢掉，不会渲染成真实的DOM
			<Fragment key={1}>
				<input type="text"/>
				<input type="text"/>
			</Fragment>
				// <></>和上边的Fragment比较类似，不一样的点就是Fragment还可以传递key
				// <>
				// <input type="text"/>
				// <input type="text"/>
				// </>
		)
	}
}
