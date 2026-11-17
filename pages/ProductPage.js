export class ProductPage
{
    constructor(page)
    {
        this.page=page
        this.addProduct=page.locator('.hrefch').first()
        this.addToCartButton=page.getByRole('link',{name:'Add to cart'})
    }
    async selectProduct() 
    {
    await this.addProduct.click();  
    }
    async addToCart()
    {
        await this.addToCartButton.click()
        
    }


}