import React from 'react';
import Homepage from './Homepage';
import Person from './Person';
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <Route path='/' exact  component={Homepage} />
                <Route path='/person' component={Person} />
            </BrowserRouter>
        )
    }
}