export class SignUpPage
{
    constructor(page)
    {
        this.page=page
        this.signupLink=page.locator('#signin2')
        this.usernameField=page.locator('#sign-username')
        this.passwordField=page.locator('#sign-password')
        this.signupButton=page.locator('button[onclick="register()"]')
        this.closeButton=page.locator('#signInModal button[data-dismiss="modal"]').last()
    }
    async openApplication()
    {
        await this.page.goto('https://www.demoblaze.com/')
    }
    async openSignup()
    {
        await this.signupLink.click()
    }
    async enterDetails(username,password)
    {
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
    }
    async submitSignup()
    {
        await this.signupButton.click()
    }
    async closeSignup()
    {
        await this.closeButton.click()
    }
}