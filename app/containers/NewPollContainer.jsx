import React, { Component } from 'react';
import { render } from 'react-dom';

//Components
import TitleComponent from '../components/TitleComponent.jsx';
import PollFormComponent from '../components/PollFormComponent.jsx';

//Redux
import { connect } from 'react-redux'

//Redux actions
import { updateTitle, updatePollOption, lastFieldFocused, savePoll, removeField, updateIpBrowserConfig, updateConfig } from '../redux/modules/newPoll/newPoll-actions';


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
                    pollOptions={this.props.pollOptions}
                    updatePollOption={this.props.updatePollOption}
                    lastFieldFocused={this.props.lastFieldFocused}
                    savePoll={this.props.savePoll}
                    removeField={this.props.removeField}
                    pollConfigs={this.props.pollConfigs}
                    ipBrowserConfigSelected={this.props.ipBrowserConfigSelected}
                    updateIpBrowserConfig={this.props.updateIpBrowserConfig}
                    updateConfig={this.props.updateConfig}
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
        savePoll: () => {
            dispatch(savePoll())
        },
        removeField: (index, isLast) => {
            dispatch(removeField(index, isLast))
        },
        updateIpBrowserConfig: (value) => {
            dispatch(updateIpBrowserConfig(value))
        },
        updateConfig: (place) => {
            dispatch(updateConfig(place))
        }
    }
}

const mapStateToProps = state => {
    return {
        title: state.newPollReducer.title,
        pollOptions: state.newPollReducer.pollOptions,
        pollConfigs: state.newPollReducer.pollConfigs,
        ipBrowserConfigSelected: state.newPollReducer.ipBrowserConfigSelected   
    }
}

export default NewPollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPollContainer)