import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ToastContainer from 'lightning/toastContainer';
export default class ShowToastComponent extends LightningElement {
    variant = 'success';
    mode = 'dismissable';
    position = 'top-left';
    positionOptions = [
            { label: 'Top Left', value: 'top-left' },
            { label: 'Top Center', value: 'top-center' },
            { label: 'Top Right', value: 'top-right' },
            { label: 'Bottom Left', value: 'bottom-left' },
            { label: 'Bottom Center', value: 'bottom-center' },
            { label: 'Bottom Right', value: 'bottom-right' }
    ];
    toastContainerObj = ToastContainer.instance();
    positionChange(event){
        this.position = event.target.value;
        this.toastContainerObj.maxShown = 5;
        this.toastContainerObj.toastPosition = this.position;
    }
    get variantOptions() {
        return [
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'error', value: 'error' },
            { label: 'warning', value: 'warning' }
        ];
    }
    get modeOptions() {
        return [
            { label: 'dismissable', value: 'dismissable' },
            { label: 'sticky', value: 'sticky' }
        ];
    }
    handleModeChange(event) {
        this.mode = event.detail.value;
    }
     handleVariantChange(event) {
        this.variant = event.detail.value;
    }
showToast() {
    const event = new ShowToastEvent({
        title: 'selected Toast Type and Mode' ,
        message: 'Selected variant:: ' + this.variant + ' selected Mode:: ' + this.mode + ' selected Position:: ' + this.position ,
        variant: this.variant,
        mode: this.mode,
    });
    this.dispatchEvent(event);
}
}