import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';
import { ADD_POLL_OPTION } from './newPoll-constants';
import { RESET_LAST_OPTION } from './newPoll-constants';
import { SAVE_POLL_STARTED, SAVE_POLL_IN_PROGRESS, SAVE_POLL_DONE } from './newPoll-constants';
import { REMOVE_FIELD } from './newPoll-constants';
import { SET_LAST_FIELD_TRUE } from './newPoll-constants'
import { RESET_LAST } from './newPoll-constants';
import { SET_LAST_TRUE } from './newPoll-constants';
import { UPDATE_IP_BROWSER_CONFIG } from './newPoll-constants';


/////////////////////UPDATE POLL TITLE////////////////////////

export const updateTitle = (value) => {
    return {
        type: UPDATE_TITLE,
        value
    }
};

//////////////////////////////////////////////////////////////

//////////////////UPDATE POLL OPTION////////////////////////////

export const updatePollOption = (index, value) => {
    return {
        type: UPDATE_POLL_OPTION,
        index,
        value
    }
}

//////////////////////////////////////////////////////////////////

///////////////////ADD NEW POLL OPTION WHEN LAST IS FOCUSED/////////////

const resetLast = () => {
    return {
        type: RESET_LAST
    }
}


const addPollOption = () => {
    return {
        type: ADD_POLL_OPTION
    }
}

export const lastFieldFocused = (index) => {
    return function (dispatch) { 
        //Set all the options to have last as false
        dispatch(resetLast())
        //Add the new field. Last is set to true when object is created.
        dispatch(addPollOption())
    }
}

////////////////////////////////////////////////////////////////////////

///////////////////////////REMOVE POLL OPTION///////////////////////////


const onRemoveField = (index) => {
    return {
        type: REMOVE_FIELD,
        index
    }
}

const setLastTrue = () => {
    return {
        type: SET_LAST_TRUE
    }
}

export const removeField = (index, isLast) => {
    return function (dispatch) {
        //Remove the field
        dispatch(onRemoveField(index))
        //Then set all the options to have last as false
        dispatch(resetLast());
        //Set the last option in array to have last as true
        dispatch(setLastTrue());
    }
}

////////////////////////////////////////////////////////////////////////

/////////////////////////SET IP/BROWSER CONFIGS/////////////////////////////////

export const updateConfig = (value) => {
    return {
        type: UPDATE_IP_BROWSER_CONFIG,
        value
    }
}

////////////////////////////////////////////////////////////////////////


///////////////////////////SAVE POLL/////////////////////////////////////

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

export const savePoll = () => {
    return (dispatch, getState) => { 
        dispatch(savePollStart())
        var newPollReducer =  getState().newPollReducer
        var pollOptions = newPollReducer.pollOptions.slice(0, -1);
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
////////////////////////////////////////////////////////////////////////
