import { LightningElement } from 'lwc';

export default class QuickCase extends LightningElement {

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