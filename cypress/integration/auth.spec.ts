import * as faker from "faker"

const email = "archie+e2e@searchland.co.uk"
const password = "password"
const phoneNumber = faker.phone.phoneNumber("+447#########")

const searchInput = "#rc_select_0"
const titleNumber = "NGL346031"
const itemResult = ".ant-select-item-option-content"
const miniBox = ".cGRMtF"
const exitButton = ".eBjfwp"
const expandButton = ".jRxqFG > .anticon > svg"
const planningTab = "#rc-tabs-0-tab-2"
const planningCount = "#rc-tabs-0-tab-2 > .ant-badge > .ant-scroll-number"
const building =
  '[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]'

describe("Auth", () => {
  before(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.clearCookies({ domain: null })
  })
  it("email/password signup sets the cookie and takes you to the complete signup page", () => {
    cy.visit("/signup")

    // cy.get("[data-cy='signupPage']").should("have.length", 1)

    // cy.intercept("POST", "/graphql", (req) => aliasMutation(req, "signup"))
    cy.get('input[name="name"]').type("Cypress Test").should("have.value", "Cypress Test")
    cy.get('input[name="email"]').type(email).should("have.value", email)
    cy.get('input[name="password"]').type(password).should("have.value", password)
    cy.get('input[name="pendingPhoneNumber"]').type(phoneNumber)
    cy.get("button[type='submit']").click()

    // cy.wait("@gqlsignupMutation").its("response.body.data.signup").should("have.property", "id")

    // cy.getCookie("token")
    //   .then((cookie) => cy.log("cookie", cookie))
    //   .should("exist")

    // cy.get("[data-cy='completeAccount']").should("have.length", 1)
  })

  it("email/passwork login sets the cookie and takes you to the dashbaord", () => {
    cy.visit("/login")

    cy.contains("Welcome back")

    /**
     * Set up to allow us to wait for the login request to complete later in the test
     */
    // cy.intercept("POST", "/graphql", (req) => aliasMutation(req, "login"))

    cy.get('input[name="email"]').type(email).should("have.value", email)
    cy.get('input[name="password"]').type(password).should("have.value", password)
    cy.get("button[type='submit']").click()

    // cy.wait("@gqlloginMutation").its("response.body.data.login").should("have.property", "id")

    // cy.getCookie("token").should("exist")

    // cy.get("[data-cy='completeAccount']").should("have.length", 1)
  })
  })
})
