import React, { Component } from 'react';
import { render } from 'react-dom';

class PollContainer extends Component{
    componentWillMount() {
        console.log('Fetch blabla poll with ID', this.props.match.params.id)
        console.log(this.props);
    }

    render(){
        return (
            <h1>Poll container</h1>
        )
    }
}

export default PollContainer;