import React from "react"
import { FormControl, Button } from "react-bootstrap"
import "react-bootstrap/"
import { getData } from "../utils"

export default class Interface extends React.Component {

    constructor (props) {
        super(props)
        this.state = {count: "", valid: false}
        this.setCount = this.setCount.bind(this)
    }

    setCount (event) {
        const valid = /^\d+$/.test(event.target.value)
        if (!valid) {
            this.setState({valid: false})
        } else {
            this.setState({count: parseInt(event.target.value), valid: true})
        }
    }

    render() {
        const { count, valid } = this.state
        const { addCount, clearAll } = this.props
        return (
            <div>
                <FormControl type="text" placeholder="Today's push-up count"
                    onChange={this.setCount}/>
                <Button disabled={!valid} onClick={(event) => addCount(event, count)}>Insert</Button>
                <Button onClick={clearAll} bsStyle="danger">Clear All</Button>
            </div>
        )
    }
}