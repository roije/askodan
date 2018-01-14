import React, { Component } from 'react';
import { render } from 'react-dom';

class NewPollOptionFieldComponent extends Component {
    constructor(props) {
        super(props)

        this.onPollOptionChange = this.onPollOptionChange.bind(this);
        this.onFieldFocus = this.onFieldFocus.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onPollOptionChange(event){
        let id = Number(event.target.id);
        let value = event.target.value;
        this.props.updatePollOption(id, value)
    }

    onFieldFocus(event) {
        var isLast = JSON.parse(event.target.getAttribute('data-last'));
        var id = Number(event.target.parentNode.id);
        if(isLast) {
            this.props.lastFieldFocused(id);
            //console.log('Add new field')
        }
    }

    onRemove(event) {
        var id = Number(event.target.parentNode.id);
        console.log('Remove', id);
    }

    render() {
        return(
            <div className="poll-form-row">
                <div className="input-field" id={this.props.number} >
                    <input type="text" value={this.props.value} onChange={this.onPollOptionChange} data-last={this.props.last} onFocus={this.onFieldFocus}/>
                    <label for={this.props.number}>{this.props.number}. Svarmøguleiki</label>
                    <p onClick={this.onRemove}>Remove</p>
                </div>
            </div>
        )
    }
}

export default NewPollOptionFieldComponent;