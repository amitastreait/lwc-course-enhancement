/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, api } from 'lwc';

export default class OrgBasedDeployment extends LightningElement {
    @api name;
    @api location;
    @api age;
}