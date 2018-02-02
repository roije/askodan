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
        if(!this.props.vote && this.props.votes.length == 0) {
            this.props.setVoteError();
        }
        else {
            let multiple_answers = this.props.poll.multiple_answers;
                                /* If there are multiple, invoke the saveVotes action*/
            multiple_answers ?  this.props.saveVotes((data) => this.props.showResults()) :
                                /* If only one vote allowed, then invoke the saveVote action*/ 
                                this.props.saveVote((data) => this.props.showResults());
        }
    }

    onShowResults() {
        this.props.showResults();
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
                            pollCheckClickedBeta={this.props.pollCheckClickedBeta}
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