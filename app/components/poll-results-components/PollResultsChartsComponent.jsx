import React, { Component } from 'react';
import { render } from 'react-dom';

class PollResultsChartsComponent extends Component {
    render() {
        return(
            <p>Chart here: {this.props.activeTab}</p>
        )
    }
}

export default PollResultsChartsComponent;