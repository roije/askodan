import React, { Component } from 'react';
import { render} from 'react-dom';

import ResultsBarsHolderComponent from './ResultsBarsHolderComponent.jsx';

class PollResultsComponent extends Component{
    
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="poll-form-component">
                <div className="card">
                    <div className="poll-card-container">
                        <ResultsBarsHolderComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default PollResultsComponent;