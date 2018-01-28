import React, { Component } from 'react';
import { render } from 'react-dom';
//<p><input onClick={this.onCheckClick} type="checkbox" id={"check-" + index}/><label for={"check-" + index}>{option.text}</label></p>
class PollCheckOptionComponent extends Component{

    constructor(props) {
        super(props);

        this.onCheckClick = this.onCheckClick.bind(this);
    }

    onCheckClick(e) {
        console.log(e.target);
        let index = Number(e.target.id.split('-')[1]);
        console.log(index);
        //this.props.pollRadioOptionClicked(index);
    } 

    render() {
        return(
            <div className="poll-form-row">
                <p className="poll-option-paragraph">
                    <input onClick={this.onCheckClick} type="checkbox" className="filled-in checkbox-blue" id={"check-" + this.props.index}  />
                    <label htmlFor={"check-" + this.props.index}>{this.props.text}</label>
                </p>
            </div>
        )
    }
}

export default PollCheckOptionComponent;