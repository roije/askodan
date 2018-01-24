import { FETCH_POLL_START, RECEIVE_POLL, FETCH_POLL_END } from './poll-constants';

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
        title: poll.pollData.title,
        ip_browser_config: poll.pollData.ip_browser_config_id,
        pollOptions: poll.pollOptions
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