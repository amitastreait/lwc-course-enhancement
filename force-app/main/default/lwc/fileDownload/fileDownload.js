/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-26-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement } from 'lwc';
import { generateUrl } from 'lightning/fileDownload';
export default class FileDownload extends LightningElement {

    generateUrl() {
        let url =  generateUrl('0685g00000IH9hfAAD');
        console.log(url);
        window.open(url);
    }
}