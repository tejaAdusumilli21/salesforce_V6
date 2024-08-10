import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class EventsLwc1 extends LightningElement {
    sfdcElement = { tab: "msisdn", section: "editphonebook" };//"msisdn";

    connectedCallback(){
        this.sendEvent();
    }
    sendEvent(){
        pubsub.publish('componentA', this.sfdcElement)
        let data = JSON.stringify({ tab: "msisdn", section: "editphonebook" });
        console.log(data, "teja data");
       // this.sfdcElement.dispatchEvent(new CustomEvent("refreshProduct", { detail: data }));
    // Dispatches the event.
   // this.dispatchEvent
      //  const selectedEvent = new CustomEvent("selected", { detail: 'teja'});

    
    }
}