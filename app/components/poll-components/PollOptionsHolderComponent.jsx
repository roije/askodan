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
    /*
    const buildPollOptionElements = (options, type) => {
        let elements = options.map((option, index) => {
            switch(type) {
                case "check" :
                    return <PollCheckOptionComponent 
                        text={option.poll_value}
                        index={index}
                        key={index}
                        poll_id={option.id}
                    />
                case "radio":
                    return <PollRadioOptionComponent 
                        text={option.poll_value}
                        index={index}
                        key={index}
                        poll_id={option.id}
                    />
            }
        })
        console.log(elements);
        return elements;
    }

    let pollOptionsElements = multiple_answers ? buildPollOptionElements(pollOptions, "check") : buildPollOptionElements(pollOptions, "radio")
    */
    return(
        <div className="poll-options-element-holder">
            {elements}
        </div>
    )
}

export default PollOptionsHolderComponent;