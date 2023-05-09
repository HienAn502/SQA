<template>
    <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">
          Shopping bag
        </h3>
      </div>
    </div>

    <!-- loop over the cart items and display -->
    <p v-if="cartItems.length === 0" class="mt-5 mb-5 text-center">Your shopping bag is empty.</p>
    <div
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      class="row mt-2 pt-3 justify-content-around"
    >
      <div class="col-2"></div>
      <div class="col-md-3 ">
        <img
          :src="cartItem.product.imageUrl"
          alt=""
          class="w-100 card-image-top embed-responsive-item"
          style="object-fit: cover"
        />
      </div>

      <!-- display product name, quantity -->
      <div class="col-md-5 px-3">
        <div class="card-block px-3 mt-5">
          <h6 class="card-title">
            <router-link
              :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }"
            >
              {{ cartItem.product.name }}
            </router-link>
          </h6>

          <p class="mb-0 font-weight-bold mt-2" id="item-price">
            $ {{ cartItem.product.price }} per unit
          </p>
          <p class="mb-0" >
            Quantity:{{ cartItem.quantity }}
          </p>
        </div>
        <p class="mb-0 px-3" >
          Total:
          <span class="font-weight-bold">
            $ {{ cartItem.product.price * cartItem.quantity }}
          </span>
        </p>
        <br />
        <a href="#" class="text-right px-3" @click="deleteItem(cartItem.id)"
          >Remove from cart
        </a>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr />
      </div>
      
    </div>

    <!-- display the price -->
    <div class="total-cost pt-2 text-right mb-4">
      <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ selectedVoucher ? selectedVoucher.name : 'Select Voucher' }}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a v-for="voucher in vouchers" 
         :key="voucher.id"
         class="dropdown-item" 
         @click="selectedVoucher = voucher"
      >
        {{ voucher.name }} ({{ voucher.rate * 100 }}%)
      </a>
    </div>
  </div>
                  <h5>Total : ${{ discountedTotalCost.toFixed(2) }}</h5>
      <button type="button" class="btn btn-primary confirm" data-v-7da15e77="" @click="confirmOrder()" v-if="!cartItems.length == 0"> Confirm Order </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
      vouchers: "",
      selectedVoucher: null,
      
    };
  },
  props: ["baseURL"],
  computed: {
    discountedTotalCost() {
      if (!this.selectedVoucher) {
        return this.totalCost;
      }
      const discount = this.totalCost * this.selectedVoucher.rate;
      return this.totalCost - discount;
    }
  },
  methods: {
    // fetch All items in cart
    listCartItems() {
      axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItemDTOList;
         
          this.totalCost = result.totalPrice;
        })
        .catch((err) => console.log("err", err));
    },
    deleteItem(itemId) {
      axios
        .delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token}`)
        .then((res) => {
          if (res.status == 200) {
            
            this.$router.go(0);
          }
        })
        .catch((err) => console.log("err", err));
    },
    async getVoucher(){
        await axios.get(`${this.baseURL}voucher/`).then((res) => {
          this.vouchers = res.data
        }).catch((err) => console.log("err", err));
    },
    confirmOrder() {
      // TODO: handle order confirmation 
        this.$router.push({ name: 'Checkout' });
      
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
    this.getVoucher()
  },
  }
 
</script>
<style scoped>
.menu-link{
  color: #1b1b1a;
  font-size: large;
  border-radius: 5px;
  
}
</style>