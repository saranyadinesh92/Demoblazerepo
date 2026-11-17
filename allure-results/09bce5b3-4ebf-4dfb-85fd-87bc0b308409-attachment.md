# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchasemonitor.spec.js >> Purchase monitor
- Location: tests\purchasemonitor.spec.js:5:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Product added."
Received: undefined
```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - text:             
  - navigation [ref=f2e2]:
    - generic [ref=f2e3]:
      - link "PRODUCT STORE" [ref=f2e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f2e7]:
        - listitem [ref=f2e8]:
          - link "Home (current)" [ref=f2e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f2e10]: (current)
        - listitem [ref=f2e11]:
          - link "Contact" [ref=f2e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e13]:
          - link "About us" [ref=f2e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e15]:
          - link "Cart" [ref=f2e16] [cursor=pointer]:
            - /url: cart.html
        - listitem
        - listitem [ref=f2e17]:
          - link "Log out" [ref=f2e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e19]:
          - link "Welcome test20261110A" [ref=f2e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f2e22]:
    - generic [ref=f2e25]:
      - list [ref=f2e26]:
        - listitem [ref=f2e27] [cursor=pointer]
        - listitem [ref=f2e28] [cursor=pointer]
        - listitem [ref=f2e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=f2e32]:
      - heading "Apple monitor 24" [level=2] [ref=f2e33]
      - separator [ref=f2e34]
      - heading "$400 *includes tax" [level=3] [ref=f2e35]
      - separator [ref=f2e36]
      - generic [ref=f2e37]:
        - list:
          - listitem
        - generic [ref=f2e39]:
          - strong [ref=f2e40]: Product description
          - paragraph [ref=f2e41]: LED Cinema Display features a 27-inch glossy LED-backlit TFT active-matrix LCD display with IPS technology and an optimum resolution of 2560x1440. It has a 178 degree horizontal and vertical viewing angle, a "typical" brightness of 375 cd/m2, contrast ratio of 1000:1, and a 12 ms response time.
      - separator [ref=f2e42]
      - link "Add to cart" [active] [ref=f2e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=f2e47]:
    - generic [ref=f2e50]:
      - heading "About Us" [level=4] [ref=f2e51]
      - paragraph [ref=f2e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f2e55]:
      - heading "Get in Touch" [level=4] [ref=f2e56]
      - paragraph [ref=f2e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=f2e58]: "Phone: +440 123456"
      - paragraph [ref=f2e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f2e63]
  - contentinfo [ref=f2e65]:
    - paragraph [ref=f2e66]: Copyright © Product Store
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import { LoginPage } from '../pages/LoginPage'
  3  | import loginData from '../Utils/testdata.json' with {type:'json'}
  4  | import { PurchaseMonitor } from '../pages/PurchaseMonitor'
  5  | test('Purchase monitor',async({page})=>{
  6  |     const loginpage=new LoginPage(page)
  7  |     const purchasemtr=new PurchaseMonitor(page)
  8  |     let alertmsg
  9  | 
  10 |     //login
  11 |     await loginpage.openApplication()
  12 |     await loginpage.login(loginData.validUser.username,loginData.validUser.password)
  13 | 
  14 |     //click monitor link
  15 |     await purchasemtr.clickMonitor()
  16 | 
  17 |     //select monitor
  18 |     await purchasemtr.monitorSelect()
  19 | 
  20 |     //Add monitor to cart
  21 |     page.once('dialog',async dialog=>{
  22 |     alertmsg=dialog.message()
  23 |     await dialog.accept()
  24 |     
  25 |     })
  26 |     await purchasemtr.addToCart()
> 27 |     expect(alertmsg).toBe('Product added.')
     |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  28 |     await purchasemtr.openCart()
  29 |     await purchasemtr.placeOrder()
  30 | 
  31 |     await purchasemtr.enterDetails(
  32 |         loginData.purchaseDetails.name,
  33 |         loginData.purchaseDetails.country,
  34 |         loginData.purchaseDetails.city,
  35 |         loginData.purchaseDetails.card,
  36 |         loginData.purchaseDetails.month,
  37 |         loginData.purchaseDetails.year
  38 | 
  39 |     )
  40 |     
  41 |     await purchasemtr.purchase()
  42 |         // Verify thank you message
  43 |     await expect(purchasemtr.confirmationMessage).toHaveText('Thank you for your purchase!');
  44 | 
  45 | 
  46 |     // Click OK
  47 |     await purchasemtr.closeConfirmation();
  48 | 
  49 | 
  50 | 
  51 | 
  52 | })
```