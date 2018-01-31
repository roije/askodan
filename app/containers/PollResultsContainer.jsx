import React, { Component } from 'react';
import { render } from 'react-dom';

import PollResultsComponent from '../components/poll-results-components/PollResultsComponent.jsx';

//Redux connect
import { connect } from 'react-redux'

//Redux actions
import { showResults, fetchPollResults, chartTabSelected, endScrollingResults } from '../redux/modules/pollResults/pollResults-actions.js';

class PollResultsContainer extends Component{
    constructor(props) {
        super(props);

        console.log(props)
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.props.fetchPollResults(slug);
        /*
        this.resultsDiv = $(this.resultsDiv);
        $('html, body').animate({
            scrollTop: $(this.resultsDiv).offset().top
        }, 'slow');
        */
    }

    render() {

        return(
            <PollResultsComponent 
                results={this.props.results}
                chartTabSelected={this.props.chartTabSelected}
                activeTab={this.props.activeTab}
                slug={this.props.match.params.slug}
                fetchPollResults={this.props.fetchPollResults}
                fetching={this.props.fetching}
                scroll={this.props.scroll}
                endScrollingResults={this.props.endScrollingResults}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPollResults: (slug) => {
            dispatch(fetchPollResults(slug))
        },
        chartTabSelected: (tab) => {
            dispatch(chartTabSelected(tab))
        },
        endScrollingResults: () => {
            dispatch(endScrollingResults())
        }
    }
}

const mapStateToProps = state => {
    return {
        showing: state.pollResultsReducer.showing,
        results: state.pollResultsReducer.results,
        activeTab: state.pollResultsReducer.activeTab,
        fetching: state.pollResultsReducer.fetching,
        scroll: state.pollResultsReducer.scroll
    }
}

export default PollResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollResultsContainer)