describe('Intercept Network req', () => {  // this ia a test suite
 beforeEach(() =>{
    cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept");
 })
 

    it('GET request', function() {   // this is one of the testcase
      cy.server();
      cy.route("/users?*").as("users");
      cy.get("#loadThreeUsersXHR").click();
      cy.wait("@users")
      .its("status")
      .should("be.eq",200)

      cy.get("#xhrusers > tbody >tr").should("have.length",3)
    })

    it('POST request', () => {   // this is one of the testcase
        cy.server();
        cy.route("POST","/users").as("users");
        const user = {
            name:"Avi",
            email:"a.b@c.com"
        };
        cy.get("#xhrname").type(user.name);
        cy.get("#xhremail").type(user.email);
        cy.get("xhrbtn").click();

        cy.wait("@users").then((xhr) =>{
            expect(xhr.status).to.eql(201);
            expect(xhr.response.body.name).to.eql(user.name);
            expect(xhr.response.body.email).to.eql(user.email);
        });
        cy.get("#xhrspan").should("contain.text", '${user.name} - ${user.email}')
   });

  })