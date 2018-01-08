import React, { Component } from 'react';
import { render } from 'react-dom';

class NewPollOptionFieldComponent extends Component {
    constructor(props) {
        super(props)

        this.onPollOptionChange = this.onPollOptionChange.bind(this);
    }

    onPollOptionChange(event){
        let id = Number(event.target.id);
        let value = event.target.value;
        this.props.updatePollOption(id, value)

    }

    render() {
        return(
            <div className="poll-form-row">
                <div className="input-field">
                    <input id={this.props.number} type="text" value={this.props.value} onChange={this.onPollOptionChange}/>
                    <label for={this.props.number}>{this.props.number}. Svarmøguleiki</label>
                </div>
            </div>
        )
    }
}

export default NewPollOptionFieldComponent;