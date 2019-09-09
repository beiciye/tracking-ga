import React from 'react';


export default class Homepage extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick() {
        window.confirm('hello world');
    }

    render(){
        return (
        <div>
            <h2>Homepage</h2>
            <button onClick={this.handleClick}> 点我</button>
        </div>)
    }
}