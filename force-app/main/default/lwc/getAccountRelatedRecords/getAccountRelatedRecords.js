/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-28-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, api, track, wire } from 'lwc';

import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class GetAccountRelatedRecords extends LightningElement {
    @api recordId;

    @track records;
    isLoaded = false;
    likeParam = '%jack%';

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Contacts',
        fields: ['Contact.Name','Contact.Id', 'Contact.Email', 'Contact.Phone'],
        sortBy: ['Contact.Name'],
        where: `{ Name: { like: '$likeParam' } }`
    })
    wiredRelatedRecords({ error, data }){
        if(data){
            this.records = data.records;
            console.log(this.records);
            this.isLoaded = true;
        } else if (error){
            console.error(error);
        }
    }
}