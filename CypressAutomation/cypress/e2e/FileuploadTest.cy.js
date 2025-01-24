import 'cypress-file-upload';

describe('fileupload', ()=>{

  it('File upload test', ()=>{

      cy.visit("https://demo.automationtesting.in/Register.html")

      const myimagefile = "sample1.jpg"
      cy.get('#imagesrc').attachFile('sample1.jpg');

  })

  it('Mutiple file uploads', ()=>{

      cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
      cy.get("#filesToUpload").attachFile(['sample1.json', 'sample2.json']);
  })

})

// describe('File Download Test', () => {
//   it('should download a file', () => {
//     cy.task('downloadFile', {
//       url: 'https://example.com/sample.pdf',  // Replace with actual file URL
//       filePath: 'cypress/downloads/sample.pdf' // Path where the file will be saved
//     }).then((result) => {
//       cy.log(result);  // Log the success message
//     });
//   });
// });