describe('RealUp Test App: Results3', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it("Clicks The Back button", function(){
        cy.visit('/results3')
        cy.get('#backbutton').click()
    })
})


