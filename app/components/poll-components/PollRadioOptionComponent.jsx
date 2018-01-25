import React, { Component } from 'react';
import { render } from 'react-dom';

class PollRadioOptionComponent extends Component{
    render() {
        return(
            <div className="poll-form-row">
                <p>
                    <input name="radio-group" type="radio" id={"radio" + this.props.index}  />
                    <label htmlFor={"radio" + this.props.index}>{this.props.text}</label>
                </p>
            </div>
        )
    }
}

export default PollRadioOptionComponent;