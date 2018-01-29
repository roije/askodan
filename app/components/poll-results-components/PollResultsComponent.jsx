import React, { Component } from 'react';
import { render} from 'react-dom';

import ResultsBarsHolderComponent from './ResultsBarsHolderComponent.jsx';
import TabsComponent from './TabsComponent.jsx'
import PollResultsChartsComponent from './PollResultsChartsComponent.jsx';

class PollResultsComponent extends Component{
    
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <ResultsBarsHolderComponent results={this.props.results}/>
                        <TabsComponent 
                            chartTabSelected={this.props.chartTabSelected}
                        />
                        <PollResultsChartsComponent activeTab={this.props.activeTab}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollResultsComponent;