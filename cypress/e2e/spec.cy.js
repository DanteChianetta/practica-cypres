import { homeData } from "./pages/homepages/home.data";
import { homeMethods } from "./pages/homepages/home.methods"; 

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    homeMethods.clickOnProductlink('Samsung galaxy s6');
    cy.wait(10000);
  });
});