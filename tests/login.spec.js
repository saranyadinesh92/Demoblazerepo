import {test,expect} from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
import loginData from '../Utils/testdata.json'with {type:'json'};
test.only('Verify login with valid credentials',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    await loginpage.login(loginData.validUser.username,loginData.validUser.password)
    await expect(page.locator('#nameofuser')).toContainText('Welcome')

})
test('Login with invalid username',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    let alertmsg
    page.once('dialog',async dialog=>{
        alertmsg=dialog.message()
        //console.log(alertmsg)
        await dialog.accept()
    })
    await loginpage.login(loginData.invalidUsername.username,loginData.invalidUsername.password)
    expect(alertmsg).toBe('User does not exist.')
    
})
test('Login with invalid password',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    let alertmsg
    page.once('dialog',async dialog=>{
        alertmsg=dialog.message()
        //console.log(alertmsg)
        await dialog.accept()
        
    })
    await loginpage.login(loginData.invalidPassword.username,loginData.invalidPassword.password)
    expect(alertmsg).toBe('Wrong password.')
})
test('Login with invalid credentials',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    let alertmsg
    page.once('dialog',async dialog=>{
        alertmsg=dialog.message()
        //console.log(alertmsg)
        await dialog.accept()
    })
    await loginpage.login(loginData.bothInvalid.username,loginData.bothInvalid.password)
    expect(alertmsg).toBe('User does not exist.')
})