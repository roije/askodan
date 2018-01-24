import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
    SET_POLL_TITLE, 
    SET_POLL_OPTIONS,
    SET_IP_BROWSER_CONFIG } from './poll-constants';

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

const receivePoll = (poll) => {
    return (dispatch) => {
        dispatch(setPollTitle(poll.pollData.title))
        dispatch(setPollOptions(poll.pollOptions))
        dispatch(setPollIpBrowserConfig(poll.pollData.ip_browser_config_id))
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