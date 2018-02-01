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
    removeVoteError,
    pollCheckClickedBeta} from '../redux/modules/poll/poll-actions';
import { showResults } from '../redux/modules/pollResults/pollResults-actions';

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
                    vote={this.props.vote}
                    votes={this.props.votes}
                    setVoteError={this.props.setVoteError}
                    removeVoteError={this.props.removeVoteError}
                    voteError={this.props.voteError}
                    pollCheckClickedBeta={this.props.pollCheckClickedBeta}
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
        pollCheckClickedBeta: (index) => {
            dispatch(pollCheckClickedBeta(index))
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