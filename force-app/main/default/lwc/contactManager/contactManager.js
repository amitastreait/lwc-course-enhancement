import { LightningElement } from 'lwc';

export default class ContactManager extends LightningElement {

    handleCOntactSelected(event){
        // console.log('Grand Parent is handing the event')
        // console.log(event.detail);
    }

    handleClick(event){
        event.preventDefault();
        let childComponent = this.refs.contactList;
        if(childComponent){
            let sum = childComponent.handleSum(10,90);
            alert('Sum is '+ sum);
            let message = childComponent.welcomeMessage();
            alert('message is '+ message);
        }
    }
}