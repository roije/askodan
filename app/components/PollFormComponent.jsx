import React, { Component } from 'react';
import { render } from 'react-dom';

import NewPollOptionFieldComponent from './NewPollOptionFieldComponent.jsx'
import PollConfigSelectComponent from './PollConfigSelectComponent.jsx';
import PollConfigCheckboxesComponent from './PollConfigCheckboxesComponent.jsx';

class PollFormComponent extends Component {
    constructor(props) {
        super(props)
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSavePoll = this.onSavePoll.bind(this);
    }

    onTitleChange(e) {
        this.props.updateTitle(e.target.value);
    }

    onSavePoll(e) {
        this.props.savePoll((data) => {
            //Redirect to new poll
            this.props.history.push('/poll')
        });
    }
    
    render() {
        let updatePollOption = this.props.updatePollOption;
        let lastFieldFocused = this.props.lastFieldFocused;
        let removeField = this.props.removeField;
        let updateIpBrowserConfig = this.props.updateIpBrowserConfig;
        
        let pollOptions = this.props.pollOptions.map(function(option, index){
            return <NewPollOptionFieldComponent 
                    updatePollOption={updatePollOption} 
                    lastFieldFocused={lastFieldFocused} 
                    removeField={removeField}
                    value={option.value} 
                    last={option.last} 
                    index={index}
                    key={ index } />;
        })

        return(
            <div className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <div className="poll-form-row">
                            <div className="input-field">
                                <input placeholder="Skriva spurningin her..." value={this.props.title} onChange={this.onTitleChange} id="field_poll_title" type="text" />
                                <label for="field_poll_title">Spurningur</label>
                            </div>
                        </div>
                        {pollOptions}
                        <div className="options-container">
                            <PollConfigSelectComponent 
                                    options={this.props.pollConfigs.ipBrowserConfigs} 
                                    ipBrowserConfigSelected={this.props.ipBrowserConfigSelected}
                                    updateBrowserIpConfig={updateIpBrowserConfig}
                                    updateConfig={this.props.updateConfig}
                            /> 
                            <PollConfigCheckboxesComponent 
                                options={this.props.pollConfigs.generalVotingConfigs}
                                updateConfig={this.props.updateConfig}/>
                        </div>
                        <div className="save-button-container">
                            <button className="btn green" onClick={this.onSavePoll}>Stovna spurnarkanning</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollFormComponent;