import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';
import { ADD_POLL_OPTION } from './newPoll-constants';
import { RESET_LAST_OPTION } from './newPoll-constants';
import { SAVE_POLL_STARTED, SAVE_POLL_IN_PROGRESS, SAVE_POLL_DONE } from './newPoll-constants';

export const updateTitle = (value) => {
    return {
        type: UPDATE_TITLE,
        value
    }
};

export const updatePollOption = (id, value) => {
    return {
        type: UPDATE_POLL_OPTION,
        id,
        value
    }
}

const resetLast = (fieldNumber, value) => {
    return {
        type: RESET_LAST_OPTION,
        fieldNumber,
        value
    }
}

const addPollOption = () => {
    return {
        type: ADD_POLL_OPTION
    }
}

const savePollStart = () => {
    return {
        type: SAVE_POLL_STARTED
    }
}

const savePollSDone = () => {
    return {
        type: SAVE_POLL_DONE
    }
}

export const lastFieldFocused = (fieldNumber) => {
    return function (dispatch) { 
        dispatch(addPollOption())
        dispatch(resetLast(fieldNumber))
    }
}

export const savePoll = () => {
    return (dispatch, getState) => { 
        dispatch(savePollStart())
        var newPollReducer =  getState().newPollReducer
        var pollOptions = newPollReducer.pollOptions;
        var title = newPollReducer.title;
        fetch('http://localhost/api_askodan/polls/api-save-poll.php', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pollOptions,
                title
            })
          }).then((response) => {
            response.json().then(function(data) {
                // do something with your data
                console.log(data)
              });
          })
    }
}