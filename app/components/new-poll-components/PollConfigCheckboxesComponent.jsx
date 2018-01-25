import React, { Component } from 'react';
import { render } from 'react-dom';

class PollConfigCheckboxesComponent extends Component{
    constructor(props) {
        super(props);
        
        this.onCheckClick = this.onCheckClick.bind(this);
    }

    onCheckClick(e) {
        var index = Number(e.target.id.split("-")[1]);
        this.props.updateConfig("general-config", index);
    }

    render() {
        let { options } = this.props;
        const configCheckboxes = options.map((option, index) => <p><input onClick={this.onCheckClick} type="checkbox" id={"check-" + index}/><label htmlFor={"check-" + index}>{option.text}</label></p>)
        console.log(configCheckboxes);
        return (
            <div className="options-checboxes">
                {configCheckboxes}
            </div>
        )
    }
}

export default PollConfigCheckboxesComponent;