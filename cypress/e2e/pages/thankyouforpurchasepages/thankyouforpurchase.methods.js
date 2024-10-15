import { thankYouForPurchaseElements } from "./thankyouforpurchase.elements";

export class thankYouForPurchaseMethods{
    static clickOnOkButton(){
        thankYouForPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        thankYouForPurchaseElements.icons.greenCheckMark.should("exist");
    }
}