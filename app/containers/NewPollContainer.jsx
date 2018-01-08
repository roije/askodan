import React, { Component } from 'react';
import { render } from 'react-dom';

//Components
import TitleComponent from '../components/TitleComponent.jsx';
import PollFormComponent from '../components/PollFormComponent.jsx';

//Redux
import { connect } from 'react-redux'

//Redux actions
import { updateTitle } from '../../redux/modules/newPoll/newPoll-actions';


class NewPollContainer extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="new-poll-container">
                <TitleComponent/>
                <PollFormComponent
                    updateTitle={this.props.updateTitle}
                    title={this.props.title}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTitle: (value) => {
            dispatch(updateTitle(value))
        }
    }
}

const mapStateToProps = state => {
    return {
        title: state.newPollReducer.title
    }
}

export default NewPollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPollContainer)