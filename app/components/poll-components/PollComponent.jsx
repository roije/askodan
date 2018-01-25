import React, { Component } from 'react';
import { render } from 'react-dom';

//React components
import PollRadioOptionComponent from './PollRadioOptionComponent.jsx';
import PollCheckOptionComponent from './PollCheckOptionComponent.jsx';
import PollOptionsHolder from './PollOptionsHolderComponent.jsx';

class PollComponent extends Component {
    render(){
        return(
            <div className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <div className="poll-form-row">
                            <div className="poll-title">
                                <h3>{this.props.poll.title}</h3>
                            </div>
                        </div>
                        <PollOptionsHolder 
                            pollOptions={this.props.poll.pollOptions}
                            multiple_answers = {this.props.poll.multiple_answers}
                        />
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