import React, { Component } from 'react';
import { render} from 'react-dom';

import ResultsBarsHolderComponent from './ResultsBarsHolderComponent.jsx';
import TabsComponent from './TabsComponent.jsx'
import PollResultsChartsComponent from './PollResultsChartsComponent.jsx';

class PollResultsComponent extends Component{
    
    constructor(props) {
        super(props)

        this.onRefresh = this.onRefresh.bind(this);
    }

    onRefresh() {
        this.props.fetchPollResults(this.props.slug);
    }

    render() {

        return(
            <div id="poll-results" className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <div className="refresh-button-container">
                            <button onClick={this.onRefresh} className="btn blue">Dagfør<i className={"fa fa-refresh " + (this.props.fetching ? "fa-spin" : '')} aria-hidden="true"></i></button>
                        </div>
                        <ResultsBarsHolderComponent results={this.props.results}/>
                        <TabsComponent 
                            chartTabSelected={this.props.chartTabSelected}
                        />
                        <PollResultsChartsComponent 
                            activeTab={this.props.activeTab}
                            results={this.props.results}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PollResultsComponent;