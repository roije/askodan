import React, { Component } from 'react';
import { render } from 'react-dom';

import PollResultsComponent from '../components/poll-results-components/PollResultsComponent.jsx';

//Redux connect
import { connect } from 'react-redux'

//Redux actions
import { showResults, fetchPollResults, chartTabSelected } from '../redux/modules/pollResults/pollResults-actions.js';

class PollResultsContainer extends Component{
    constructor(props) {
        super(props);

        console.log(props)
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.props.fetchPollResults(slug);
        console.log('RESULTS CONTAINER DID MOUNT');
    }

    render() {

        return(
            <PollResultsComponent 
                results={this.props.results}
                chartTabSelected={this.props.chartTabSelected}
                activeTab={this.props.activeTab}
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
        }
    }
}

const mapStateToProps = state => {
    return {
        showing: state.pollResultsReducer.showing,
        results: state.pollResultsReducer.results,
        activeTab: state.pollResultsReducer.activeTab
    }
}

export default PollResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollResultsContainer)