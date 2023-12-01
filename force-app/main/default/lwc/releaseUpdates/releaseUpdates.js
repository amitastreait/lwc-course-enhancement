/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement } from 'lwc';

export default class ReleaseUpdates extends LightningElement {

    fullName = 'John Doe';
    speakerLocaton = 'Unknown';
    speakerAge = 78;

    params = {
        name : this.fullName,
        location: this.speakerLocaton,
        age : this.speakerAge
    }

    handleClick(event) {
        event.preventDefault();

        let name = this.template.querySelector('.first-name');
        let childComp = this.template.querySelector('c-org-based-deployment');
        console.log(childComp);
        if(childComp){
            // do something
        }

        let chComp = this.refs.childComponent;
        let chName = this.refs.name;

        console.log(chName);
        console.log(chComp);

    }
}