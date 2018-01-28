import React, { Component } from 'react';
import { render } from 'react-dom';

import  Progress from 'react-progressbar';

class ResultsBarComponent extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="results-bar">
                <div className="results-labels">
                    <p>Test</p>
                    <p>Percentage</p>
                </div>
                <div className="progress-bar-outer">
                    <Progress completed={this.props.percentage} />
                </div>
            </div>
        )
    }
}

export default ResultsBarComponent;