import React from 'react';

import ResultsBarComponent from './ResultsBarComponent.jsx';

const ResultsBarsHolderComponent = (props) => {
 
    return(
        <div className="poll-results-bars-holder">
            <ResultsBarComponent percentage={20}/>
            <ResultsBarComponent percentage={70}/>
            <ResultsBarComponent percentage={10}/>
        </div>
    )
}

export default ResultsBarsHolderComponent;