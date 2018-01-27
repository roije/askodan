import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    Route,
    Link
} from 'react-router-dom'

import PollComponent from '../components/poll-components/PollComponent.jsx';
import PollResultsContainer from './PollResultsContainer.jsx';

//Redux connect
import { connect } from 'react-redux'

//Redux actions
import { fetchPoll, pollRadioOptionClicked, saveVote } from '../redux/modules/poll/poll-actions';
import { showResults } from '../redux/modules/pollResults/pollResults-actions';

class PollContainer extends Component{
    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.props.fetchPoll(slug);
    }

    render(){
        let { showing } = this.props;
        let resultsComponent = showing ? <Route path="/poll/:slug" component={PollResultsContainer}/> : null;
        return (
            <div className="poll-container">
                <PollComponent 
                    poll={this.props.poll}
                    pollRadioOptionClicked={this.props.pollRadioOptionClicked}
                    saveVote={this.props.saveVote}
                    slug={this.props.match.params.slug}
                    showResults={this.props.showResults}
                /> 
                {resultsComponent}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPoll: (slug) => {
            dispatch(fetchPoll(slug))
        },
        pollRadioOptionClicked: (index) => {
            dispatch(pollRadioOptionClicked(index))
        },
        saveVote: () => {
            dispatch(saveVote())
        },
        showResults: () => {
            dispatch(showResults())
        }
    }
}

const mapStateToProps = state => {
    return {
        poll: state.pollReducer.poll,
        showing: state.pollResultsReducer.showing
    }
}

export default PollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollContainer)