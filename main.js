var app = new Vue({
    el: '#app',
    data: {
        product: {
            title: 'Kruka Adele',
            brand: 'Ellos Home',
            price: '349 SEK',
            },
        details: ['Kruka av stengods', 'Matt finish', 'Reliefmönster'],
        selectedVariant: 0,
        variants: [
            {
                id: '1553992-01-0',
                color: 'Vit',
                image: './assets/pot-white.jpg',
                iconImage: './assets/pot-white-icon.jpg',
                quantity: 10
            },
            {
                id: '1553992-02-0',
                color: 'Rosa',
                image: './assets/pot-pink.jpg',
                iconImage: './assets/pot-pink-icon.jpg',
                quantity: 4
            },
            {
                id: '1553992-03-0',
                color: 'Beige',
                image: './assets/pot-beige.jpg',
                iconImage: './assets/pot-beige-icon.jpg',
                quantity: 0
            }
        ],
        cart: ''
    },
    methods: {
        addToCart: function() {
            this.cart ++;
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        image() {
            return this.variants[this.selectedVariant].image
        },
        soldOut() {
            return this.variants[this.selectedVariant].quantity == 0;
        }

    }
})