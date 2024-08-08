import { loginElements } from "./login.elements";

export class loginMethods{
    static insertUserName(username){
        loginElements.textboxes.username.type(username);
    }

    static insertPassword(password){
        loginElements.textboxes.password.type(password);
    }

    static clickOnLoginButton(){
        loginElements.buttons.login.click();
    }

    static clickOnCloseButton(){
        loginElements.buttons.close.click();
    }

    static login(username, password){
        this.insertUserName(username);
        this.insertPassword(password);
        this.clickOnLoginButton();
    }
}