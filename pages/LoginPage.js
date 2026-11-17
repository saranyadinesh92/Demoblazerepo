export class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.loginLink=page.locator('#login2')
        this.usernameField=page.locator('#loginusername')
        this.passwordField=page.locator('#loginpassword')
        this.loginButton=page.locator('button[onclick="logIn()"]')
        this.logoutLink=page.locator('#logout2')
    }
async login(username,password)
{
    await this.loginLink.click()
    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.loginButton.click()
}
async openApplication()
{
    await this.page.goto('https://www.demoblaze.com/')
}

async logOut()
{
    await this.logoutLink.click()
}
}