import React, { Component } from 'react';
import { render } from 'react-dom';

import PollComponent from '../components/poll-components/PollComponent.jsx';

//Redux connect
import { connect } from 'react-redux'

//Redux actions
import { fetchPoll } from '../redux/modules/poll/poll-actions';

class PollContainer extends Component{
    componentWillMount() {
        console.log('Fetch blabla poll with ID', this.props.match.params.id)
        console.log(this.props);
        this.props.fetchPoll();
    }

    render(){
        return (
            <div className="poll-container">
                <PollComponent 
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
    }
}

export default PollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollContainer)