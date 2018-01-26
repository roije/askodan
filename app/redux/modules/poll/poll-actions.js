import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
    POLL_RADIO_OPTION_CLICKED,
    SAVE_VOTE_START,
    SAVE_VOTE_END
} from './poll-constants';

////////////////////////FETCH POLL//////////////////////////

const fetchPollStart = () => {
    return {
        type: FETCH_POLL_START
    }
}

const fetchPollEnd = () => {
    return {
        type: FETCH_POLL_END
    }
}

const receivePoll = (poll) => {
    return {
        type: RECEIVE_POLL,
        poll
    }
}

export const fetchPoll = (slug) => {
    return function (dispatch) { 
        //Set all the options to have last as false
        console.log('SLUG', slug)
        dispatch(fetchPollStart())
        fetch('http://localhost:3000/poll/' + slug, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          })
        .then((response) =>  response.json())
        .then((data) => {
            // do something with your data
            dispatch(receivePoll(data))
            dispatch(fetchPollEnd())
        });   
    }
}

/////////////////POLL RADIO CLICKED////////////////

export const pollRadioOptionClicked = (index) => {
    return {
        type: POLL_RADIO_OPTION_CLICKED,
        index
    }
}

//////////////////////////////////////////////////

////////////////SAVE ONE ANSWER VOTE/////////////

const saveVoteStart = () => {
    return {
        type: SAVE_VOTE_START
    }
}
const saveVoteEnd = () => {
    return {
        type: SAVE_VOTE_END
    }
}

export const saveVote = () => {
    return (dispatch, getState) => {
        dispatch(saveVoteStart());
        let pollReducer = getState().pollReducer;
        let voteIndex = pollReducer.vote;
        let pollOption = pollReducer.poll.pollOptions[voteIndex];
        let pollId = pollReducer.poll.id;
        fetch('http://localhost:3000/api/poll/vote', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pollOption
            })
          }).then((response) => {
            response.json().then(function(data) {
                // do something with your data
                callback(data);
                dispatch(saveVoteEnd());
              });
          })
    }
}