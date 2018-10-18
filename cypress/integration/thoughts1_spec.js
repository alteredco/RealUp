describe('RealUp Test App; Thoughts1', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits Thoughts Page 1', function(){
        cy.visit('/thoughts1')
    })
    it("Clicks The I'm Ready button", function(){
        cy.visit('/thoughts1')
        cy.contains("I'm Ready").click()
    })
    it("Clicks The Back button", function(){
        cy.visit('/thoughts1')
        cy.get('#backbutton').click()
    })

})


