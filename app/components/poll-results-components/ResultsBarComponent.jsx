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
                    <p>{this.props.title}</p>
                    <p>{this.props.percentage}% (Atkvøður: {this.props.votes})</p>
                </div>
                <div className="progress-bar-outer">
                    <Progress color={this.props.color} completed={this.props.percentage} />
                </div>
            </div>
        )
    }
}

export default ResultsBarComponent;