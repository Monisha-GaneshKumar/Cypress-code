const price = 299;

describe('Flipkart application',function(){
   
    
   beforeEach(function(){
            cy.visit('https://www.flipkart.com/', { failOnStatusCode: false });
            cy.url().should('include', 'flipkart');
            cy.title().should('include', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');  
        });  

it('Login',function(){
    cy.get('._1jKL3b').should('exist').click({ force: true });          
    cy.get('.azBkHf').should('be.visible').click({ force: true });      
    cy.wait(2000);
    cy.get("a[class='QqFHMw twnTnD OD+dVw']").should('be.visible').click({ force: true });     
    cy.get('.r4vIwl').should('be.visible').type("9080066019");      
    cy.get('.QqFHMw').should('be.visible').click();                     
    })

it.skip('Register',function(){
        cy.get('._1jKL3b').should('exist').click({ force: true });          
        cy.get('.azBkHf').should('be.visible').click({ force: true });     
        cy.wait(2000);
        cy.get("a[class='QqFHMw twnTnD OD+dVw']").should('be.visible').click({ force: true });      
        cy.get('.r4vIwl').should('be.visible').type("9080066019");       
        cy.get('.QqFHMw').should('be.visible').click();                     
        })

it('Visit home page',function(){
    cy.wait(3000);
    cy.get("a[aria-label='Kilos'] div div[class='YBLJE4']").should('exist');
    cy.get("a[aria-label='Mobiles'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Fashion'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Electronics'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Home & Furniture'] div div[class='YBLJE4']").should('exist');
    cy.get("a[aria-label='Appliances'] div div[class='YBLJE4']").should('exist');
    cy.get("a[aria-label='Flight Bookings'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Beauty, Toys & More'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Two Wheelers'] div div[class='YBLJE4']").should('exist');
    cy.get("input[placeholder='Search for Products, Brands and More']").should('exist');
})

});