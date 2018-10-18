describe('RealUp Test App', function(){
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
    it("Clicks The Impostor feelings button", function(){
        cy.visit('/home3')
        cy.contains("Impostor Feelings").click()
    })
})


