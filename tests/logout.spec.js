import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../Utils/testdata.json' with{type:'json'}
test('Login and logout',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    await loginpage.login(loginData.validUser.username,loginData.validUser.password)
    await expect(page.locator('#nameofuser')).toContainText('Welcome')
    await loginpage.logOut()
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
})