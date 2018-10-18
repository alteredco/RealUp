describe('RealUp Test App: Feelings1', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits Feelings Page 1', function(){
        cy.visit('/feelings1')
    })
    it("Clicks The I'm Ready button", function(){
        cy.visit('/feelings1')
        cy.contains("I'm Ready").click()
    })
    it("Clicks The Back button", function(){
        cy.visit('/feelings1')
        cy.get('#backbutton').click()
    })

})





