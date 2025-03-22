Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
})
describe('Webdriver university contact us',function()
   {
       it('Automate contact us page',function()
       {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#nav-title').click()
        cy.go('back')
        cy.get('#contact_form > input:nth-child(1)').type('Monisha').should('be.visible')
        cy.get('#contact_form > input:nth-child(2)').type('Ganesh').should('be.visible')
        cy.get('#contact_form > input:nth-child(3)').type('Monisha@gmail.com').should('be.visible')
        cy.get('#contact_form > textarea').type('Contacted to get more info about the site')       
        cy.get('[type="submit"]').click()
        cy.url().should('eq','https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')       })

       it('Reset', function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#contact_form > input:nth-child(1)').type('Monisha').should('be.visible')
        cy.get('#contact_form > input:nth-child(2)').type('G').should('be.visible')
        cy.get('#contact_form > input:nth-child(3)').type('Monisha@mail.com').should('be.visible')
        cy.get('#contact_form > textarea').type('contact us for the queries')
        cy.get('[type="reset"]').click()
        
       })

   })