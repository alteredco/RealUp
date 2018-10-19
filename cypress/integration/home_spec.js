describe('RealUp Test App:Home', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits RealUp Home Page ', function(){
        cy.visit('/')
    })
    it("Clicks The Let's Get Started button", function(){
        cy.visit('/')
        cy.contains("Let's Get Started").click()
    })
    it("The Let's Get Started button leads to home3", function(){
        cy.visit('/')
        cy.contains("Let's Get Started").click()
        cy.url().should('eq', 'http://localhost:3000/home3')
        
    })
})


