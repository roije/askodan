import React, { Component } from 'react';
import { render } from 'react-dom';

import PollComponent from '../components/poll-components/PollComponent.jsx';

//Redux connect
import { connect } from 'react-redux'

//Redux actions
import { fetchPoll, pollRadioOptionClicked, saveVote } from '../redux/modules/poll/poll-actions';

class PollContainer extends Component{
    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.props.fetchPoll(slug);
    }

    render(){
        console.log(this.props);
        return (
            <div className="poll-container">
                <PollComponent 
                    poll={this.props.poll}
                    pollRadioOptionClicked={this.props.pollRadioOptionClicked}
                    saveVote={this.props.saveVote}
                /> 
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
        }
    }
}

const mapStateToProps = state => {
    return {
        poll: state.pollReducer.poll
    }
}

export default PollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollContainer)