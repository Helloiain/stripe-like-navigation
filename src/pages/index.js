import React, { Component } from "react";
import AnimatedNavbar from '../navbar'

export default class Index extends Component {
    state = { duration: 300 }

    render() {
        return (
            <>
                <AnimatedNavbar duration={this.state.duration} />
            </>
        )
    }
}
