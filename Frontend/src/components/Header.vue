<template>
  <header id="header" class="position-relative" style="z-index: 9">
    <div class="container-screen">
      <div class="bg-light d-none d-md-block header-txt">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 py-1 text-center">
              <div class="row">
                <div class="col-md-4 col-12 text-left">
                  <ul class="list-inline mb-0 text-xs-center">
                    <li class="list-inline-item">
                      <img
                        src="../assets/img/call-788193.png"
                        class="img-responsive"
                      />
                      +91-9950244446
                    </li>
                    <li class="list-inline-item">
                      <img
                        src="../assets/img/email-791162.png"
                        class="img-responsive"
                      />
                      groupSE2@gmail.com
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 col-12 text-center">
                  Free shipping on orders over $100
                </div>
                <div class="col-md-4 col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-mhead"></div>
      <div class="clearfix bg-white mobile-header">
        <div class="container-fluid">
          <div class="row d-none d-md-block">
            <div class="col">
              <div class="d-flex"></div>
            </div>
          </div>
          <div class="row d-flex align-items-center mobile-logo">
            <div class="col-0 col-md-4 col-lg-3">
              <div id="searchbar" class="clearfix searchbar srch-pos-left">
                <div class="input-group">
                  <input
                    id="keyword"
                    class="form-control search-input rounded-0 ui-autocomplete-input"
                    placeholder="Search keywords..."
                    type="text"
                    v-model="keyword"
                  />
                  <div class="input-group-append">
                    <button
                      type="submit"
                      class="btn btn-primary btn-sm rounded-0"
                      id="search_submit"
                      @click.prevent="search"
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
            </div>
            <div class="col-7 col-md-4 col-lg-6">
              <div class="logo-hold logo-pos-center">
                <div id="logo">
                  <a href="/" title="Home" class="">
                    <img
                      src="../assets/img/DAS_DAB.png"
                      alt="DAS&DAB"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-5 col-md-4 col-lg-3">
              <div
                class="d-flex justify-content-end align-items-center pull-right toppanel-hold"
              >
                <div class="d-block d-md-none search-icon">
                  <a href="#" class="clerfix">
                    <svg
                      class="svg-size ico-srch"
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
                    <svg
                      class="svg-size ico-close"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </a>
                </div>
                <div class="d-none d-md-block">
                  <div class="clear top-login-dtp">
                    <svg
                      class="mx-auto d-block"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      stroke-width="1.9"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <router-link to="/login" v-if="!token">
                      Login or
                    </router-link>
                    <router-link to="/signup" v-if="!token">Signup</router-link>
                  </div>
                  <div v-if="token">
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Hi {{ lastname }}
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <router-link
                          class="dropdown-item"
                          :to="{ name: 'Admin' }"
                        >
                          Admin
                        </router-link>
                        <a class="dropdown-item" @click.prevent="logout">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="top-login"></div>
                </div>

                <div class="head-wish">
                  <a href="/wishlist/" class="d-block px-3">
                    <svg
                      class="mx-auto d-block"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      ></path>
                    </svg>
                    <span class="w-100 d-none d-md-block">Wishlist</span>
                  </a>
                </div>

                <div class="shoppingcart">
                  <div id="div-drop-cart" class="position-relative">
                    <div class="position-relative cd-cart-trigger">
                      <router-link
                        to="/cart"
                        class="d-block px-1 cart-icon align-items-center"
                        title="Shopping Bag"
                      >
                        <span
                          class="position-absolute rounded-circle badge badge-primary"
                        >
                          {{ cartCount }}
                        </span>
                        <svg
                          class="mx-auto d-block"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                          ></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <div class="w-100 d-none d-md-block">Cart</div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-header-height d-block d-md-none"></div>
      <div class="menu-bar original" style="visibility: visible">
        <nav class="nav" role="navigation">
          <div class="main-nav navbar-collapse">
            <button class="nav-toggle">
              <div class="icon-menu">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
              </div>
            </button>
            <div class="nav-container">
              <div class="d-block d-md-none clearfix mx-2">
                <div class="currency-m-border clearfix">
                  <div class="d-flex">
                    <div class="w-50"></div>
                    <div class="w-75 ml-2">
                      <div
                        class="clear d-flex align-content-end flex-wrap text-center top-login-dtp"
                      >
                        <span class="mx-auto">
                          <router-link
                            to="/login"
                            class="btn btn-outline-primary rounded-0"
                          >
                            Login
                          </router-link>
                          <span class="text-muted d-inline-block mx-2">Or</span>
                          <router-link
                            to="/signup"
                            class="btn btn-outline-primary rounded-0"
                          >
                            Signup
                          </router-link>
                        </span>
                      </div>
                      <div
                        class="d-flex align-content-end flex-wrap text-center top-login clearfix"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="list-inline justify-content-center nav nav-menu menu">
                <li class="menu-item list-inline-item">
                  <!-- <a href="/" class="menu-link">Home</a> -->
                  <router-link to="/" class="menu-link">Home</router-link>
                </li>
                <li class="menu-item">
                  <div class="dropdown show">
                    <a
                      class="dropdown-toggle menu-link"
                      href="#"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories
                    </a>

                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <router-link
                        v-for="category in categories"
                        :key="category.id"
                        :to="{
                          name: 'ListProduct',
                          params: { categoryName: category.categoryName }
                        }"
                        class="dropdown-item"
                        @click="forcePageReload(category.categoryName)"
                      >
                        <p>{{ category.categoryName }}</p>
                      </router-link>
                    </div>
                  </div>
                </li>

                <li class="menu-item list-inline-item">
                  <router-link to="/blog" class="menu-link">Blog</router-link>
                </li>

                <li class="menu-item list-inline-item">
                  <router-link to="/contact" class="menu-link">
                    Contact Us
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
import axios from "axios";

