import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
    SET_POLL_TITLE, 
    SET_POLL_OPTIONS,
    SET_IP_BROWSER_CONFIG,
    SET_POLL_GENERAL_CONFIGS,
    SET_GENERAL_CONFIG_MULTIPLE_ANSWERS,
    SET_GENERAL_CONFIG_SPAM_PREVENTION,
    SET_GENERAL_CONFIG_PRIVATE } from './poll-constants';

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

const setPollTitle = (title) => {
    return {
        type: SET_POLL_TITLE,
        title
    }
}

const setPollOptions = (options) => {
    return {
        type: SET_POLL_OPTIONS,
        options
    }
}

const setPollIpBrowserConfig = (ipBrowserConfig) => {
    return {
        type: SET_IP_BROWSER_CONFIG,
        ipBrowserConfig
    }
}


const setPollGeneralConfigMultipleAnswers = (config) => {
    return {
        type: SET_GENERAL_CONFIG_MULTIPLE_ANSWERS,
        config
    }
}

const generalPollConfigActions = {
    multiple_answers : (value) => {
        return {
            type: SET_GENERAL_CONFIG_MULTIPLE_ANSWERS,
            value
        }
    },
    spam_prevention : (value) => {
        return {
            type: SET_GENERAL_CONFIG_SPAM_PREVENTION,
            value
        }
    },
    private : (value) => {
        return {
            type: SET_GENERAL_CONFIG_PRIVATE,
            value
        }
    }
}

const setPollGeneralConfigs = (generalConfigs) => {
    return (dispatch) => {
        generalConfigs.map((gConfig) => {
            const value = gConfig.config_value === 1 ? true : false;
            dispatch(generalPollConfigActions[gConfig.config](value))
        })
    }
}

const receivePoll = (poll) => {
    console.log(poll);
    return (dispatch) => {
        dispatch(setPollTitle(poll.pollData.title))
        dispatch(setPollOptions(poll.pollOptions))
        dispatch(setPollIpBrowserConfig(poll.pollData.ip_browser_config_id))
        dispatch(setPollGeneralConfigs(poll.pollGeneralConfigs))
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
    //console.log('FETCH THIS POLL', slug);
}