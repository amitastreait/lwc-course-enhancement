/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-09-2023
 * @last modified by  : Amit Singh
**/
public with sharing class contactsList {
 
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(){
        List<Contact> contactList = new List<Contact>();
        try {
            contactList = [SELECT Id,Name,Title,Account.Name,Phone,Email
                            FROM Contact
                            LIMIT: 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return contactList;
    }
}