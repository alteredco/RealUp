describe('RealUp Test App: Home3', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits RealUp Home Page 3', function(){
        cy.visit('/home3')
    })
    it("Clicks The Impostor Thoughts button", function(){
        cy.visit('/home3')
        cy.contains("Impostor Thoughts").click()
    })
    it("The Impostor Thoughts button leads to thoughts1", function(){
        cy.visit('/home3')
        cy.contains("Impostor Thoughts").click()
        cy.url().should('eq', 'http://localhost:3000/thoughts1')
        
    })
    it("Clicks The Impostor Feelings button", function(){
        cy.visit('/home3')
        cy.contains("Impostor Feelings").click()
    })
    it("The Impostor Feelings button leads to feelings1", function(){
        cy.visit('/home3')
        cy.contains("Impostor Feelings").click()
        cy.url().should('eq', 'http://localhost:3000/feelings1')
        
    })
    it("Clicks The Back button", function(){
        cy.visit('/home3')
        cy.get('#backbutton').click()
    })

})


