import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import CAR_OBJECT from '@salesforce/schema/Car__c'

//***car schema */ 
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'

//constants
const CATEGORY_ERROR = 'Error loading categories'
const MAKE_ERROR = 'Error loading make'
export default class CarFilter extends LightningElement {

    //create an object to use to store the values in from the HTML
    filters={
        searchKey:'',
        maxPrice:999999
    }
    cateogryError = CATEGORY_ERROR;
    makeError = MAKE_ERROR;

    //***fetching Category picklist */
    @wire(getObjectInfo, {objectApiName:CAR_OBJECT})
    carObjectInfo

    @wire(getPicklistValues, {
        recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName: CATEGORY_FIELD
    })categories

     //***fetching Make picklist */
    @wire(getPicklistValues, {
         recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
         fieldApiName: MAKE_FIELD
     })makeType




    /*** search key handler ***/
    handleSearchKeyChange(event){
        console.log(event.target.value)
        this.filters ={...this.filters, "searchKey":event.target.value}
    }


    /*** price change handler ***/
    handleMaxPriceChange(event){
        console.log(event.target.value)
        this.filters = {...this.filters, "maxPrice":event.target.value}
        "test"

    }


    handleCheckbox(event){
        const {name, value} = event.target.dataset
        console.log("name", value)
        console.log("value", name)

    }
}