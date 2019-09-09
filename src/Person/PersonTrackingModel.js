import * as ReactGA from 'react-ga';
export default class PersonTrackingModel {
    constructor(person){
        this.hometown = person.hometown;
        this.score = person.score;
        this.gender = person.gender;
        this.age = person.age;
        this.confirmed = false;
    }

    confirm(){
        this.confirmed = true
    }

    sendData(){
        const action = this.confirmed ? 'confirmed' : 'cancel'
        ReactGA.event({
            category: 'person_category',
            action: action,
            label: this.gender,
            value: this.score,
            dimension1: this.gender,
            dimension2: this.hometown,
            metric1: this.age
        })
    }
}