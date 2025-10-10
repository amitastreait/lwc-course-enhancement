import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    message;
    source;

    handleDataChange(event){
        console.log('The event is handeled '+Math.random())
        this.message = event.detail.message;
        this.source = event.detail.source;
    }
}