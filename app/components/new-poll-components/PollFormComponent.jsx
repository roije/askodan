import React, { Component } from 'react';
import { render } from 'react-dom';

import NewPollOptionFieldComponent from './NewPollOptionFieldComponent.jsx'
import PollConfigSelectComponent from './PollConfigSelectComponent.jsx';
import PollConfigCheckboxesComponent from './PollConfigCheckboxesComponent.jsx';
import ErrorMessageComponent from '../universal-components/ErrorMessageComponent.jsx'

class PollFormComponent extends Component {
    constructor(props) {
        super(props)
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSavePoll = this.onSavePoll.bind(this);
        this.onTitleFocusLeave = this.onTitleFocusLeave.bind(this);
    }

    componentDidMount() {
        this.titleInput.focus();
    }

    onTitleChange(e) {
        this.props.updateTitle(e.target.value);
    }

    onTitleFocusLeave(e) {
        if(this.props.title === "") {
            this.props.setTitleError();
            //this.titleInput.focus();
        }
    }
 
    onSavePoll(e) {
        if(this.props.title == "") {
            console.log('No title')
        } else {
            this.props.savePoll((data) => {
                //Redirect to new poll
                this.props.history.push('/poll/' + data.slug)
            });
        }
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

        let errorMessage = this.props.titleError ? <ErrorMessageComponent message="Vinarliga fyll teigin omanfyri"/> : null;

        return(
            <div className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <div className="poll-form-row">
                            <div className="input-field">
                                <input placeholder="Skriva spurningin her..." 
                                        value={this.props.title}  
                                        ref={(input) => { this.titleInput = input; }} 
                                        onChange={this.onTitleChange} id="field_poll_title" 
                                        type="text" 
                                        onBlur={this.onTitleFocusLeave}
                                        />
                                <label  htmlFor="field_poll_title">Spurningur</label>
                            </div>
                        </div>
                        <div>
                            {errorMessage}
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