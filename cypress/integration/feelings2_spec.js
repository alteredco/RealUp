describe('RealUp Test App: Feelings2', function(){
    it('Test cypress Works!', function(){
    expect(true).to.equal(true)
    })
    it('Visits Feelings Page 2', function(){
    cy.visit('/feelings2')
    })
    it("Clicks The Next button", function(){
    cy.visit('/feelings2')
    cy.contains("Next").click();
    })
    it("Clicks The Back button", function(){
    cy.visit('/feelings2')
    cy.get('#backbutton').click()
    })
    })
    





