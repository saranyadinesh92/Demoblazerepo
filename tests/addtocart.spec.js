import {test,expect} from '@playwright/test'
import { ProductPage } from '../pages/ProductPage'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../Utils/testdata.json' with {type:'json'}
test('Login and add to cart',async({page})=>{
    const loginpage=new LoginPage(page)
    const productpage=new ProductPage(page)
    let alertmsg

    //Login
    await loginpage.openApplication()
    
    await loginpage.login(loginData.validUser.username,loginData.validUser.password)

    //Select Product
    await productpage.selectProduct()
    

    //Add to cart
    page.once('dialog',async dialog=>{
    alertmsg=dialog.message()
    await dialog.accept()
        
    })
    await productpage.addToCart()
    expect(alertmsg).toBe('Product added.')
    
  
    
})