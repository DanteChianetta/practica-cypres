import { CommonPageElements } from "./commonpage.elements";

export class commonPageMethods{    
    static navigateToDemoBlaze() {
        cy.visit(commonPageMethods.url);
    }
    
    static clickOnHomeOption() {
        CommonPageElements.topMenu.home.click();
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    } 

    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }
 
    static clickOnLogInOption(){
        CommonPageElements.topMenu.logIn.click();
    }

    static clickOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click();
    }
}