const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 0,
            onSale: true,
            url: 'https://www.amazon.com/s?k=socks',
            description: 'A pair of warm, fuzzy socks',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', inventory: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', inventory: 0 }
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
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateInventory(inventory) {
            this.inventory = inventory
        }
    }
})
