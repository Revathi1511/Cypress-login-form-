describe('Login page app', function() {

  var filename = "./index.html";

  var firstname = "Revathi"
  var password = "12345678"

  describe('Entering username 1', function () {

    it('should load the page', function () {
      cy.visit(filename);                              //3
    })

    it("Should accept user first name", () => {
      cy.get('input[name="username__field"]').type(firstname).should('have.value', "Revathi")
      cy.get('input[name="password__field"]').type(password).should('have.value', "12345678")
      cy.get('#formName').submit()
      cy.get("#output").should('be.visible')
      //cy.get('input[name="submit"]').click();
    })

  });
  //test to fail
  it('should load the page', function () {
    cy.visit(filename);
  })
  it("should have focus for empty username", function () {
    cy.get('input[name="username__field"]').click()
    cy.get('#username').should('have.focus', 'have.login__txt_error', 'background:red')  //2
  })
  it('should load the page', function () {
    cy.visit(filename);
  })

  it("should have focus for empty password", () => {
    cy.get('input[name="password__field"]').click()
    cy.get('#password').should('have.focus', 'have.login__txt_error', 'background:red')  //1
  })

  describe("submit form", ()=>{
    it('should submit the form', ()=>{
      cy.get('#formName').submit()

    })
    it('should display hidden output div', ()=>{
      cy.get('#output').should('be.visible')
    })
  })
})



