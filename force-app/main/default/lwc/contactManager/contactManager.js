import { LightningElement } from 'lwc';

export default class ContactManager extends LightningElement {

    handleCOntactSelected(event){
        console.log('Grand Parent is handing the event')
        console.log(event.detail);
    }
}