describe('RealUp Test App: Feelings3', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits Feelings Page 3', function(){
        cy.visit('/feelings3')
    })
    it("Clicks The START button", function(){
        cy.visit('/feelings3')
        cy.contains("START").click();
    })
    it("Clicks The Next button", function(){
        cy.visit('/feelings3')
        cy.contains("Next").click();
    })
    it("Clicks The Back button", function(){
        cy.visit('/feelings3')
        cy.get('#backbutton').click()
    })
})

