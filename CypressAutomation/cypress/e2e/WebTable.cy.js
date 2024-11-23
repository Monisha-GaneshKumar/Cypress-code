describe('Handle tables',(()=> {

    beforeEach('Login',()=>{
       cy.wait(3000)
       cy.visit("https://demo.opencart.com/admin/index.php?route=common/login");
       cy.wait(3000)
       // cy.get("#input-username").type('demo')
       // cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click();
       // cy.get(".btn-close").click();
        cy.get("#menu-customer>a").click(); //customer main menu
        cy.get("#menu-customer>ul>li:first-child").click()
        
    })

    it('Check Number Rows & Columns', function() {   // this is one of the testcase
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('not.have.length','7');
     })

     it('Check cell data from specific row & column', function() {   // this is one of the testcase
      cy.wait(3000)
      cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
      cy.wait(3000)
      .contains("minhkhoi@gmail.com");
     })

     it('Read all the rows & columns data in the first page', function() {   // this is one of the testcase
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")    
        .each(($row, index , $rows) => {
            cy.wrap($row).within( ()=>{
               cy.get("td").each(($col, index , $cols)=>{
                  cy.log($col.text())
               })
            })
        })  
     })

     it('Pagination', function() {   // this is one of the testcase
            //find total no of pages
            let totalPages;
            cy.get(".col-sm-6.text-end").then((e)=>{
                let mytext = e.text(); //showing only 1 -10
                totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
                cy.log("Total number of pages in a table=======>"+totalPages);
            })           
     })
}))