import React from 'react';

import ResultsBarComponent from './ResultsBarComponent.jsx';

const ResultsBarsHolderComponent = (props) => {

    let colors = [
        "#00b4ff",
        "#f34a58",
        "#4af392"
    ]

    let resultBars = props.results.map((pollOption, index) => {
        let color = colors[index];
        return <ResultsBarComponent key={index} 
            title={pollOption.poll_value} 
            votes={pollOption.votes} 
            percentage={pollOption.percentage}
            color={color}/>

    })
    return(
        <div className="poll-results-bars-holder">
            {resultBars}
        </div>
    )
}

export default ResultsBarsHolderComponent;