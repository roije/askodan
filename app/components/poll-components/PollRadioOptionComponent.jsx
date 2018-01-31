import React, { Component } from 'react';
import { render } from 'react-dom';

class PollRadioOptionComponent extends Component{
    constructor(props) {
        super(props);

        this.onRadioClick = this.onRadioClick.bind(this);
    }

    onRadioClick(e) {
        this.props.removeVoteError()
        let index = Number(e.target.id.split('-')[1]);
        this.props.pollRadioOptionClicked(index);
    } 

    render() {
        return(
            <div className="poll-form-row">
                <p className="poll-option-paragraph">
                    <input name="radio-group" className="radiobutton-blue" onClick={this.onRadioClick} type="radio" id={"radio-" + this.props.index}  />
                    <label htmlFor={"radio-" + this.props.index}>{this.props.text}</label>
                </p>
            </div>
        )
    }
}

export default PollRadioOptionComponent;