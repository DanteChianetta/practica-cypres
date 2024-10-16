import { Logger } from "../../util/logger";
import { loginElements } from "./login.elements";

export class loginMethods{
    static insertUserName(username){
        loginElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        loginElements.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton(){
        loginElements.buttons.login.click();
    }

    static clickOnCloseButton(){
        loginElements.buttons.close.click();
    }

    static login(username, password){
        Logger.SubStep('Insert username')
        this.insertUserName(username);
        Logger.SubStep('Insert password')
        this.insertPassword(password);
        Logger.SubStep('Click on Login button')
        this.clickOnLoginButton();
    }
}