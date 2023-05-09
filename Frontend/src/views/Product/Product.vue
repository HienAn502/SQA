<template>
  <div class="container">
    <div class="container">
      <div class="py-3 sub-hold">
        <div class="mb-4 layout-column clearfix">
          <SlideBarAdmin></SlideBarAdmin>
          <div class="right-column category-items">
            <div class="row">
              <div class="col-12 text-left ms-2">
                <h3 class="pt-3">Ours Products</h3>
                <router-link to="/admin/product/add">
                  <button class="btn btn-primary plus-btn">
                    <i class="fa-solid fa-plus fa-2xl" style="
                        color: #ffffff;
                        transform: translateX(-1px) translateY(1px);
                      "></i>
                  </button>
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="align-middle text-center d-inline" v-for="product in products" :key="product.id">
                  <div class="d-inline-block align-top mb-4 product-inline-4">
                    <div class="position-relative teaser">
                      <div class="position-relative teaser-item-div">
                        <div class="position-absolute badge badge-dark m-1 rounded-0 new-tag">
                          New
                        </div>
                        <a>
                          <figure class="overflow-hidden">
                            <img class="img-fluid"
                              :src="product.imageUrl" />
                            <div class="text-center position-absolute btnquick-panel"></div>
                          </figure>

                          <div class="clearfix text-center product-list-title">
                            <div class="">
                              <router-link :to="{
                                  name: 'ShowDetails',
                                  params: { id: product.id }
                                }">
                                <div class="teaser-name" style="
                                    display: inline-block;
                                    max-width: 200px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    font-size: 12px;
                                  ">
                                  {{ product.name }}
                                </div>
                              </router-link>
                            </div>

                            <div class="price-varient-block">
                              <div class="ct-pdcvariant-hold"></div>
                              <div class="price-hold" style="font-size: 15px">
                                <span class="cut-price">
                                  <span class="price-font">$</span>
                                  {{ product.price }}
                                </span>
                                &nbsp;
                                <span class="price text-danger">
                                  <span class="price-font">$</span>
                                  {{ product.discount_price }}
                                </span>
                              </div>
                            </div>
                            <div class="button">
                              <router-link :to="{
                                name: 'EditProduct',
                                params: { id: product.id }
                              }">
                                <button class="edit-btn">
                                  <i class="fa-regular fa-pen-to-square fa-sm" ></i>
                                  Edit
                                </button>
                              </router-link>

                              <button class="trash-btn"
                                @click="deleteProduct(product.id)">
                                  <i class="fa-regular fa-trash-can fa-sm"></i>
                                  Delete
                              </button>

                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProductBox from "../../components/Product/ProductBox.vue";
import SlideBarAdmin from "../SlideBarAdmin.vue";
export default {
  name: "Product",
  props: ["baseURL"],
  components: { ProductBox, SlideBarAdmin },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await axios
        .get(`${this.baseURL}product`)
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));
    },
    async deleteProduct(pid) {
      const confirmDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this product!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (confirmDelete) {
        await axios.delete(`${this.baseURL}product/delete/${pid}`).then(() => {
          this.$emit("fetchData");
          swal({
            text: "product has been deleted successfully",
            icon: "success"
          })
          this.$router.push({ name: "Product" })
          location.reload()
        }).catch(err => console.log('err', err));
      }

    }
  },
  mounted() {
    this.getProducts();

  }
};
</script>
<style scoped>
.edit-btn {
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 0.8rem;
  color: #000;
  background: #fff;
}

.edit-btn:hover {
  color: #fff;
  background: #000;
}

.trash-btn {
  border-radius: 5px;
  border-color: #dc3646;
  padding: 5px 15px;
  font-size: 0.8rem;
  color: #dc3646;
  background: #fff;
}

.trash-btn:hover {
  color: #fff;
  background: #dc3646;
}


.button {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.all-cards {
  margin-top: 0px;
  margin-bottom: 40px;
}

.plus-btn {
  float: right;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 15px;
}

.row {
  margin-top: 15px;
}

.pt-3 {
  margin-top: 15px;
  margin-bottom: 15px;
}

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
</style>
