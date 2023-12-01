/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-26-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, api } from 'lwc';

export default class LookupComponent extends LightningElement {

    @api recordId;

    objectName = 'Contact';
    label = 'Search Contact';
    placeholder = 'search contacts'

    displayInfo = {
        additionalFields: ['Account.Name', 'Email']
    }

    matchingInfo = {
        primaryField: { fieldPath: 'Name' },
        additionalFields: [ { fieldPath: 'Email' } ]
    }

    filter = {
        criteria : [
            {
                fieldPath: 'AccountId',
                operator: 'eq',
                value: `${this.recordId}`
            },
            {
                fieldPath: 'Account.Industry',
                operator: 'eq',
                value: `Education`
            },
            {
                fieldPath: 'Title',
                operator: 'like',
                value: `%VP%`
            }
        ],
        filterLogic : '(1 AND 2) OR 3'
    }

    handleSelect = (event) => {
        event.preventDefault();
        let selectedId = event.detail.recordId;
    }

    handleFocus (event){
        event.preventDefault();
        this.filter.criteria[0].value = this.recordId;
        let lookupComponent = this.refs.lookup;
        if(lookupComponent){
            lookupComponent.filter = this.filter;
        }
        //console.log(JSON.stringify(this.filter));
    }
}