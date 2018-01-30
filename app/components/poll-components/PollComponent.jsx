import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    Link
} from 'react-router-dom'
//React components
import PollRadioOptionComponent from './PollRadioOptionComponent.jsx';
import PollCheckOptionComponent from './PollCheckOptionComponent.jsx';
import PollOptionsHolder from './PollOptionsHolderComponent.jsx';

class PollComponent extends Component {

    constructor(props) {
        super(props);

        this.onClickSaveVote = this.onClickSaveVote.bind(this);
        this.onShowResults = this.onShowResults.bind(this);
    }

    onClickSaveVote() {
        let multiple_answers = this.props.poll.multiple_answers;
        multiple_answers ? this.props.saveVotes() : this.props.saveVote();
        
    }

    onShowResults() {
        this.props.showResults();

        /** jQuery to smooth scroll to poll results div */
        if(this.props.showing) {
            $('html, body').animate({
                scrollTop: $('#poll-results').offset().top
            }, 'slow');
        }
    }

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
                            pollRadioOptionClicked={this.props.pollRadioOptionClicked}
                            pollCheckClicked={this.props.pollCheckClicked}
                        />
                        <div className="vote-button-container">
                            <button onClick={this.onClickSaveVote} className="btn green">Atkvøð</button>
                        </div>
                        <div className="show-results-button-container">
                            <Link onClick={this.onShowResults} to={`/poll/${this.props.slug}`}>Vís úrslit</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollComponent;