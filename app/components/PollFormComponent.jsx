import React, { Component } from 'react';
import { render } from 'react-dom';

import NewPollOptionFieldComponent from './NewPollOptionFieldComponent.jsx'
import PollOptionSelect from './PollOptionSelect.jsx';

class PollFormComponent extends Component {
    constructor(props) {
        super(props)
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(e) {
        this.props.updateTitle(e.target.value);
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
                            <PollOptionSelect 
                                    options={this.props.pollConfigs.ipBrowserConfigs} 
                                    ipBrowserConfigSelected={this.props.ipBrowserConfigSelected}
                                    updateBrowserIpConfig={updateIpBrowserConfig}
                                    updateConfig={this.props.updateConfig}
                            /> 
                            <div className="ip-browser-check">
                                <select class="browser-default">
                                    <option value="1" selected>IP tvífaldan ikki loyvd</option>
                                    <option value="2">Browser tvífaldan ikki loyvd</option>
                                    <option value="3">Eingin avmarking</option>
                                </select>
                            </div>
                            <div className="options-checboxes">
                                <p>
                                    <input type="checkbox" id="check1" />
                                    <label for="check1">Fleiri svar loyvd</label>
                                </p>
                                <p>
                                    <input type="checkbox" id="check2" />
                                    <label for="check2">Spam fyribyrging</label>
                                </p>
                                <p>
                                    <input type="checkbox" id="check3" />
                                    <label for="check3">Privat spurnarkanning</label>
                                </p>
                            </div>
                            
                        </div>
                        <div className="save-button-container">
                            <button className="btn green" onClick={this.props.savePoll}>Stovna spurnarkanning</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollFormComponent;