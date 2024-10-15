import { placerOrderElements } from "./placeorder.elements";

export class placeOrderMethods{
    
    static insertName(name){
        placerOrderElements.textboxes.name.invoke('val', name); 
    }

    static insertCountry(country){
        placerOrderElements.textboxes.country.invoke('val', country); 
    }

    static insertCity(city){
        placerOrderElements.textboxes.city.invoke('val', city); 
    }

    static insertCreditCard(creditCard){
        placerOrderElements.textboxes.creditCard.invoke('val', creditCard); 
    }

    static insertMonth(month){
        placerOrderElements.textboxes.month.invoke('val', month); 
    }

    static insertYear(year){
        placerOrderElements.textboxes.year.invoke('val', year); 
    }
    
    static clickOnCloseButton(){
        placerOrderElements.buttons.close.click();
    }

    static clickOnPurchaseButton(){
        placerOrderElements.buttons.purchase.click();
    }
}