import React, { Component } from 'react';
import { render } from 'react-dom';

//Redux
import store from '../redux/store'
import { Provider } from 'react-redux'

import NewPollContainer from './containers/NewPollContainer.jsx';

//Styles
import style from '../public/style.scss';

class App extends Component{
    render(){
        return <NewPollContainer/>
    }
}

render(<Provider store={store}>
    <App />
</Provider>
, document.getElementById('app'));