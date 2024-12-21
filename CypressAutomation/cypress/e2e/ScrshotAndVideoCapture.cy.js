describe('Srcshot & video capture', () => {  // this ia a test suite
    it('Capture screenshot & videos', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.screenshot("homepage")
        cy.wait(5000);
        cy.title().should('eq','OrangeHRM');
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Password']").type('admin123')
        cy.get("[type='submit']").click();
        cy.get(".oxd-topbar-header-title").screenshot("Dashboard")
    })

    it('Take a srcshot during error', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM');
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Password']").type('admin123')
        cy.get("[type='submit']").click();
        cy.get(".oxd-topbar-header-title").should("have.text","PIM")
    })
  })