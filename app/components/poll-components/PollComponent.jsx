import React, { Component } from 'react';
import { render } from 'react-dom';

class PollComponent extends Component {
    render(){
        return(
            <div className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <div className="poll-form-row">
                            <div className="poll-title">
                                <h3>Who dat?</h3>
                            </div>
                        </div>
                        <div className="poll-form-row">
                            <p>
                                <input name="group1" type="radio" id="test1" />
                                <label for="test1">Bob Larsen</label>
                            </p>
                        </div>
                        <div className="poll-form-row">
                            <p>
                                <input name="group1" type="radio" id="test2" />
                                <label for="test2">Knud Knudsen</label>
                            </p>
                        </div>
                        <div className="poll-form-row">
                            <p>
                                <input name="group1" type="radio" id="test3" />
                                <label for="test3">Kotelet Kasket</label>
                            </p>
                        </div>
                        <div className="poll-form-row">
                            <p>
                                <input name="group1" type="radio" id="test4" />
                                <label for="test4">Multifrugt juice</label>
                            </p>
                        </div>
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