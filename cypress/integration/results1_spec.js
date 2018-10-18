describe('RealUp Test App: Results1', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits Results Page 1', function(){
        cy.visit('/results1')
    })
    it("Clicks The Yes button", function(){
        cy.visit('/results1')
        cy.contains("Yes").click()
    })
    it("Clicks The Not Really button", function(){
        cy.visit('/results1')
        cy.contains("Not Really").click()
    })
    it("Clicks The Back button", function(){
        cy.visit('/results1')
        cy.get('#backbutton').click()
    })

})



