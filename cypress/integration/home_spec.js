describe('RealUp Test App: Home', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits RealUp Home Page', function(){
        cy.visit('/')
    })
    it("Clicks The Let's Get Stated button", function(){
        cy.visit('/')
        cy.contains("Let's Get Started").click()
    })
})


