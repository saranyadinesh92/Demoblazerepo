import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../Utils/testdata.json' with {type:'json'}
import { PurchasePhone } from '../pages/PurchasePhone'
test('Purchase phone',async({page})=>{
    const loginpage=new LoginPage(page)
    const purchasephn=new PurchasePhone(page)
    let alertmsg

    //login
    await loginpage.openApplication()
    
    await loginpage.login(loginData.validUser.username,loginData.validUser.password)

    //click phone link
    await purchasephn.clickPhone()

    //select phone
    await purchasephn.phoneSelect()

    //Add phone to cart
    page.once('dialog',async dialog=>{
    alertmsg=dialog.message()
    await dialog.accept()
    
    })
    await purchasephn.addToCart()
    expect(alertmsg).toBe('Product added.')
    await purchasephn.openCart()
    await purchasephn.placeOrder()

    await purchasephn.enterDetails(
        loginData.purchaseDetails.name,
        loginData.purchaseDetails.country,
        loginData.purchaseDetails.city,
        loginData.purchaseDetails.card,
        loginData.purchaseDetails.month,
        loginData.purchaseDetails.year

    )
    await purchasephn.purchase();

    // Verify thank you message
    await expect(purchasephn.confirmationMessage).toHaveText('Thank you for your purchase!');


    // Click OK
    await purchasephn.closeConfirmation();

})