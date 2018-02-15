import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
    CREATE_POLL_CHECK_LIST,
    POLL_CHECK_CLICKED,
    POLL_RADIO_OPTION_CLICKED,
    SAVE_VOTE_START,
    SAVE_VOTE_END,
    SAVE_VOTES_START,
    SAVE_VOTES_END,
    SET_VOTE_ERROR,
    REMOVE_VOTE_ERROR,
    POLL_CHECK_CLICKED_BETA
} from './poll-constants';

console.log(__API__)
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

/*
const createPollCheckList = (checkList) => {
    return {
        type: CREATE_POLL_CHECK_LIST,
        checkList
    }
}

const buildPollCheckList = (pollOptions) => {
    let checkList = [];
    for(let i = 0; i < pollOptions.length; i++) {
        checkList.push({index : i, checked: false})
    }
    return (dispatch) => {
        dispatch(createPollCheckList(checkList));
    }
}
*/

export const fetchPoll = (slug) => {
    return function (dispatch) { 
        //Set all the options to have last as false
        dispatch(fetchPollStart())
        fetch(__API__ + '/api/poll/' + slug, {
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
            /*
            if(data.multiple_answers) {
                dispatch(buildPollCheckList(data.pollOptions));
            }
            */
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


///////////////////POLL CHECK CLICKED//////////////////

export const pollCheckClicked = (index) => {
    return {
        type: POLL_CHECK_CLICKED,
        index
    }
} 

export const pollCheckClickedBeta = (index) => {
    return {
        type: POLL_CHECK_CLICKED_BETA,
        index
    }    
}
//////////////////////////////////////////////////////


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

export const saveVote = (callback) => {
    return (dispatch, getState) => {
        dispatch(saveVoteStart());
        let pollReducer = getState().pollReducer;
        let voteIndex = pollReducer.vote;
        let pollOption = pollReducer.poll.pollOptions[voteIndex];
        let pollId = pollReducer.poll.id;
        fetch(__API__ + '/api/poll/vote', {
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
                dispatch(saveVoteEnd());
                callback(data);
              });
          })
    }
}

///////////////SAVE MULTIPLE ANSWER VOTE//////////////

const saveVotesStart = () => {
    return {
        type: SAVE_VOTES_START
    }
}

const saveVotesEnd = () => {
    return {
        type: SAVE_VOTES_END
    }
}
 
export const saveVotes = (callback) => {
    return (dispatch, getState) => {
        dispatch(saveVotesStart());
        let pollReducer = getState().pollReducer;
        let votes = pollReducer.votes.sort();
        let votesSave = [];
        /** Get all options from poll options at the index that is in the votes array 
         * and push it to the votesSave array which will be passed into the ajax request.
        */
        for(let i = 0; i < votes.length; i++) {
            let voteIndex = votes[i];
            let option = pollReducer.poll.pollOptions[voteIndex];
            votesSave.push(option);
        }
        fetch(__API__ + '/api/poll/votes', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                votesSave
            })
          }).then((response) => {
            response.json().then(function(data) {
                // do something with your data
                dispatch(saveVotesEnd());
                callback(data);
            });
        })
    }
}

//////////////////////////////////////////////////////

///////////////////VOTE ERROR////////////////////////

export const setVoteError = () => {
    return {
        type: SET_VOTE_ERROR
    }
}

export const removeVoteError = () => {
    return {
        type: REMOVE_VOTE_ERROR
    }
}