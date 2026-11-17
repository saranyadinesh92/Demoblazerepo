export class PurchaseMonitor
{
    constructor(page)
    {
        this.page=page
        this.monitorLink=page.getByText('Monitors',{exact:true});
        this.monitorName = page.locator('.hrefch').first()
        this.addToCartButton = page.getByRole('link',{ name:'Add to cart'});
        this.cartLink=page.locator('#cartur')
        this.placeOrderButton=page.getByRole('button',{name:'Place Order'})
        this.nameField=page.locator('#name')
        this.countryField=page.locator('#country')
        this.cityField=page.locator('#city')
        this.cardField=page.locator('#card')
        this.monthField=page.locator('#month')
        this.yearField=page.locator('#year')
        this.purchaseButton=page.getByRole('button',{name:'Purchase'})
        this.confirmationMessage = page.locator('.sweet-alert h2');
        this.confirmationOkButton = page.locator('.sweet-alert button.confirm')

    }

        async openApplication()
    {
        await this.page.goto('https://www.demoblaze.com/')
    }
    async clickMonitor()
    {
        await this.monitorLink.click()
    }
  async monitorSelect()
    {
        await this.monitorName.click()
    }
    async addToCart()
    {
        await this.addToCartButton.click()
    }
    async openCart()
    {
        await this.cartLink.click()
    }
    async placeOrder()
    {
        await this.placeOrderButton.click()
    }
    async enterDetails(name,country,city,card,month,year)
    {
        await this.nameField.fill(name)
        await this.countryField.fill(country)
        await this.cityField.fill(city)
        await this.cardField.fill(card)
        await this.monthField.fill(month)
        await this.yearField.fill(year)


    }
    async purchase()
    {
        await this.purchaseButton.click()
    }
    async closeConfirmation()
    {
    await this.confirmationOkButton.click();
    }

}