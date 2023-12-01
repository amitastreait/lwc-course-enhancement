/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, api } from 'lwc';

import { registerRefreshHandler, unregisterRefreshHandler, RefreshEvent } from 'lightning/refresh';

import  { createRecord } from 'lightning/uiRecordApi';

export default class CreateContactRefreshView extends LightningElement {

    @api recordId;

    refreshHandlerId; 
    connectedCallback(){
        this.refreshHandlerId = registerRefreshHandler(this, this.handleRefresh );
    }

    disconnectedCallback(){
        unregisterRefreshHandler(this.refreshHandlerId);
    }

    handleRefresh(){
        console.log('Handle Refresh Called.... ');
    }

    handleCreateContact(){
        const fields = {};
        fields['FirstName'] = 'Amit';
        fields['LastName'] = 'Singh';
        fields['Title'] = 'Salesforce Architect';
        fields['Email'] = 'asingh@hotmail.com';
        fields['Phone'] = '9998887887';
        fields['AccountId'] = this.recordId;

        const recordInput = {
            apiName : 'Contact',
            fields : fields
        }

        createRecord(recordInput)
        .then((record)=>{
            console.log(record);
            this.dispatchEvent(new RefreshEvent() );
        })
        .catch((error)=>{
            console.error(error);
        });

    }
}