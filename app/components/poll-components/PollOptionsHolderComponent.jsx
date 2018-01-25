import React from 'react';

import PollRadioOptionComponent from './PollRadioOptionComponent.jsx';
import PollCheckOptionComponent from './PollCheckOptionComponent.jsx';

const PollOptionsHolderComponent = (props) => {
    let { multiple_answers, pollOptions } = props;
    
    let elements = null;
    if(pollOptions !== undefined) {
         elements = pollOptions.map((option, index) => {
            let element = multiple_answers ?  
            <PollCheckOptionComponent 
                text={option.poll_value}
                index={index}
                key={index}
                poll_id={option.id}
            />  : 
            <PollRadioOptionComponent 
                text={option.poll_value}
                index={index}
                key={index}
                poll_id={option.id}
            /> 
            return element;
        }) 
    }
    return(
        <div className="poll-options-element-holder">
            {multiple_answers ? <p>Vel eitt ella fleiri svar:</p> : <p>Vel eitt svar:</p>}
            {elements}
        </div>
    )
}

export default PollOptionsHolderComponent;