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
    it("The Yes button leads to results3", function(){
        cy.visit('/results1')
        cy.contains("Yes").click()
        cy.url().should('eq', 'http://localhost:3000/results3')
    })
    it("Clicks The Not Really button", function(){
        cy.visit('/results1')
        cy.contains("Not Really").click()
    })
    it("The Not Really button leads to results2", function(){
        cy.visit('/results1')
        cy.contains("Not Really").click()
        cy.url().should('eq', 'http://localhost:3000/results2')
    })
    it("Clicks The Back button", function(){
        cy.visit('/results1')
        cy.get('#backbutton').click()
    })

})



