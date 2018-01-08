import React, { Component } from 'react';
import { render } from 'react-dom';

import NewPollOptionFieldComponent from './NewPollOptionFieldComponent.jsx'

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
        
        let pollOptions = this.props.pollOptions.map(function(option, index){
            return <NewPollOptionFieldComponent updatePollOption={updatePollOption} number={option.number} value={option.value} key={ index } />;
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
                    </div>
                </div>
            </div>
        )
    }
}

export default PollFormComponent;