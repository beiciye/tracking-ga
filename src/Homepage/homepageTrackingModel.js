import * as ReactGA from 'react-ga';

export default class HomepageModel {
    constructor(grade){
        this.grade = grade;
        this.confirmed = false;
    }

    confirm(){
        this.confirmed = true;
    }

    sendData(){
    const action = this.confirmed ? 'confirmed' : 'cancel'
        ReactGA.event({
            category: 'homepage_category',
            action: action,
            label: this.grade
        })
    }
}