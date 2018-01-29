import React, { Component } from 'react';
import { render } from 'react-dom';
class PollConfigSelectComponent extends Component{
    constructor(props) {
        super(props);
        this.onOptionChange = this.onOptionChange.bind(this);
    }

    onOptionChange(event) {
        let value = event.target.value;
        this.props.updateConfig("ip-browser", value);
 
    }

    render() {
        
        //Destructure props object
        let { options } = this.props;
        //Iterate over options array and populate optionElements array with HTML option elements.
        let optionElements = options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)
        
        return (
            <div className="ip-browser-check">
            <select onChange={this.onOptionChange} className="browser-default" value={this.props.ipBrowserConfigSelected}>
                {optionElements}
            </select>
        </div>
        )
    }
}

export default PollConfigSelectComponent;