export default {
  props: ["cartCount", "categories", "products", "baseURL"],
  data() {
    return {
      token: null,
      lastname: "",
      keyword: "",
      searchItem: ""
    };
  },
  methods: {
    search() {
      const result = this.keyword;
      axios
        .get(`http://localhost:8080/product/search/?keyword=${result}`)
        .then((res) => {
          this.searchItem = res.data;
          this.$router
            .push({
              name: "Result",
              params: { keyword: this.keyword }
            })
            .then(() => {
              window.location.reload();
            });
        });
    },
    logout() {
      // Remove the  and 'username' items from Local Storage
      localStorage.removeItem("token");
      this.token = null;
      swal({
        text: "Logged you out. Visit again",
        icon: "success"
      });
      this.$emit("resetCartCount");
      // Redirect to the login page or any other page
      this.$router.push("/");
    },
    forcePageReload(categoryName) {
      const cate_name = categoryName
      this.$router
            .push({
              name: 'ListProduct',
              params: { categoryName: cate_name }
            })
            .then(() => {
              window.location.reload();
            });
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.lastname = localStorage.getItem("user_lastname");
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.header-txt,
.header-topbar,
.header-txt a {
  background-color: #e6c9c7 !important;
  color: #ffffff !important;
}
@media (min-width: 768px) {
  .mobile-header {
    background-color: #fff9f9 !important;
    color: #000000 !important;
  }
  .mobile-header .toppanel-hold a,
  #logo a,
  .m-logo a {
    color: #000000 !important;
  }
  svg.svg-color path {
    fill: #000000 !important;
  }
  .mobile-header .toppanel-hold a:hover {
    color: #e58c82 !important;
  }
}
@media (max-width: 767px) {
  .m-logo {
    background-color: #fff9f9 !important;
    color: #000000 !important;
  }
  .m-logo a {
    color: #000000 !important;
  }
  .m-logo a:hover {
    color: #e58c82 !important;
  }
}

a {
  color: #000000;
}
.menu-link {
  font-weight: 500;
}

a:hover,
.btn-link:hover {
  color: #e58c82;
}
.shoppingcart .cart-icon span,
.searchbar .theme-btn,
.btn-primary {
  background-color: #e58c82 !important;
  border-color: #e58c82 !important;
  color: #ffffff !important;
}
.btn-outline,
.btn-outline-primary {
  border-color: #e58c82 !important;
  color: #e58c82 !important;
}
.searchbar .input-group-btn:hover,
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-outline-primary:hover,
.btn-outline-primary:focus,
.btn-outline-primary:active,
.btn-outline-primary.active {
  background-color: #e8aea7 !important;
  border-color: #e8aea7 !important;
  color: #ffffff !important;
}
.theme_border,
.border-primary {
  border-color: #e58c82 !important;
}

@media (min-width: 768px) {
  .nav-container,
  .wsmenucontainer,
  .left-side-menu {
    background-color: #fff9f9 !important;
  }
  .nav-menu > .menu-item,
  .wsmenu-list > li > a,
  .fixed h4 {
    font-size: 14px !important;
    text-transform: uppercase !important;
  }
  .nav-menu > .menu-item:hover,
  .nav-menu > .menu-item.is-active,
  .wsmenu-list > li > a:hover,
  .wsmenu-list li:hover > a {
    color: #e58c82 !important;
  }
  .radio label::before,
  .checkbox label::before {
    border-color: #000000;
  }
}
.quick-modal-box {
  background-color: #fff9f9 !important;
}
.text-left {
  text-align: left !important;
}
.img-responsive {
  height: auto;
}
.toppanel-hold .shoppingcart .cart-icon span {
  min-width: 20px;
  font-family: Arial;
  font-size: 12px !important;
  padding: 4px;
  line-height: 1;
  display: inline-block;
  border-radius: 15px !important;
  font-weight: 600;
}
.srch-pos-left {
  max-width: 210px;
}
.searchbar #search_submit {
  background: none !important;
  border: none !important;
  color: #949492 !important;
  border-bottom: solid 1px #949494 !important;
}

.pull-right {
  float: right;
}
.input-group-append,
.input-group-prepend {
  display: -ms-flexbox;
  display: flex;
}
.img-fluid {
  max-width: 100%;
  height: auto;
  height: fit-content;
}
</style>
