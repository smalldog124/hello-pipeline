describe('My First Test', function () {
    it('finds the content "type"', function () {
        cy.visit('http://localhost:4200')

        cy.get('#title').should(($div)=>{
            expect($div).to.contain('สวัสดี ชาวโลก')
        })
    })
})