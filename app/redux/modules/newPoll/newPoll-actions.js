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
import { GENERAL_CONFIG_CHECK_CLICKED } from './newPoll-constants';
import { TITLE_ERROR } from './newPoll-constants';
import { RESET_TITLE_ERROR} from './newPoll-constants'

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
    return function (dispatch, getState) { 
        //Set all the options to have last as false
        dispatch(resetLast())
        //Add the new field. Last is set to true when object is created.
        let { pollOptions, maxFields } = getState().newPollReducer;
        if(pollOptions.length < maxFields) {
            dispatch(addPollOption())
        }
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

export const updateConfig = (configType, value) => {
    console.log(configType);
    switch(configType){
        case "ip-browser":
        console.log('UPDATE IP BROWSER')
            return {
                type: UPDATE_IP_BROWSER_CONFIG,
                value
            }
        case "general-config":
            return {
                type: GENERAL_CONFIG_CHECK_CLICKED,
                value
            }
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

export const savePoll = (callback) => {
    return (dispatch, getState) => { 
        dispatch(savePollStart())
        var newPollReducer =  getState().newPollReducer
        let { pollOptions, maxFields } = newPollReducer;

        /**  If the poll options length is less that the maximum fields of 20 remove the last field*/
        if(pollOptions.length !== maxFields) {
            pollOptions = newPollReducer.pollOptions.slice(0, -1);
        }

        /** Iterate over poll options and only add the options where value isn't empty to the array to save */
        let pollOptionsToSave = []
        pollOptions.map((option, index) => {
            if(option.value !== "") {
                pollOptionsToSave.push(option);
            }
        })
        var pollGeneralConfigs = newPollReducer.pollConfigs.generalVotingConfigs;
        var ipBrowserConfigSelected = newPollReducer.ipBrowserConfigSelected;
        var title = newPollReducer.title;
        fetch('http://localhost:8000/api/poll', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pollOptionsToSave,
                title,
                pollGeneralConfigs,
                ipBrowserConfigSelected
            })
          }).then((response) => {
            response.json().then(function(data) {
                // do something with your data
                callback(data);
              });
          })
    }
}
////////////////////////////////////////////////////////////////////////

////////////////////////TITLE ERROR////////////////////////////////////

export const setTitleError = () => {
    return {
        type: TITLE_ERROR 
    }
}

export const resetTitleError = () => {
    return {
        type: RESET_TITLE_ERROR
    }
}


//////////////////////////////////////////////////////////////////////