import React, { Component } from 'react';
import { render } from 'react-dom';

//React components
import PollRadioOptionComponent from './PollRadioOptionComponent.jsx';

class PollComponent extends Component {
    render(){

        console.log('Props in poll component', this.props);
        let pollOptionsRadiobuttons = this.props.pollOptions.map((option, index) => {
            return <PollRadioOptionComponent 
                text={option.poll_value}
                index={index}
                poll_id={option.id}
            />
        })

        return(
            <div className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <div className="poll-form-row">
                            <div className="poll-title">
                                <h3>{this.props.title}</h3>
                            </div>
                        </div>
                        {pollOptionsRadiobuttons}
                        <div className="vote-button-container">
                            <button className="btn green">Atkvøð</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollComponent;