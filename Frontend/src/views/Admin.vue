<template>
  <div class="container-fluid">
    <div class="py-3 sub-hold">
      <div class="mb-4 layout-column clearfix">
        <SlideBarAdmin></SlideBarAdmin>

        <div class="right-column category-items" v-if="this.token">
          <h5 class="wel-txt">Welcome back!</h5>
          <div class="container-fluid">
            <div class="txt-head" style="font-weight: bold">Products</div>
            <div class="product-inline-hold">
              <div class="d-inline-block align-top mb-4 product-inline-4" v-for="product in shuffle(products)"
                :key="product.id">
                <div class="position-relative align-top teaser">
                  <div class="position-relative teaser-item-div">
                    <figure class="text-center">
                      <img :src="product.imageUrl" :alt="product.name" class="img-fluid" />
                    </figure>
                    <div class="product-list-title">
                      <div class="teaser-name" style="
                          text-overflow: ellipsis;
                          display: inline-block;
                          max-width: 300px;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          white-space: nowrap;
                          font-size: 12px;
                        ">
                        {{ product.name }}
                      </div>
                      <div class="price-varient-block">
                        <div class="ct-pdcpr-hold">
                          <span class="price-hold">
                            <span class="cut-price">
                              <span class="price-font">₹</span>
                              {{ product.price }}
                            </span>
                            &nbsp;
                            <span class="price text-danger">
                              <span class="price-font">₹</span>
                              {{ product.discount_price }}
                            </span>

                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="view-all">
              <router-link to="/admin/product">
                <button class="btn btn-primary" style="float: right">
                  View All
                </button>
              </router-link>
            </div>
          </div>

          <div class="container-fluid">
            <div class="txt-head txt2" style="font-weight: bold">
              Categories
            </div>
            <section class="home-category-hold">
              <div class="row no-gutters mobile-fullwidth">
                <div class="col-md-4 col-sm-4 col-6 col-xs-12" v-for="category in categories" :key="category.id">
                  <div class="clearfix text-center home-category">
                    <router-link class="img-link" :to="{
                        name: 'ListProduct',
                        params: { categoryName: category.categoryName }
                      }">
                      <figure>
                        <img :src="category.imageUrl" alt="Rings" class="img-fluid" />
                      </figure>
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="clearfix"></div>
            </section>
            <div class="view-all2">
              <router-link to="/admin/category">
                <button class="btn btn-primary" style="float: right">
                  View All
                </button>
              </router-link>
            </div>
          </div>
          <div class="container-fluid">
            <div class="txt-head txt2" style="font-weight: bold">Vouchers</div>
            <section class="home-category-hold">
              <div class="row no-gutters mobile-fullwidth">
                <table class="todo-container">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Rate</th>
                      <th>Created Date</th>
                      <th>Expired Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="voucher in vouchers.slice(0, 3)" :key="voucher.id">
                      <td>{{ voucher.id }}</td>
                      <td>{{ voucher.name }}</td>
                      <td>{{ voucher.rate }}</td>
                      <td>{{ new Date(voucher.createdDate).toLocaleDateString() }}</td>
                      <td>{{ new Date(voucher.expiredDate).toLocaleDateString() }}</td>
                      <td class="action">
                        <router-link :to="{
                          name: 'EditVoucher',
                          params: { id: voucher.id }
                        }">
                          <button class="edit-btn">Edit</button>
                        </router-link>

                        <button class="fa fa-trash trash-btn" @click="deleteVoucher(voucher.id)"></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- <div
                  class="col-md-4 col-sm-4 col-6 col-xs-12"
                  v-for="voucher in vouchers"
                  :key="voucher.id"
                >
                  <div class="clearfix text-center home-category">
                    <a
                      class="img-link"
                    >
                      {{ voucher.name }}
                  </a>
                  </div>
                </div> -->
              </div>

              <div class="clearfix"></div>
            </section>
            <div class="view-all2">
              <router-link to="/admin/voucher">
                <button class="btn btn-primary" style="float: right">
                  View All
                </button>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SlideBarAdmin from "./SlideBarAdmin.vue"
import axios from "axios";
export default {
  components: { SlideBarAdmin },
  props: ["baseURL", "products", "categories"],
  data() {
    return {
      token: "",
      vouchers: ""
    };
  },
  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
      }
      return array.slice(0, 8);
    },
    async getVoucher() {
      await axios
        .get(`${this.baseURL}voucher/`)
        .then((res) => {
          console.log(res.data);
          this.vouchers = res.data;
        })
        .catch((err) => console.log("err", err));
    }
  },
  mounted() {
    this.token = localStorage.getItem("token")
    if (!this.token) {
      // user is not logged in
      // show some error
      swal({
        text: "please login to first",
        icon: "error",
      });
      return;
    }
    this.getVoucher()
  }
};
</script>
<style scoped>
/*layout */

.admin {
  margin: auto;
}

.icon-st {
  padding: 20px;
}

.rout-link {
  color: black;
  text-decoration: none;
  font-size: smaller;
}

.rout-link:hover {
  color: #e58c82 !important;
}

.rout-link .ic {
  padding: 20px 22px;
}

.rout-link .ict {
  padding: 20px 12px 20px 21px;
}

.text-st {
  font-size: larger;
  font-weight: bold;
}

.wel-txt {
  margin: 30px auto;
}

.txt-head {
  margin-top: 20px;
  margin-bottom: 30px;
}

.view-all2 {
  margin-top: 20px;
}

.txt2 {
  margin-top: 70px;
}

.todo-button {
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  font-size: 1.8rem;
  border: none;
  border-radius: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  color: #820000;
  background: #FAECD6;
  cursor: pointer;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  transition: all 0.3ms ease;
}

.todo-button:hover {
  color: #FAECD6;
  background: #820000;
}

.fa-plus-circle {
  margin-top: 0.3rem;
  margin-left: -8px;
}

.todo-container {
  background: #fff;
  color: #000;
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 1.rem;
  min-width: 500px;
  border-radius: 5px 5px 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.todo-container thead tr {
  background: #e58c82;
  text-align: left;
  font-weight: bold;
}

.todo-container th,
.todo-container td {
  padding: 12px 15px;
  background: #e58c82;
}

.todo-container tbody tr {
  background: #FFC9C9;
  margin-top: 20px;
  border-bottom: 1px solid #FFC9C9;
}

.todo-container tbody tr td {
  background: #FFC9C9;
}

.todo-container tbody tr:last-of-type {
  border-bottom: 2px solid #FFC9C9;
}

.complete {
  background: #E4E9BE;
}

.trash-btn,
.edit-btn {
  color: #FAECD6;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.25rem;
}

.edit-btn {
  border-top-left-radius: 1.75rem;
  border-bottom-left-radius: 1.75rem;
  background: #e58c82;
  line-height: 1;
}

.action {
  display: flex;
}

.trash-btn {
  border-top-right-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  background: #e58c82;
}

/*.fa-trash, .fa-check-circle {*/
/*    pointer-events: none;*/
/*}*/
.trash-btn:hover,
.edit-btn:hover {
  color: #e58c82;
  background: #FAECD6;
}

.slide {
  transform: translateX(10rem);
  opacity: 0;
}
</style>
