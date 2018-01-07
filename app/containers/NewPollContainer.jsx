import React, { Component } from 'react';
import { render } from 'react-dom';

class NewPollContainer extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="new-poll-container">
                <h1>áskoðan</h1>
            </div>
        )
    }
}

export default NewPollContainer;