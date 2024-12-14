describe('My First Test', () => {  // this ia a test suite
    it('File download test', function() {   // this is one of the testcase
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
     })

  })