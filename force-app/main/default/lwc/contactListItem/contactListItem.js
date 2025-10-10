import { api, LightningElement } from 'lwc';

export default class ContactListItem extends LightningElement {
    @api contact;

    handleSelect(event){
        event.preventDefault();
        const selectEvent = new CustomEvent(
            'select', {
                detail: this.contact.Email,
                bubbles: true,
                composed: true
            },
            
        );
        this.dispatchEvent(selectEvent);
    }
}