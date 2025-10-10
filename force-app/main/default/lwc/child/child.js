import { LightningElement } from 'lwc';

export default class Child extends LightningElement {

    handleFireEvent(){
        /** Step1 is Prepare the event */
       const dataEvent = new CustomEvent('datachange',{
            detail: {
                message: 'This is from child component',
                source: 'child'
            }
       });
       /** Step 2 - Fire the event */
       this.dispatchEvent(dataEvent);
    }
}