describe('Drag and Drop', () => {  // this ia a test suite
    it('Drag and drop testing', function() {   // this is one of the testcase
       cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
       cy.get('#box3').drag('#box103')
    })
  })