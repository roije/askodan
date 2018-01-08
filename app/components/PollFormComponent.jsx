import React, { Component } from 'react';
import { render } from 'react-dom';

class PollFormComponent extends Component {
    constructor(props) {
        super(props)

        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(e) {
        this.props.updateTitle(e.target.value);
    }

    render() {
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
                        <div className="poll-form-row">
                            <div className="input-field">
                                <input id="poll-option-1" type="text" />
                                <label for="poll-option-1">1. Svarmøguleiki</label>
                            </div>
                        </div>
                        <div className="poll-form-row">
                            <div className="input-field">
                                <input id="poll-option-1" type="text" />
                                <label for="poll-option-1">1. Svarmøguleiki</label>
                            </div>
                        </div>
                        <div className="poll-form-row">
                            <div className="input-field">
                                <input id="poll-option-1" type="text" />
                                <label for="poll-option-1">1. Svarmøguleiki</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollFormComponent;