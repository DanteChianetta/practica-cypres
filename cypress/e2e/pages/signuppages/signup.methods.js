import { signUpElements } from "./signup.elements";

export class signUpMethods{
    static insertUsername(username) {
        signUpElements.textboxes.username.invoke('val', username);
    }

    static insertPassword(password){
        signUpElements.textboxes.password.invoke('val', password);
    }

    static clickOnSignupButton(){
        signUpElements.buttons.signup.click();
    }

    static signup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignupButton();
    }
}   