import React from 'react';

import ResultsBarComponent from './ResultsBarComponent.jsx';

const ResultsBarsHolderComponent = (props) => {

    let colors = [
        "#00b4ff",
        "#f34a58",
        "#4af392",
        "#1E8BC3",
        "#fbc531",
        "#006266",
        "#8c7ae6",
        "#c23616",
        "#44bd32",
        "#fff200",
        "#ff9f1a",
        "#ffb8b8",
        "#c56cf0",
        "#6D214F",
        "#58B19F",
        "#95afc0",
        "#4834d4",
        "#badc58"
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