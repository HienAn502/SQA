<template>
  <Header 
  :cartCount="cartCount" 
  @resetCartCount="resetCartCount"  
  :categories="categories"
  @fetchData="fetchData">
  </Header>
    <router-view 
    v-if="categories && products"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    :vouchers="vouchers"
    @fetchData="fetchData"
    ></router-view>
  <Footer></Footer>

</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {Header, Footer},
  data(){
    return{
      baseURL: "http://localhost:8080/",
      products: null,
      categories: null,
      vouchers: null,
      cartCount: 0
    }
  },
  methods: {
    async fetchData() {
      // api call to get all the categories
      await axios
        .get(this.baseURL + "category/list")
        .then((res) => {
          this.categories = res.data
          
        })
        .catch((err) => console.log("err", err));
      // api call to get the products
      await axios
        .get(this.baseURL + "product")
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log("err", err));
        // api get the vouchers
      await axios
        .get(this.baseURL + "voucher/")
        .then((res) => {
          this.vouchers = res.data;
        })
        .catch((err) => console.log("err", err));
    
  
      // fetch cart item if token is present i.e logged in
      if (this.token) {
        axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItemDTOList.length;
          })
          .catch((err) => console.log("err", err));
      }
     
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  },
};
</script>

<style scoped></style>
