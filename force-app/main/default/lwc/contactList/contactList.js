import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {
    contacts = [
        {
            "FirstName": "Amy",
            "LastName": "Taylor",
            "Title": "VP of Engineering",
            "Email": "amy@demo.net",
            "Phone": "4152568563",
            "Picture__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/people/amy_taylor.jpg"
        },
        {
            "FirstName": "Michael",
            "LastName": "Jones",
            "Title": "VP of Sales",
            "Email": "michael@demo.net",
            "Phone": "4158526633",
            "Picture__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/people/michael_jones.jpg"
        }
    ];

    handleCOntactSelected(event){
        console.log(event.detail);
    }
}