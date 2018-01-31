import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {
    Link
} from 'react-router-dom'
//React components
import PollRadioOptionComponent from './PollRadioOptionComponent.jsx';
import PollCheckOptionComponent from './PollCheckOptionComponent.jsx';
import PollOptionsHolder from './PollOptionsHolderComponent.jsx';
import PollResultsComponent from '../poll-results-components/PollResultsComponent.jsx';
import ErrorMessageComponent from '../universal-components/ErrorMessageComponent.jsx';

class PollComponent extends Component {

    constructor(props) {
        super(props);

        this.onClickSaveVote = this.onClickSaveVote.bind(this);
        this.onShowResults = this.onShowResults.bind(this);
    }

    onClickSaveVote() {
        let multiple_answers = this.props.poll.multiple_answers;
        multiple_answers ? this.props.saveVotes((data) => this.props.showResults()) : this.props.saveVote((data) => this.props.showResults());

        /*
        if(multiple_answers) {
            if(this.props.votes.length === 0) {
                this.props.setVoteError();
            }
            else {
                this.props.saveVotes((data) => this.props.showResults())
            }
        } 

        if(!multiple_answers) {
            if(!this.props.vote) {
                this.props.setVoteError();    
            }
            else {
                this.props.saveVote((data) => this.props.showResults());     
            }
        }
        */
    }

    onShowResults() {
        this.props.showResults();

        if(this.props.showing) {
            this.props.startScrollingResults();
        }
                
    }

    render(){
        let errorMessage = this.props.voteError ? <ErrorMessageComponent message="Eingin valmøguleiki valdur"/> : null;

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
                            removeVoteError={this.props.removeVoteError}
                        />
                        {errorMessage}
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