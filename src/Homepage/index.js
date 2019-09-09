import React from 'react';
import HomepageTrackingModel from './homepageTrackingModel'
import * as ReactGA from 'react-ga';

export default class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grade: "senior",
        };
        this.handleOnGradeChange = this.handleOnGradeChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        setTimeout(()=>ReactGA.pageview('/'),500)
    }

    handleClick() {
        const {grade} = this.state;
        const model = new HomepageTrackingModel(grade);
        if (window.confirm('hello world')){
            model.confirm();
        };
        model.sendData();
    }

    handleOnGradeChange(e){
        this.setState({grade: e.target.value})
    }

    render(){
        const { grade } = this.state; 
        return (
        <div>
            <h2>Homepage</h2>
            <div style={{marginTop: 20}}>
                <label htmlFor="grade">
                    Gender:
                </label>
                <select id="grade" onChange={this.handleOnGradeChange} selected={grade}>
                    <option value="senior" >senior</option>
                    <option value="junior" >junior</option>
                </select>
            </div>
            <button style={{marginTop: 20}} onClick={this.handleClick}> 点我</button>
        </div>)
    }
}