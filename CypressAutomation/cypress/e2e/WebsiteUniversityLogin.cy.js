Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
})
describe('Webdriver university login page',function()
   {
    it('Automate Login page',function()
{
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html?')
    cy.get('#text').type('Monisha').should('be.visible')
    cy.get('#password').type('Moni@090301').should('be.visible')
    cy.get('#login-button').click()
})
})