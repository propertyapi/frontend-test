const email = "archie+e2e@searchland.co.uk"
const password = "password"
const titleNumber = "NGL346031"
const popupTitle = "Title: NGL346031"
const planingNumber = "17"

describe("Auth", () => {
  it("email/passwork login sets the cookie and takes you to the dashbaord", () => {
    cy.visit("/login")

    cy.contains("Welcome back")

    cy.get('input[name="email"]').type(email).should("have.value", email)
    cy.get('input[name="password"]').type(password).should("have.value", password)
    cy.get("button[type='submit']").click()

    cy.url().should('contain', '?drawType&focus_view=Tool&')
    cy.contains("Control centre")

    cy.get("input[type='search']").click()
    cy.get("input[type='search']").type(titleNumber).should("have.value", titleNumber)
    cy.get("label.ant-radio-button-wrapper").eq(2).should("have.text", 'Title number')
    cy.get("label.ant-radio-button-wrapper").eq(2).click()

    cy.get("div.rc-virtual-list-holder-inner > div.ant-select-item").should('have.length', 1)
    cy.wait(3000);
    
    cy.get("div.rc-virtual-list-holder-inner > div.ant-select-item").eq(0).find("div.ant-select-item-option-content").should("contain", titleNumber)
    cy.get("div.rc-virtual-list-holder-inner > div.ant-select-item").eq(0).click()

    cy.contains(popupTitle)
    cy.get(`[aria-label="expand"]`).click()

    cy.get("div.ant-tabs-nav-list > div.ant-tabs-tab").eq(1).click();
    cy.wait(2000);
    cy.get("div.ant-tabs-nav-list > div.ant-tabs-tab").eq(1).find("sup").invoke('attr', 'title').then(function(val) {
        expect(val.trim()).equal(planingNumber)
    })
  })
})
