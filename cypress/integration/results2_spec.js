describe('RealUp Test App: Results2', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits Results Page 2', function(){
        cy.visit('/results2')
    })
    it("Clicks The Next button", function(){
        cy.visit('/results2')
        cy.contains("Next").click();
    })
    it("Clicks The Back button", function(){
        cy.visit('/results2')
        cy.get('#backbutton').click()
    })
})


