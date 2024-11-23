describe('My First Test', () => {  // this ia a test suite
    it('verify title positive', function() {   // this is one of the testcase
       cy.visit("https://opensource-demo.orangehrmlive.com/");
       cy.title().should('eq','OrangeHRM');
    })

    it('verify title negative', () => {   // this is one of the testcase
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      cy.title().should('eq','OrangeHRM123');
   })

  })