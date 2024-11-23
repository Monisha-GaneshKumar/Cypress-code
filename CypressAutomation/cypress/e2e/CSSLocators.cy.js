

describe('CSSLocators', ()=>{
    it('CSSLocators test', function() {  
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#search_query_top").type("T-Shirts");
        cy.get("[name = 'submit_search']").click();
        cy.get(".lighter").contains("T-Shirts"); 
     })

     it('Xpath test , to find no of prds', function() {  
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#search_query_top").type("T-Shirts");
        cy.get("[name = 'submit_search']").click();
        cy.xpath("//ul[@class='block_content products-block']/li").should('have.length',6) // this is an assertion
     })

     it('chained Xpath test , to find no of prds', function() {  
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#search_query_top").type("T-Shirts");
        cy.get("[name = 'submit_search']").click();
        cy.xpath("//ul[@class='block_content products-block']").xpath("./li").should('have.length',6) // this is an assertion
     })
})

