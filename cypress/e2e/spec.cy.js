import { cartMethods } from "./pages/cartpages/cart.methods";
import { homeData } from "./pages/homepages/home.data";
import { homeMethods } from "./pages/homepages/home.methods"; 

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.wait(30000)
    cartMethods.clickOnDeleteLink('Nokia lumia 1520')
    cy.wait(30000)
  })
})