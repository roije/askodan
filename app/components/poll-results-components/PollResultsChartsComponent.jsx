import React, { Component } from 'react';
import { render } from 'react-dom';

import colors from './colors'

import BarChartComponent from './BarChartComponent.jsx';
import PieChartComponent from './PieChartComponent.jsx';

class PollResultsChartsComponent extends Component {
    render() {
        let chart = this.props.activeTab === "pie" ? 
            <PieChartComponent results={this.props.results}/> : 
            <BarChartComponent results={this.props.results}/>

        return(
            <div>
                {chart}   
            </div>
        )
    }
}

export default PollResultsChartsComponent;