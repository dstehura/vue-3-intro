const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            selectedVariant: 0,
            inventory: 0,
            brand: 'Vue Mastery',
            onSale: true,
            url: 'https://www.amazon.com/s?k=socks',
            description: 'A pair of warm, fuzzy socks',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        updateInventory(inventory) {
            this.inventory = inventory
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        sale() {
            if (this.onSale) {
                return this.title + ' are on sale!'
            } else {
                return this.title + ' are not on sale'
            }
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})
