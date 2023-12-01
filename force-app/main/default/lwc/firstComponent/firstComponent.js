/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-09-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/contactsList.getContact';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const actions = [
    { label: 'Detalles', name: 'details' },
    { label: 'Eliminar', name: 'delete' }
];

const columns = [
    {
        label: 'Nombre', fieldName: 'recordUrl', type: 'url', wrapText: true,
        typeAttributes: {
            label: { fieldName: 'Name' },
            target: '_blank'
        }
    },
    {
        label: 'Cuenta', fieldName: 'accountUrl', type: 'url', wrapText: true,
        typeAttributes: {
            label: { fieldName: 'ACCOUNT_NAME' },
            target: '_blank'
        },
        // cellAttributes: {
        //     iconName: 'standard:account',
        //     iconPsition: 'left',
        //     iconAlternativeText: 'Account Icon'
        // }
    },
    { label: 'Cargo', fieldName: 'Title', type: 'text', sortable: true, editable: true },
    { label: 'Telefono', fieldName: 'Phone', type: 'phone', sortable: true, editable: true },
    { label: 'Email', fieldName: 'Email', type: 'email', sortable: true, editable: true },
    {
        type: "button",
        fixedWidth: 150,
        typeAttributes: {
            label: 'Detalles',
            title: 'Detalles',
            name: 'viewDetails',
            value: 'viewDetails',
            variant: 'brand',
            class: 'scaled-down'
        }
    },
    {
        type: 'action',
        typeAttributes: { rowActions: actions }
    }
];
export default class FirstComponent extends LightningElement {
    contactData;
    columnList = columns;
    error;

    /* Attributes for Inline Editing */
    draftValues = [];

    /* Attributes for Selected Rows */
    selectedRows = [];
    selectRowsList = [];

    /* Attributes for Datatable Sorting */
    sortBy = 'Phone';
    sortDirection = 'asc';

    /* Attributes for refreshApex */
    refreshApexData;

    @wire(getContact)
    wiredData(result) {
        this.refreshApexData = result;
        //this.refreshApexData = result.data;
        if (result.data) {
            //console.log('Data ',data);
            let parsedData = JSON.parse(JSON.stringify(result.data));
            let baseUrl = 'https://' + location.host + '/';
            parsedData.forEach(contact => {
                if (contact.AccountId) {
                    contact.ACCOUNT_NAME = contact.Account.Name;
                    contact.recordUrl = baseUrl + contact.Id;
                    contact.accountUrl = baseUrl + contact.AccountId;
                    // contact.accountIcon  = 'standard:account';
                }
            });
            console.log('Modificacion Data ', parsedData);
            this.contactData = parsedData;
            this.error = undefined;
        } else if (result.error) {
            console.log('Error', result.error);
            this.contactData = undefined;
            this.error = result.error;
        }
    }

    handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;
        switch (action.name) {
            case 'details':
                alert('Detalles: ' + JSON.stringify(row));
                break;
            case 'delete':
                this.handleDelete(row.Id);
                break;
            case 'viewDetails':
                alert('Detalles: ' + row.Id);
                break;
        }
    }

    handleDelete(recordId) {
        alert('Registro Eliminado: ' + recordId);
    }

    handleSelectedRows(event) {
        let selectedRows = event.detail.selectedRows;
        selectedRows.forEach(currentItem => {
            this.selectRowsList.push(currentItem);
        });
        console.log(' SelectedRow ', selectedRows);
    }

    handleSortdata(event) {
        this.sortBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;
        this.sortData(event.detail.fieldName, event.detail.sortDirection);
    }

    sortData(fieldname, direction) {
        let parseData = JSON.parse(JSON.stringify(this.contactData)); //this.contactData
        let keyValue = (a) => {
            return a[fieldname];
        };
        let isReverse = direction === 'asc' ? 1 : -1;
        parseData.sort((x, y) => {
            x = keyValue(x) ? keyValue(x) : '';
            y = keyValue(y) ? keyValue(y) : '';

            return isReverse * ((x > y) - (y > x));
        });
        // if(a.numberField < b.numberField){
        //     return -1;
        // }if(a.numberField > b.numberField){
        //     return 1;
        // }
        this.contactData = parseData;
    }

    handleSave(event) {
        this.draftValues = event.detail.draftValues;
        console.log(' this.draftValues ', this.draftValues );
        const recordInputs = event.detail.draftValues.slice().map(draft => {
            const fields = Object.assign({},draft);
            return { fields };
        });
        window.console.log(JSON.stringify(event.detail.draftValues));
        console.log(' recordsInputs ', recordInputs);
        const promises = recordInputs.map(recordInput => updateRecord(recordInput));
        //window.console.log(' promises ', promises);
        Promise.all(promises).then(contacts => {
            this.draftValues = [];
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Contact Record Updated',
                variant: 'success'
            }));
            
            return refreshApex(this.refreshApexData);
        }).catch(error => {
            console.error('Error occured ', error)
        });
    }
}