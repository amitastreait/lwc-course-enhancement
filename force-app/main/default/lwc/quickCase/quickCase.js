import { api, LightningElement } from 'lwc';

export default class QuickCase extends LightningElement {

    @api recordId;
    @api objectApiName;

    connectedCallback(){
        console.log('Record Id', this.recordId);
        console.log('Object API Name', this.objectApiName);
    }

    get statusOptions(){
        return [
            { label: 'New', value: 'New' },
            { label: 'Working', value: 'Working' },
            { label: 'Escalated', value: 'Escalated' }
        ]
    }

    get priorityOptions(){
        return [
            { label: 'High', value: 'High' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Low', value: 'Low' }
        ]
    }
}