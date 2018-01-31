import React, { Component } from 'react';
import { render} from 'react-dom';

import ResultsBarsHolderComponent from './ResultsBarsHolderComponent.jsx';
import TabsComponent from './TabsComponent.jsx'
import PollResultsChartsComponent from './PollResultsChartsComponent.jsx';

class PollResultsComponent extends Component{
    
    constructor(props) {
        super(props)

        this.onRefresh = this.onRefresh.bind(this);
        this.scrollIntoView = this.scrollIntoView.bind(this);
    }

    scrollIntoView() {
        //Stop fixes weird lag after animation. 
        $('html, body').stop().animate({
            scrollTop: $(this.$resultsDiv).offset().top
        }, 'slow');
    }

    componentDidMount() {
        console.log(this.props)
        this.$resultsDiv  = $(this.resultsDiv);
        this.scrollIntoView()
    }

    componentWillReceiveProps() {
        if(this.props.scroll) {
            this.scrollIntoView()
            this.props.endScrollingResults();
        }
    }
  
    onRefresh() {
        this.props.fetchPollResults(this.props.slug);
    }

    render() {

        return(
            <div ref={el => this.resultsDiv = el} className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <ResultsBarsHolderComponent results={this.props.results}/>
                        <TabsComponent 
                            chartTabSelected={this.props.chartTabSelected}
                        />
                        <PollResultsChartsComponent 
                            activeTab={this.props.activeTab}
                            results={this.props.results}
                        />
                        <div className="refresh-button-container">
                            <button onClick={this.onRefresh} className="btn blue">Dagfør<i className={"fa fa-refresh " + (this.props.fetching ? "fa-spin" : '')} aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollResultsComponent;