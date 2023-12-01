/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-29-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, wire } from 'lwc';

import { getRecords } from 'lightning/uiRecordApi';

import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_RATING_FIELD from '@salesforce/schema/Account.Rating';

import FNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class GetRecords extends LightningElement {
    // 0035g000015O6fjAAC
    @wire(getRecords, {
        records : [
            {
                recordIds : ["0015g00001Qn9M4AAJ","0015g00001TAIoMAAX"],
                fields : [ACCOUNT_NAME_FIELD, ACCOUNT_RATING_FIELD]
            },
            {
                recordIds : ["0035g000015O6fjAAC"],
                fields : [FNAME_FIELD, LNAME_FIELD, EMAIL_FIELD]
            }
        ]
    })
    wiredData({error, data}){
        if(data){
            console.log(data);
        }else if(error){
            console.error(error)
        }
    }
}