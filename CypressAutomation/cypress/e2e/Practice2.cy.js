describe('Practice2 Testcase', () => {  // this ia a test suite
    it('Login to the application', function() {   // this is one of the testcase
       cy.visit("https://www.saucedemo.com/");
       //cy.title().should('eq','Swag Labs');
       cy.get("#user-name").type('standard_user')
       cy.get("#password").type('secret_sauce')
       cy.get("#login-button").click();
    })

    it('Add to cart', () => {   // this is one of the testcase
        cy.visit("https://www.saucedemo.com/");
        cy.title().should('eq','Swag Labs');
        cy.get("#user-name").type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get("#login-button").click();
        cy.title().should('eq','Swag Labs');
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
        cy.get(".shopping_cart_link").click();
   })

   it('Calculate the total', () => {   // this is one of the testcase
    cy.visit("https://www.saucedemo.com/");
    cy.title().should('eq','Swag Labs');
    cy.get("#user-name").type('standard_user')
    cy.get("#password").type('secret_sauce')
    cy.get("#login-button").click();
    cy.title().should('eq','Swag Labs');
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type('Moni')
    cy.get("#last-name").type("sha")
    cy.get("#postal-code").type("102022")
    cy.get("#continue").click();
    cy.get(".summary_total_label").should('be.eq','$43.18')
    cy.get("#finish").click();
    cy.get(".complete-header").should('be.eq','Thank you for your order!');
})

})

  //