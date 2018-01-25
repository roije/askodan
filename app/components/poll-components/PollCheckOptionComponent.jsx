import React, { Component } from 'react';
import { render } from 'react-dom';
//<p><input onClick={this.onCheckClick} type="checkbox" id={"check-" + index}/><label for={"check-" + index}>{option.text}</label></p>
class PollCheckOptionComponent extends Component{
    render() {
        return(
            <div className="poll-form-row">
                <p>
                    <input type="checkbox" id={"check-" + this.props.index}  />
                    <label htmlFor={"check-" + this.props.index}>{this.props.text}</label>
                </p>
            </div>
        )
    }
}

export default PollCheckOptionComponent;