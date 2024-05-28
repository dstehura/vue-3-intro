const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            onSale: true,
            url: 'https://www.amazon.com/s?k=socks',
            description: 'A pair of warm, fuzzy socks',
        }
    }
})
