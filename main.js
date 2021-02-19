Vue.component('product', {
    template: `
    <div class="product">
        <div class="image-container">
            <img :src="image" class="product-image">
        </div>
        
        <div class="product-info-container">
            <h1>{{ product.title }}</h1>
            <h3>{{ product.brand }}</h3>
            <h2>{{ product.price }}</h2>
            <h3>{{ variants[selectedVariant].color }}</h3>
            
            <div class="variants">
                <div v-for="(variant, index) in variants" 
                        :key="variant.id"
                        @click="updateProduct(index)">
                    <img :src="variant.iconImage" 
                            class="variant-icon" 
                            :class="{ activeVariant: selectedVariant == index}">
                </div>
            </div>
            
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            
            <button @click="addToCart"
                    :disabled="soldOut"
                    :class="{ disabledButton: soldOut }">
            Lägg i varukorg
            </button>
        </div>
    </div>
    `,
    data() {
        return {
            product: {
                title: 'Kruka Adele',
                brand: 'Ellos Home',
                price: '349 SEK',
                },
            details: ['Kruka av stengods', 'Matt finish', 'Reliefmönster', 'Diameter: 19,5cm', 'Höjd: 17cm'],
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
            ]
        }
    }, 
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart');
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
var app = new Vue({
    el: '#app',
    data: {
        cart: ''
    },
    methods: {
        updateCart: function() {
            this.cart ++;
        }
    }
})