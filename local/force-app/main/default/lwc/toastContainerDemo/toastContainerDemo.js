/**
 * @description       : 
 * @author            : as00752382@techmahindra.com
 * @group             : 
 * @last modified on  : 01-08-2023
 * @last modified by  : as00752382@techmahindra.com
 * Modifications Log
 * Ver   Date         Author                        Modification
 * 1.0   31-07-2023   as00752382@techmahindra.com   Initial Version
**/
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ToastContainer from 'lightning/toastContainer';
export default class ToastContainerDemo extends LightningElement {
    value = 'top-center';
    values = 'success';
    value1 = 'sticky';
get options(){
    return[
        {label:'None', value:'none'},
        {label:'Top Center', value:'top-center'},
        {label:'Top Right', value:'top-right'},
        {label:'Top Left', value:'top-left'},
        {label:'Bottom Center', value:'bottom-center'},
        {label:'Bottom Right', value:'bottom-right'},
        {label:'Bottom Left', value:'bottom-left'},
    ];
}
get Variant(){
    return[
        { label: 'Error', value: 'error' },
        { label: 'Warning', value: 'warning' },
        { label: 'Success', value: 'success' },
        { label: 'Info', value: 'info' },
    ];
}
get duration(){
    return[
        {label: 'sticky', value:'sticky'},
        {label: 'dismissable', value: 'dismissable'}
    ]
}
handleChange(event){
    this.value = event.detail.value;
}
handleVariant(event){
    this.values = event.detail.value;
}
handleDuration(event){
    this.value1 = event.detail.value;
}
showSuccessToast(){
    const toastContainer = ToastContainer.instance();
    toastContainer.maxShown = 10;
    toastContainer.toastPosition = this.value;
    const evt = new ShowToastEvent({
        title: "sample title",
        message: "sample message data",
        variant: this.values,
        mode: this.value1,//'dismissable',
        duration : '50000'
    }); 
    this.dispatchEvent(evt);
}
}