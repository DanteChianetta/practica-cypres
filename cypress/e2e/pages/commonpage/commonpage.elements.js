import cypress from "cypress";

export class CommonPageElements{
    static get topMenu(){
        return {
            get home(){
                cy.contains('a', 'Home');
            },
            get contact(){
                return cy.contains('a', 'contact');
            },
            get aboutUs(){
                return cy.contains('a', 'About us');
            },
            get cart(){
                return cy.contains('a', 'cart');
            },
            get logIn(){
                return cy.contains('a', 'Log in');
            },
            get signUp(){
                return cy.contains('a', 'Sign up');
            },
        };
    }
}