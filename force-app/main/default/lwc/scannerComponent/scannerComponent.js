/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-26-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement } from 'lwc';

import { getBarcodeScanner } from "lightning/mobileCapabilities";

export default class ScannerComponent extends LightningElement {

    barcodeScanner;
    scannedBarCodeResult;

    connectedCallback(){
        this.barcodeScanner = getBarcodeScanner();
    }

    handleBeginScanning(){
        // Prepare Scanner Options
        const scanningOptions = {
            barcodeTypes: [this.barcodeScanner.barcodeTypes.QR],
            scannerSize: "FULLSCREEN",
            cameraFacing: "BACK",
            showSuccessCheckMark: true,
            enableBulkScan: false,
            enableMultiScan: false,
        };

        if(this.barcodeScanner != null && this.barcodeScanner.isAvailable()) { 
            // start scanning
            this.scannedBarCodeResult = '';
            this.barcodeScanner.scan(scanningOptions)
            .then((result) => {
                // call the apex
                // create an object
                // call an API
                result.forEach( (item) => {
                    this.scannedBarCodeResult += item.value;
                });
                //this.scannedBarCodeResult = JSON.stringify(result);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // dismiss the scanner
                this.barcodeScanner.dismiss();
            });
        } else {

        }
    }

}