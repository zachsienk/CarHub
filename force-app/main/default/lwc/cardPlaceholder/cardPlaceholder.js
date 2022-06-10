import { LightningElement, api } from 'lwc';
/*static recsource*/
import CAR_HUB_PLACEHOLDER from '@salesforce/resourceUrl/placeholder'
export default class CardPlaceholder extends LightningElement {
    @api message

    placeholderUrl = CAR_HUB_PLACEHOLDER
}