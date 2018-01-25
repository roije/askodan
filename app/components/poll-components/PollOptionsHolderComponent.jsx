import React from 'react';

import PollRadioOptionComponent from './PollRadioOptionComponent.jsx';
import PollCheckOptionComponent from './PollCheckOptionComponent.jsx';

const PollOptionsHolderComponent = (props) => {
    let { multiple_answers, pollOptions } = props;
    console.log(props);
    if(multiple_answers) {
        console.log('Do check boxes')
    } else {
        console.log('Do radio buttons')
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
        <h1>ff</h1>
    )
}

export default PollOptionsHolderComponent;