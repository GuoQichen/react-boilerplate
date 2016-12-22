import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'
import 'antd/dist/antd.less'

class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <DatePicker />
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))