import { loginMethods } from "./loginpages/login.methods";
console.log('loginMethods:', loginMethods);
describe('template spec', () => {
  it('passes', { retries: 2 },  () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('a[data-target="#logInModal"]').click();
    loginMethods.login('username', 'password');
    cy.wait(10000);
  });
});