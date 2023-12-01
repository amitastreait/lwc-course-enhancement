/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-29-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, api, track, wire } from 'lwc';
import { getRelatedListRecordsBatch } from 'lightning/uiRelatedListApi';
export default class GetRelatedListRecordsBatch extends LightningElement {
    @api recordId;

    @track results;

    @wire(getRelatedListRecordsBatch, {
        parentRecordId: '$recordId',
        relatedListParameters: [
            {
              relatedListId: "Contacts",
              fields: ["Contact.Name", "Contact.Id"],
              sortBy: ["Contact.Name"],
            },
            {
              relatedListId: "Opportunities",
              fields: ["Opportunity.Name", "Opportunity.Amount"],
              sortBy: ["Opportunity.Amount"],
            },
            {
                relatedListId: "Employees__r",
                fields: ["Employee__c.Name", "Employee__c.Phone__c", "Employee__c.Email__c"],
                sortBy: ["Employee__c.Name"],
            },
        ],
    })
    wiredBatchResult({error, data}){
        if(data){
            console.log( JSON.stringify(data.results) );
            this.results = data.results;
            this.results.forEach( (item) => {
                console.log(item.listReference)
                item.result.records.forEach ( (records ) => {
                    console.log(records);
                });
            });
        } else if(error){
            console.error(error);
        }
    }

}