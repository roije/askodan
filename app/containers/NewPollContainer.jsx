import React, { Component } from 'react';
import { render } from 'react-dom';

//Components
import PollFormComponent from '../components/new-poll-components/PollFormComponent.jsx';

//Redux
import { connect } from 'react-redux'

//Redux actions
import { updateTitle, 
    updatePollOption, 
    lastFieldFocused, 
    savePoll, 
    removeField, 
    updateConfig, 
    setTitleError } from '../redux/modules/newPoll/newPoll-actions';


class NewPollContainer extends Component{
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div className="poll-container">
                <PollFormComponent
                    updateTitle={this.props.updateTitle}
                    title={this.props.title}
                    pollOptions={this.props.pollOptions}
                    updatePollOption={this.props.updatePollOption}
                    lastFieldFocused={this.props.lastFieldFocused}
                    savePoll={this.props.savePoll}
                    removeField={this.props.removeField}
                    pollConfigs={this.props.pollConfigs}
                    ipBrowserConfigSelected={this.props.ipBrowserConfigSelected}
                    updateIpBrowserConfig={this.props.updateIpBrowserConfig}
                    updateConfig={this.props.updateConfig}
                    history={this.props.history}
                    setTitleError={this.props.setTitleError}
                    titleError={this.props.titleError}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTitle: (value) => {
            dispatch(updateTitle(value))
        },
        updatePollOption: (index, value) => {
            dispatch(updatePollOption(index ,value))
        },
        lastFieldFocused: (index) => {
            dispatch(lastFieldFocused(index))
        },
        savePoll: (callback) => {
            dispatch(savePoll(callback))
        },
        removeField: (index, isLast) => {
            dispatch(removeField(index, isLast))
        },
        updateConfig: (configType, value) => {
            dispatch(updateConfig(configType, value))
        },
        setTitleError: () => {
            dispatch(setTitleError())
        }
    }
}

const mapStateToProps = state => {
    return {
        title: state.newPollReducer.title,
        pollOptions: state.newPollReducer.pollOptions,
        pollConfigs: state.newPollReducer.pollConfigs,
        ipBrowserConfigSelected: state.newPollReducer.ipBrowserConfigSelected,
        titleError: state.newPollReducer.titleError  
    }
}

export default NewPollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPollContainer)