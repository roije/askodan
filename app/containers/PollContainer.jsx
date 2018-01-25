import React, { Component } from 'react';
import { render } from 'react-dom';

import PollComponent from '../components/poll-components/PollComponent.jsx';

//Redux connect
import { connect } from 'react-redux'

//Redux actions
import { fetchPoll } from '../redux/modules/poll/poll-actions';

class PollContainer extends Component{
    componentWillMount() {
        let slug = this.props.match.params.slug;
        this.props.fetchPoll(slug);
    }

    render(){
        return (
            <div className="poll-container">
                <PollComponent 
                    title={this.props.title}
                    pollOptions={this.props.pollOptions}
                /> 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPoll : (slug) => {
            dispatch(fetchPoll(slug))
        }
    }
}

const mapStateToProps = state => {
    return {
        title: state.pollReducer.title,
        pollOptions: state.pollReducer.pollOptions
    }
}

export default PollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollContainer)