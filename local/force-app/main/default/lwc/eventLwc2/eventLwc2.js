import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';


export default class EventLwc2 extends LightningElement {
    sfdcElement;
    connectedCallback(){
        // window.addEventListener("refreshProduct", this.receiveEvent.bind(this));
        this.receiveEvent();
    }
    receiveEvent(){
        pubsub.subscribe('componentA', (sfdcElement)=>{
            this.sfdcElement = sfdcElement
        })
        console.log(this.sfdcElement, "componentA data")
    }
}