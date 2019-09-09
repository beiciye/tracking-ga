import React from 'react';
import Homepage from './Homepage';
import Person from './Person';
import { BrowserRouter, Route } from "react-router-dom";
import * as ReactGA from 'react-ga';

export default class App extends React.Component {
    componentDidMount(){
        ReactGA.initialize('UA-147368837-1')
    }

    render(){
        return (
            <BrowserRouter>
                <Route path='/' exact  component={Homepage} />
                <Route path='/person' component={Person} />
            </BrowserRouter>
        )
    }
}