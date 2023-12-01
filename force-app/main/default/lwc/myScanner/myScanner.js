/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 11-25-2023
 * @last modified by  : Amit Singh
**/
import { LightningElement, track } from "lwc";
import { getBarcodeScanner } from "lightning/mobileCapabilities";

export default class MyScanner extends LightningElement {
  barcodeScanner;
  @track scannedBarcodes;

  connectedCallback() {
    this.barcodeScanner = getBarcodeScanner();
  }

  beginScanning() {
    // Set your configuration options, including bulk and multi-scanning if desired, in this scanningOptions object
    const scanningOptions = {
      barcodeTypes: [this.barcodeScanner.barcodeTypes.QR],
      scannerSize: "FULLSCREEN",
      cameraFacing: "BACK",
      showSuccessCheckMark: true,
      enableBulkScan: false,
      enableMultiScan: false,
    };

    // Make sure BarcodeScanner is available before trying to use it
    if (this.barcodeScanner != null && this.barcodeScanner.isAvailable()) {
      this.barcodeScanner
        .scan(scanningOptions)
        .then((results) => {
          this.processScannedBarcodes(results);
        })
        .catch((error) => {
          this.processError(error);
        })
        .finally(() => {
          this.barcodeScanner.dismiss();
        });
    } else {
      console.log("BarcodeScanner unavailable. Non-mobile device?");
    }
  }

  processScannedBarcodes(barcodes) {
    console.log(JSON.stringify(barcodes));
    this.scannedBarcodes = JSON.stringify(barcodes);
  }

  processError(error) {
    // Check to see if user ended scanning
    if (error.code == "USER_DISMISSED") {
      console.log("User terminated scanning session.");
    } else {
      console.error(error);
    }
  }
}