import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';
import { ADD_POLL_OPTION } from './newPoll-constants';
import { RESET_LAST_OPTION } from './newPoll-constants';
import { SAVE_POLL_STARTED, SAVE_POLL_IN_PROGRESS, SAVE_POLL_DONE } from './newPoll-constants';
import { REMOVE_FIELD } from './newPoll-constants';
import { SET_LAST_FIELD_TRUE } from './newPoll-constants'

export const updateTitle = (value) => {
    return {
        type: UPDATE_TITLE,
        value
    }
};

export const updatePollOption = (index, value) => {
    return {
        type: UPDATE_POLL_OPTION,
        index,
        value
    }
}

const resetLast = (index, value) => {
    return {
        type: RESET_LAST_OPTION,
        index,
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

export const lastFieldFocused = (index) => {
    return function (dispatch) { 
        dispatch(addPollOption())
        dispatch(resetLast(index))
    }
}

const onRemoveField = (index) => {
    return {
        type: REMOVE_FIELD,
        index
    }
}

const lastFieldRemoved = () => {
    return {
        type: SET_LAST_FIELD_TRUE
    }
}

export const removeField = (index, isLast) => {
    console.log('INDEX', index)
    return function (dispatch) {
        dispatch(onRemoveField(index))
        if(isLast) {
            dispatch(lastFieldRemoved());
        }
    }
}



export const savePoll = () => {
    return (dispatch, getState) => { 
        dispatch(savePollStart())
        var newPollReducer =  getState().newPollReducer
        var pollOptions = newPollReducer.pollOptions;
        var title = newPollReducer.title;
        fetch('http://localhost:3000/api/poll', {
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