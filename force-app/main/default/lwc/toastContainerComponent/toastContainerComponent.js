/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ToastContainer from 'lightning/toastContainer';

export default class ToastContainerComponent extends LightningElement {

    connectedCallback() {
        const toastContainer = ToastContainer.instance(); // creating the toast container object
        toastContainer.maxToasts = 5;
        toastContainer.toastPosition = 'bottom-right'; // top-left , bottom-right, bottom-left, top-center, bottom-center
    }

    handleSuccess(){
        let successToast = new ShowToastEvent({
            title: 'Success',
            message: 'Success Message',
            variant:  'success'
        });
        this.dispatchEvent(successToast);
    }
    handleError(){
        let ErrorToast = new ShowToastEvent({
            title: 'Error',
            message: 'Error Message',
            variant:  'error'
        });
        this.dispatchEvent(ErrorToast);
    }
    handleWarning(){
        let WarningToast = new ShowToastEvent({
            title: 'Warning',
            message: 'Warning Message',
            variant:  'warning'
        });
        this.dispatchEvent(WarningToast);
    }
    handleInfo(){
        let InfoToast = new ShowToastEvent({
            title: 'Info',
            message: 'Info Message',
            variant:  'info'
        });
        this.dispatchEvent(InfoToast);
    }
}