<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div aria-label="breadcrumb">
            <ol
              class="bg-transparent pl-0 py-1 m-0 breadcrumb"
              itemscope=""
              itemtype="http://schema.org/BreadcrumbList"
            >
              <li
                class="breadcrumb-item"
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
              >
                <a itemprop="item" href="/">
                  <span itemprop="name">Home</span>
                  <meta itemprop="position" content="1" />
                </a>
              </li>
              <li
                class="breadcrumb-item"
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
              >
                <a itemprop="item" href="/categories/show/{{ categoryName }}">
                  <span itemprop="name">{{ categoryName }}</span>
                  <meta itemprop="position" content="2" />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="heading">
            <h1 class="text-center">{{ categoryName }}</h1>
          </div>
        </div>
      </div>
      <div id="sticky-filter"></div>
      <div class="d-flex justify-content-end filters-div">
        <div class="mr-2 fl-toggle">
          <div class="fl-toggle-bar d-block">
            <span class="d-block border bg-white px-3 btn-filter-icon">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <polygon
                  points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                ></polygon>
              </svg>
              Filters
            </span>
          </div>
        </div>

        
        <!--search-->
        <div id="searchbar" class="searchbar custom-search">
                  <div class="input-group">
                    <input
                      id="keyword"
                      class="form-control search-input rounded-0 ui-autocomplete-input"
                      placeholder="Search keywords..."
                      type="text"
                      v-model="searchTerm"
                    />
                    <div class="input-group-append">
                      <button
                        @click = "search"
                        type="submit"
                        class="btn btn-primary btn-sm rounded-0"
                        id="search_submit"
                      >
                        <svg
                          class="ico-search"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
          </div>
      
        
        <!--sort-->
        <div class="position-relative d-inline-block select-hold align-top">
          <div class="input select">
            <select
              v-model="sortType"
              name="data[sort_by]"
              class="border position-relative"
              id="sort_by"
            >
              <option
                value="default"
                selected="selected"
              >
                Sort By
              </option>
              <option value="price_low_high">
                Price (Low &gt; High)
              </option>
              <option value="price_high_low">New Arrival</option>
              <option value="name_a_z">
                Name (A - Z)
              </option>
              <option value="name_z_a">
                Name (Z - A)
              </option>
            </select>
          </div>
          <div class="position-absolute select__arrow"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div
          class="align-middle text-center d-inline"
          v-for="product in sortedItems"
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
                          <div id="mywishlistadd319924" style="display: block">
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
                          <div id="mywishlistadded319924" style="display: none">
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
                          40,000
                        </span>
                        &nbsp;
                        <span class="price text-danger">
                          <span class="price-font">$</span>
                          {{ product.price }}
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
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      ListProduct: "",
      sortType: "default",
      searchTerm:"",
      results: "",
    };
  },
  props: ["categories", "baseURL"],
  methods: {
    async getProductList() {
      await axios
        .get(`${this.baseURL}category/${this.categoryName}`)
        .then((res) => {
          this.ListProduct = res.data;
          this.results = this.ListProduct
        })
        .catch((err) => console.log("err", err));
    },

    mix(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    search(){
    const term = this.searchTerm.toLowerCase()
    this.results = this.ListProduct.filter(product =>
    product.name.toLowerCase().includes(term))
  }
  },

  computed: {
    sortedItems() {
      // Lấy các sản phẩm
      let items = this.results;

      // Kiểm tra loại sắp xếp được chọn
      if (this.sortType === "price_low_high") {
      // Sắp xếp theo giá low to high
      return items.sort((a, b) => {
      return a.price - b.price;
      });
      // Sắp xếp theo giá high to low
      }if(this.sortType === "price_high_low"){
        return items.sort((a,b) =>{
        return b.price - a.price;
        });
      // Sắp xếp theo tên A - Z
      }if(this.sortType === "name_a_z"){
        return items.sort((a, b) => {
        return a.name.localeCompare(b.name);
        });
      }if (this.sortType === "name_z_a"){
      // Sắp xếp theo tên Z - A
      return items.sort((a, b) => {
      return b.name.localeCompare(a.name);
      });
      } else{
        return this.mix(items);
      }
      },
      },	

  mounted() {
    this.categoryName = this.$route.params.categoryName;
    this.getProductList();
  }
}
</script>


