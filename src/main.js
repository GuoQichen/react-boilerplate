import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'

function Welcome(props) {
	return (
		<div>
			<h1>Hello, {props.name}</h1>
			<DatePicker />	
		</div>
	)
}
Welcome.propTypes = {
	name: React.PropTypes.string
}

ReactDOM.render(<Welcome name="guoqichen" />, document.getElementById('root'))