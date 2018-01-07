import React, { Component } from 'react';
import { render } from 'react-dom';

//Components
import TitleComponent from '../components/TitleComponent.jsx';
import PollFormComponent from '../components/PollFormComponent.jsx';

class NewPollContainer extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="new-poll-container">
                <TitleComponent/>
                <PollFormComponent/>
            </div>
        )
    }
}

export default NewPollContainer;