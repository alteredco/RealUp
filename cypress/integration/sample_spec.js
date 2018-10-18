describe('My First Test', function(){
    it('Visits the Kitchen Sink', function(){
        cy.visit('https://github.com/alteredco/RealUp/blob/master/public/index.html')
    })
})

describe('My First Test', function(){
    it('Does not do much!', function(){
        expect(true).to.equal(false)
    })
})