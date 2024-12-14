context('Page Responsiveness Test', ()=>{
    it('Twitterlogin Page-Desktop',()=>{
        cy.visit("/explore");
        cy.get('[href=/login]').click()
        cy.get('[name="session[username_or_email]').should('be.visible')
    })

    it('Twitterlogin Page-Iphone-x',()=>{
        cy.viewport('samsung-note9')
        cy.visit("/explore");
        cy.get('[href=/login]').click()
        cy.get('[name="session[username_or_email]').should('be.visible')
    })
})