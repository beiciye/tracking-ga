import React from 'react';

export default class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grade: "senior",
        };
        this.handleOnGradeChange = this.handleOnGradeChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        window.confirm('hello world')
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
                    Grade:
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