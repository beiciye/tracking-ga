import React from 'react';


export default class Person extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            gender: '',
            age: 10,
            score: (Math.random()*100).toFixed(2)
        }
        this.handleOnNameChange = this.handleOnNameChange.bind(this)
        this.handleOnGenderChange = this.handleOnGenderChange.bind(this)
        this.handleOnAgeChange = this.handleOnAgeChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        window.confirm('hello world');
    }

    handleOnNameChange(e){
        this.setState({name: e.target.value})
    }

    handleOnAgeChange(e){
        this.setState({age: e.target.value})
    }

    handleOnGenderChange(e){
        this.setState({gender: e.target.value})
    }



    render(){
        const {name, gender, age, score} = this.state;
        return (
        <div>
            <h2>Person</h2>
            <div>
                <label htmlFor="name">
                    Name: 
                </label>
                <input value={name} id="name" onChange={this.handleOnNameChange} />
            </div>

            <div style={{marginTop: 20}}>
                <label htmlFor="gender">
                    Gender:
                </label>
                <select onChange={this.handleOnGenderChange}>
                    <option value="man" selected={gender}>man</option>
                    <option value="woman" selected={gender}>women</option>
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