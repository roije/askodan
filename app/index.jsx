import React, { Component } from 'react';
import { render } from 'react-dom';

import NewPollContainer from './containers/NewPollContainer.jsx';

//Styles
import style from '../public/style.scss';

class App extends Component{
    render(){
        return <NewPollContainer/>
    }
}

render(<App />, document.getElementById('app'));