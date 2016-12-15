import React from 'react'
import ReactDOM from 'react-dom'

console.log('demo')
class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <h1>Hello</h1>
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))