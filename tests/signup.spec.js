import {expect,test} from '@playwright/test'
import { SignUpPage } from '../pages/SignUpPage'
import loginData from '../Utils/testdata.json' with {type:'json'}
test('Enter data and sign up',async({page})=>{
    const signup=new SignUpPage(page)
    await signup.openApplication()
    await signup.openSignup()
    await signup.enterDetails(loginData.signUp.username,loginData.signUp.password)
    let alertmsg
    page.once('dialog',async dialog=>{
        alertmsg=dialog.message()
        //console.log(alertmsg)
        await dialog.accept()
    })
    
    await signup.submitSignup()
    expect(alertmsg).toBe('Sign up successful.')
})

test('Enter data and close',async({page})=>{
    const signup=new SignUpPage(page)
    await signup.openApplication()
    await signup.openSignup()
    await signup.enterDetails(loginData.signUp.username,loginData.signUp.password)
    await signup.closeSignup()
    await expect(page.locator('#signInModal')).not.toBeVisible()
})

