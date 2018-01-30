import React, { Component } from 'react';
import { render } from 'react-dom';

class NewPollOptionFieldComponent extends Component {
    constructor(props) {
        super(props)
        this.field = props.index + 1;
        this.onPollOptionChange = this.onPollOptionChange.bind(this);
        this.onFieldFocus = this.onFieldFocus.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onPollOptionChange(event){
        let index = Number(event.target.parentNode.id);
        let value = event.target.value;

        this.props.updatePollOption(index, value)
    }

    onFieldFocus(event) {
        var isLast = JSON.parse(event.target.parentNode.getAttribute('data-last'));
        var index = Number(event.target.parentNode.id);
        if(isLast) {
            this.props.lastFieldFocused(index);
            //console.log('Add new field')
        }
    }

    onRemove(event) {
        var index = Number(event.target.parentNode.id);
        var isLast = JSON.parse(event.target.parentNode.getAttribute('data-last'));
        this.props.removeField(index, isLast)
    }

    render() {

        //Condinationally render the remove button. Only if the poll option isn't the first or second field.
        let removeButton = null;
        if(this.props.index > 1) {
            removeButton = 
            <p className="remove-field-div"  id={this.props.index}  onClick={this.onRemove}>
                <i class="fa fa-times" aria-hidden="true"></i>
            </p>
        }
        //Minst til at fiksa feilin vid delete. Bruka index ístadin fyri fieldnumber
        return(
            <div className="poll-form-row">
                <div className="input-field" id={this.props.index} data-last={this.props.last} >
                    <input type="text" value={this.props.value} onChange={this.onPollOptionChange} onFocus={this.onFieldFocus}/>
                    <label htmlFor={this.props.index}>{this.field}. Svarmøguleiki</label>
                    {removeButton}
                </div>
            </div>
        )
    }
}

export default NewPollOptionFieldComponent;