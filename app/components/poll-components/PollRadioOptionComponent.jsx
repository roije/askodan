import React, { Component } from 'react';
import { render } from 'react-dom';

class PollRadioOptionComponent extends Component{
    render() {
        return(
            <div className="poll-form-row">
                <p className="poll-option-paragraph">
                    <input name="radio-group" className="radiobutton-blue" type="radio" id={"radio" + this.props.index}  />
                    <label htmlFor={"radio" + this.props.index}>{this.props.text}</label>
                </p>
            </div>
        )
    }
}

export default PollRadioOptionComponent;