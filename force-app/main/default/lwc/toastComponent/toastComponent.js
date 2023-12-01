/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement } from 'lwc';
import Toast from 'lightning/toast';
import ToastContainer from 'lightning/toastContainer';
export default class ToastComponent extends LightningElement {

    connectedCallback() {
        const toastContainer = ToastContainer.instance(); // creating the toast container object
        toastContainer.maxToasts = 5;
        toastContainer.toastPosition = 'top-left'; // top-left , bottom-right, bottom-left, top-center, bottom-center
    }

    handleSuccess(event){
        let toastObj = {
            label: 'This is a toast title with a {0} placeholder link that gets replaced by labelLinks {1} and {2}',
            labelLinks : [
                {'url': 'https://www.pantherschools.com', 'label': 'PantherSchools.com' },
                { url : 'https://google.com', label: 'Google.com' }, 
                { url: 'https://twitter.com', label: 'twitter.com' }
            ],
            message: 'This message has a {0} placeholder link that gets replaced by from messageLinks',
            messageLinks: [{
                url: 'http://www.salesforce.com',
                label: 'Salesforce.com'
            }],
            mode: 'sticky',
            variant: 'success',
            onclose: () => {
               alert('Closed toast title');
            }
        };
        Toast.show(toastObj, this);
    }
}