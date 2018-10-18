describe('RealUp Test App: Thoughts2', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits Thoughts Page 2', function(){
        cy.visit('/thoughts2')
    })
    it("Clicks The Next button", function(){
        cy.visit('/thoughts2')
        cy.contains("Next").click();
    })
    it("Clicks The Back button", function(){
        cy.visit('/thoughts2')
        cy.get('#backbutton').click()
    })
})


