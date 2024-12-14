describe('Alerts',()=>{
    it('Simple Alert',()=>{
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes");
        cy.get("#alert").click()

        cy.on('window:alert',(t)=>{ // t is the alert
            expect(t).to.contains("I'm an Alert Box")
        })  //to trigger the alert event
        //this is how we have to write for alert
        //alert window is automatically closed by cypress using OK btn   

    })

    it('Multiple Alert',()=>{
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes");

        const fn = cy.stub()
        cy.on('window:alert', fn)
        cy.get("#miltiplealert").click().then(()=>{
            expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box')
            expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')
        })
        //stud is used to sync
        //to trigger the alert event
        //this is how we have to write for alert
        //alert window is automatically closed by cypress using OK btn   

        it('confirm Alert',()=>{
            cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes");
            cy.get("button#confirm").click()
     
            cy.on('window:confirm',(t)=>{ // t is the alert
                expect(t).to.contains("I'm a Confirm Box")
            })  //to trigger the alert event
            //this is how we have to write for confirm alert
            //alert window is automatically closed by cypress using OK btn   
        })


        it('prompt Alert',()=>{
            cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes");
     
            //we have to get control on the prompt window before clicking the btn
            cy.window().then((win)=>{
                cy.stub(win,'prompt').clear().returns('Moni')
            })
            //this is how we have to write for prompt alert
            cy.get("button#prompt").click()
            cy.get("//div[@id='confirmdiag']").should('have.text','PROMPT - Hello Moni! How are you today?')
        })

    })
})