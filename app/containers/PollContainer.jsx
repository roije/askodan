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
import { fetchPoll, 
    pollRadioOptionClicked, 
    saveVote, 
    pollCheckClicked, 
    saveVotes,
    setVoteError,
    removeVoteError } from '../redux/modules/poll/poll-actions';
import { showResults, startScrollingResults } from '../redux/modules/pollResults/pollResults-actions';

class PollContainer extends Component{
    componentDidMount() {
        console.log(this.props)
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
                    saveVotes={this.props.saveVotes}
                    slug={this.props.match.params.slug}
                    showResults={this.props.showResults}
                    pollCheckClicked={this.props.pollCheckClicked}
                    showing={this.props.showing}
                    startScrollingResults={this.props.startScrollingResults}
                    vote={this.props.vote}
                    votes={this.props.votes}
                    setVoteError={this.props.setVoteError}
                    removeVoteError={this.props.removeVoteError}
                    voteError={this.props.voteError}
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
        saveVote: (callback) => {
            dispatch(saveVote(callback))
        },
        saveVotes: (callback) => {
            dispatch(saveVotes(callback))
        },
        showResults: () => {
            dispatch(showResults())
        },
        pollCheckClicked: (index) => {
            dispatch(pollCheckClicked(index))
        },
        startScrollingResults: () => {
            dispatch(startScrollingResults())
        },
        setVoteError: () => {
            dispatch(setVoteError())
        },
        removeVoteError: () => {
            dispatch(removeVoteError())
        }
    }
}

const mapStateToProps = state => {
    return {
        poll: state.pollReducer.poll,
        showing: state.pollResultsReducer.showing,
        vote: state.pollReducer.vote,
        votes: state.pollReducer.votes,
        voteError: state.pollReducer.voteError
    }
}

export default PollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollContainer)