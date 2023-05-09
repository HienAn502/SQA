<template >
      <section class="py-4 home-featured-panel">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="text-center mb-3 heading"><h2>Search Results</h2></div>
        </div>
        <p v-if="JSON.stringify(items)" class="text-center">Search result on <strong>"{{ this.keyword }}"</strong></p>
        <p v-if="JSON.stringify(items) === '[]'" class="text-center">Sorry, no results matched your search for <strong>"{{ this.keyword }}"</strong></p>
        <div class="col-12">
          <div
            class="align-middle text-center d-inline"
            v-for="product in items"
            :key="product.id"
          >
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a>
                    <figure class="overflow-hidden">
                      <img
                        alt="Minimalist Beaded Two Tone Wedding Ring"
                        class="img-fluid"
                        :src="product.imageUrl"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
                          <span
                            class="w-75 btn btn-primary btn-sm btnquick"
                            data-toggle="modal"
                            data-target="#quickProduct"
                            data-product-url="minimalist-beaded-two-tone-wedding-ring-1"
                          >
                            <span>+ Quick View</span>
                          </span>
                          <div class="w-75 d-block wishlist-button">
                            <div
                              id="mywishlistadd319924"
                              style="display: block"
                            >
                              <router-link
                                name="btn-addtowishlist"
                                data-product-id="319924"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                                :to="{
                                  name: 'ShowDetails',
                                  params: { id: product.id }
                                }"
                              >
                                + Add
                              </router-link>
                            </div>
                            <div
                              id="mywishlistadded319924"
                              style="display: none"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="319924"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm removerromwishlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Remove from wishlist"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <router-link
                          :to="{
                            name: 'ShowDetails',
                            params: { id: product.id }
                          }"
                        >
                          <div
                            class="teaser-name"
                            style="
                              display: inline-block;
                              max-width: 300px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              white-space: nowrap;
                              font-size: 12px;
                            "
                          >
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
                            {{ product.discount_price}}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--
     -->

            <!--
     -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
        data() {
            return {
                items: [],
                keyword: null
            }
        },
        props: ["baseURL", "categories", "products"],
        methods: {
            async getItemSearch() {
               
                await axios.get(`${this.baseURL}product/search/?keyword=${this.keyword}`
                    )
                    .then((res) => {
                        this.items = res.data
                    }).catch(err => console.log('err', err));
            }
        },
        mounted() {
          this.keyword = this.$route.params.keyword;
          this.getItemSearch()
        }
    }

</script>
<style scoped>
    
</style>