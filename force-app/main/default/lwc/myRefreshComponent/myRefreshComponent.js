/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, api } from 'lwc';

import {
    registerRefreshHandler,
    unregisterRefreshHandler,
    RefreshEvent,
    REFRESH_ERROR,
    REFRESH_COMPLETE,
    REFRESH_COMPLETE_WITH_ERRORS
} from "lightning/refresh";

import { createRecord } from 'lightning/uiRecordApi';

export default class MyRefreshComponent extends LightningElement {

    refreshHandlerID;
    @api recordId;

    connectedCallback() {
        this.refreshHandlerID = registerRefreshHandler(this.template.host, this.refreshHandler);
    }
    disconnectedCallback() {
        unregisterRefreshHandler(this.refreshHandlerID);
    }
    refreshHandler(refreshPromise) {
        console.log("refreshing");
        return refreshPromise.then((status) => {
            if (status === REFRESH_COMPLETE) {
                console.log("Done!");
            } else if (status === REFRESH_COMPLETE_WITH_ERRORS) {
                console.warn("Done, with issues refreshing some components");
            } else if (status === REFRESH_ERROR) {
                console.error("Major error with refresh.");
            }
        });
    }

    randomNameGenerator = num => {
        let res = '';
        for (let i = 0; i < num; i++) {
            const random = Math.floor(Math.random() * 27);
            res += String.fromCharCode(97 + random);
        };
        return res;
    };

    handleCreateRecord() {

        const num = 10;

        const fields = {};

        fields['LastName'] = this.randomNameGenerator(num);
        fields['Phone'] = '9999999999';
        fields['Fax'] = '9999999999';
        fields['AccountId'] = this.recordId;

        const recordInput = {
            apiName: 'Contact',
            fields: fields
        };
        createRecord(recordInput).then((record) => {
            console.log(record);
            this.dispatchEvent(new RefreshEvent());
        });
    }

    beginRefresh() {
        this.handleCreateRecord();
        //
    }
}