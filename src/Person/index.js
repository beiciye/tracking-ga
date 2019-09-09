import React from 'react';

export default class Person extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hometown: 'wuhan',
            gender: 'man',
            age: 10,
            score: (Math.random()*100).toFixed(2)
        }
        this.handleOnHometownChange = this.handleOnHometownChange.bind(this)
        this.handleOnGenderChange = this.handleOnGenderChange.bind(this)
        this.handleOnAgeChange = this.handleOnAgeChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        window.confirm('hello world')
    }

    handleOnHometownChange(e){
        this.setState({hometown: e.target.value})
    }

    handleOnAgeChange(e){
        this.setState({age: e.target.value})
    }

    handleOnGenderChange(e){
        this.setState({gender: e.target.value})
    }


    render(){
        const {hometown, gender, age, score} = this.state;
        return (
        <div>
            <h2>Person</h2>
            <div>
                <label htmlFor="hometown">
                Hometown: 
                </label>
                <select onChange={this.handleOnHometownChange} selected={hometown}>
                    <option value="wuhan" >wuhan</option>
                    <option value="shanghai" >shanghai</option>
                    <option value="beijing" >beijing</option>
                </select>
            </div>

            <div style={{marginTop: 20}}>
                <label htmlFor="gender">
                    Gender:
                </label>
                <select onChange={this.handleOnGenderChange} selected={gender}>
                    <option value="man" >man</option>
                    <option value="woman" >women</option>
                </select>
            </div>
            
            <div style={{marginTop: 20}}>
                <label htmlFor='age'>Age:</label>
                <input type='number' id='age' value={age} onChange={this.handleOnAgeChange}/>
            </div>

            <div style={{marginTop: 20}}>
                score: 
                <input disabled value={score} />
            </div>
            
            <button style={{marginTop: 20}} onClick={this.handleClick}>click</button>
        </div>
        )
    }
}