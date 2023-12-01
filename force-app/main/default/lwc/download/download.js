/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-26-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement } from "lwc";
import { generateUrl } from "lightning/fileDownload";

export default class Download extends LightningElement {
  recordId = '0685g00000IH9hfAAD';
  url;

  handleClick() {
    this.url = generateUrl(this.recordId);
    console.log(this.url);
    window.open(this.url);
  }
}