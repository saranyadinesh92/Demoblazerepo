import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../Utils/testdata.json' with {type:'json'}
import { PurchaseMonitor } from '../pages/PurchaseMonitor'
test('Purchase monitor',async({page})=>{
    const loginpage=new LoginPage(page)
    const purchasemtr=new PurchaseMonitor(page)
    let alertmsg

    //login
    await loginpage.openApplication()
    await loginpage.login(loginData.validUser.username,loginData.validUser.password)

    //click monitor link
    await purchasemtr.clickMonitor()

    //select monitor
    await purchasemtr.monitorSelect()

    //Add monitor to cart
    page.once('dialog',async dialog=>{
    alertmsg=dialog.message()
    await dialog.accept()
    
    })
    await purchasemtr.addToCart()
    expect(alertmsg).toBe('Product added.')
    await purchasemtr.openCart()
    await purchasemtr.placeOrder()

    await purchasemtr.enterDetails(
        loginData.purchaseDetails.name,
        loginData.purchaseDetails.country,
        loginData.purchaseDetails.city,
        loginData.purchaseDetails.card,
        loginData.purchaseDetails.month,
        loginData.purchaseDetails.year

    )
    
    await purchasemtr.purchase()
        // Verify thank you message
    await expect(purchasemtr.confirmationMessage).toHaveText('Thank you for your purchase!');


    // Click OK
    await purchasemtr.closeConfirmation();




})