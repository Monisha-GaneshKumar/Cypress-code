describe('QaOncloud website Testcases',()=>{

    it('Verify the Header Image of the page is visible in QaOncloud', function() {   // this is one of the testcase
        cy.visit("https://www.qaoncloud.com/");
        cy.get("[alt='QAonCloud Logo']").should('be.visible')
        cy.get("[alt='QAonCloud Logo']").should('exist')
     })

     it('Validate the URL of QaonCloud', function() {   // this is one of the testcase
        cy.visit("https://www.qaoncloud.com/");
        cy.url().should('include','qaoncloud.com')
        cy.url().should('eq','https://www.qaoncloud.com/')
        cy.url().should('contain','qaoncloud')
     })

     it('Verify how many ReadMore btns are there in QaonCloud website', function() {   // this is one of the testcase
        cy.visit("https://www.qaoncloud.com/");
        cy.xpath("//div[@class='imp-shape  imp-shape-rect']").should('have.length','13')
     })

     it('Verify Avanti Finance logo is showing in the Global presence map', function() {   // this is one of the testcase
        cy.visit("https://www.qaoncloud.com/");
        cy.xpath("//img[@src='https://www.qaoncloud.com/public/assets/wp/wp-content/uploads/2022/11/Avanti-2.png']").should('be.visible')
        cy.xpath("//img[@src='https://www.qaoncloud.com/public/assets/wp/wp-content/uploads/2022/11/Avanti-2.png']").should('exist')
     })

     it('Verify the user is navigated to the Functional testing page by checking the title', function() {   // this is one of the testcase
        cy.visit("https://www.qaoncloud.com/");
        cy.get("div#rect-5447").click();
        cy.title().should('be.eq',' Functional Testing Services ')
     })

     it('Verify the Footer contains "QAonCloud is a business unit of Desicrew Solutions Pvt.Ltd"', function() {   // this is one of the testcase
        cy.visit("https://www.qaoncloud.com/");
        cy.get("h5[class='elementor-heading-title elementor-size-default']").contains("QAonCloud is a business unit of Desicrew Solutions Pvt.Ltd");
     })

})

//a[@href='https://www.qaoncloud.com/contact-us']

//img[@src='https://www.qaoncloud.com/public/assets/wp/wp-content/uploads/2022/11/Avanti-2.png']



 