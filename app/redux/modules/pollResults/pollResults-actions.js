import { 
    SHOW_RESULTS,
    FETCH_RESULTS_START,
    RECEIVE_RESULTS,
    FETCH_RESULTS_END
} from './pollResults-constants';

//////////////FETCHING POLL RESULTS////////////////////
export const showResults = () => {
    return {
        type: SHOW_RESULTS
    }
}

const fetchResultsStart = () => {
    return {
        type: FETCH_RESULTS_START
    }
}
const fetchResultsEnd = () => {
    return {
        type: FETCH_RESULTS_END
    }
}

export const fetchPollResults = (slug) => {
    return (dispatch) => {
        dispatch(fetchResultsStart());
        fetch('http://localhost:3000/api/poll/' + slug + '/votes', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          })
        .then((response) =>  response.json())
        .then((data) => {
            // do something with your data
            console.log(data);
        }); 
        dispatch(fetchResultsEnd());
    }
}



//////////////////////////////////////////////////////