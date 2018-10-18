describe('RealUp Test App', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits RealUp Home Page', function(){
        cy.visit('/feelings3')
    })
    it("Clicks The Let's Get Stated button", function(){
        cy.visit('/')
        cy.contains("LET'S GET STARTED").click();
    })
})


