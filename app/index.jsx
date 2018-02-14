import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Redux
import store from './redux/store'
import { Provider } from 'react-redux'

import NewPollContainer from './containers/NewPollContainer.jsx';
import PollContainer from './containers/PollContainer.jsx';
import PollResultsContainer from './containers/PollResultsContainer.jsx';

//Styles
import style from '../public/style.scss';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
} else {
    console.log("We're in development")
}

console.log(__API__);

class App extends Component{
    render(){
        return (
            <Switch>
                <Route exact={true} path="/" component={NewPollContainer}/>
                <Route path="/poll/:slug" component={PollContainer}/>
           </Switch>
        )
    }
}

render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
, document.getElementById('app'));