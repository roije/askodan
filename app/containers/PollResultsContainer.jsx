import React, { Component } from 'react';
import { render } from 'react-dom';

import PollResultsComponent from '../components/poll-results-components/PollResultsComponent.jsx';

//Redux connect
import { connect } from 'react-redux'

//Redux actions
import { showResults, fetchPollResults } from '../redux/modules/pollResults/pollResults-actions.js';

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
            <PollResultsComponent results={this.props.results}/>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPollResults: (slug) => {
            dispatch(fetchPollResults(slug))
        }
    }
}

const mapStateToProps = state => {
    return {
        showing: state.pollResultsReducer.showing,
        results: state.pollResultsReducer.results
    }
}

export default PollResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollResultsContainer)