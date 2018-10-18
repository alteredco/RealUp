describe('RealUp Test App:Home2', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits RealUp Home Page 2', function(){
        cy.visit('/home2')
    })
    it("Clicks The Let's Get Started button", function(){
        cy.visit('/home2')
        cy.contains("Let's Get Started").click()
    })
    it("Clicks The Back button", function(){
        cy.visit('/home2')
        cy.get('#backbutton').click()
    })
})


