<template>
  <div class="home-slider">
    <div
      id="carousel-example-generic"
      class="carousel carousel-fade slide"
      data-ride="carousel"
      data-interval="4000"
    >
      <!-- Indicators -->
      <ol class="m-0 carousel-indicators">
        <li
          data-target="#carousel-example-generic"
          data-slide-to="0"
          class=""
        ></li>
        <li
          data-target="#carousel-example-generic"
          data-slide-to="1"
          class="active"
        ></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item" style="background: FFFFFF">
          <a href="/">
            <img
              src="../assets/img/Slider_1.jpg"
              alt=""
              class="img-fluid w-100 mx-auto"
            />
          </a>
          <div class="position-absolute p-0 carousel-caption caption_center">
            <h2 class="m-0 p-0 font-weight-bold display-4"></h2>
            <p></p>
          </div>
        </div>
        <div class="carousel-item active" style="background: FFFFFF">
          <a href="/">
            <img
              src="../assets/img/Slider_2.jpg"
              alt=""
              class="img-fluid w-100 mx-auto"
            />
          </a>
          <div class="position-absolute p-0 carousel-caption caption_center">
            <h2 class="m-0 p-0 font-weight-bold display-4"></h2>
            <p></p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a
        class="carousel-control-prev"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div class="text-center my-4 hm-banner-hold">
    <div class="home-banner">
      <router-link to="/rings" class="d-block">
        <img
          src="../assets/img/banner_1.jpg"
          alt=""
          class="img-fluid w-100 mx-auto"
        />
      </router-link>
    </div>
    <div class="home-banner">
      <router-link to="/bracelets" class="d-block">
        <img
          src="../assets/img/banner_2.jpg"
          alt=""
          class="img-fluid w-100 mx-auto"
        />
      </router-link>
    </div>
  </div>
  <!-- Welcome text -->
  <section class="py-4 text-center welcome-text">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="clearfix">
            <div>
              <div class="text-center mb-3 heading">
                <h2>Shop by Category</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="home-category-hold">
    <div class="row no-gutters mobile-fullwidth">
      <div class="col-md-4 col-sm-4 col-6 col-xs-12"  v-for="category in categories.slice(0,3)"
          :key="category.id">
        <div
          class="clearfix text-center home-category"
         
        >
          <router-link
            class="img-link"
            :to="{
              name: 'ListProduct',
              params: { categoryName: category.categoryName }
            }"
          >
            <figure >
              <img :src="category.imageUrl" alt="Rings" class="img-fluid" />
            </figure>
          </router-link>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </section>
  <!-- Category display -->
  <!-- <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
           <div class="text-center mb-3 heading"><h2>Featured Products</h2></div>
         </div>
         <div class="col-12">
                 <p>{{ category.categoryName }}</p>
         </div>
      </div>
    </div>
   </section> -->
  <!-- Product display -->
  <section class="py-4 home-featured-panel">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="text-center mb-3 heading"><h2>Featured Products</h2></div>
        </div>
        <div class="col-12">
          <div
            class="align-middle text-center d-inline"
            v-for="product in shuffle(products)"
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
  <!-- About Us -->
  <section class="py-4 text-center homepage_additional_text">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div>
            <div
              class="row flex-row-reverse d-flex justify-content-center align-items-center"
            >
              <div class="col-md-6 col-12">
                <figure>
                  <img
                    style=""
                    src="../assets/img/about_us.jpg"
                    class="img-responsive"
                  />
                </figure>
              </div>
              <div class="col-md-5 col-12 mx-auto text-left">
                <p class="my-1 font-weight-bold">Welcome at</p>
                <h3 class="h3">DAS&DAB Theme</h3>
                <p>
                  As a team of software engineers, we are excited to attend this
                  Software Engineer course. Our team has a wide range of
                  experience in software development, and we are eager to expand
                  our skills and knowledge in this field. We believe that this
                  course will provide us with valuable insights into software
                  engineering practices and emerging technologies. We are
                  looking forward to collaborating with other software engineers
                  in the course and learning from experienced instructors. We
                  are confident that the skills we will gain from this course
                  will help us to become better software engineers and
                  contribute to the software development community. We are
                  grateful for this opportunity to learn and grow, and we are
                  committed to making the most out of this course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog -->
  <div class="my-4 home-blogsection">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="heading">
            <h2 class="text-center">Blog Feed</h2>
          </div>
        </div>
      </div>
      <div class="my-3 home_blog">
        <div class="row no-gutters blog-hold card-deck">
          <div class="col-sm-4 col-12 rounded-0 card">
            <a href="/blog/victoria-a-wonderful-jewellery-for-women-2">
              <figure>
                <img
                  src="../assets/img/blog_1.jpg"
                  class="img-fluid w-100"
                  alt=" A wonderful jewellery for women"
                />
              </figure>
            </a>
            <div class="card-body">
              <span class="text-muted">April 16th, 2020</span>
              <h5 class="card-title">
                <a href="/blog/victoria-a-wonderful-jewellery-for-women-2">
                  A wonderful jewellery for women
                </a>
              </h5>
              <p class="card-text">
                We're delighted to announce that Rachel Boston has won Designer
                of the Year at the UK Jewellery at the UK Jewellery...
              </p>

              <a
                href="/blog/victoria-a-wonderful-jewellery-for-women-2"
                class="btn btn-sm btn-link text-primary pl-0 pr-0 btn-blog"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="col-sm-4 col-12 rounded-0 card">
            <a href="/blog/victoria-a-wonderful-jewellery-for-women-1">
              <figure>
                <img
                  src="../assets/img/blog_2.jpg"
                  class="img-fluid w-100"
                  alt=" A wonderful jewellery for women"
                />
              </figure>
            </a>
            <div class="card-body">
              <span class="text-muted">April 16th, 2020</span>
              <h5 class="card-title">
                <a href="/blog/victoria-a-wonderful-jewellery-for-women-1">
                  A wonderful jewellery for women
                </a>
              </h5>
              <p class="card-text">
                We're delighted to announce that Rachel Boston has won Designer
                of the Year at the UK Jewellery at the UK Jewellery...
              </p>

              <a
                href="/blog/victoria-a-wonderful-jewellery-for-women-1"
                class="btn btn-sm btn-link text-primary pl-0 pr-0 btn-blog"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="col-sm-4 col-12 rounded-0 card">
            <a href="/blog/victoria-a-wonderful-jewellery-for-women">
              <figure>
                <img
                  src="../assets/img/blog_3.jpg"
                  class="img-fluid w-100"
                  alt="A wonderful jewellery for women"
                />
              </figure>
            </a>
            <div class="card-body">
              <span class="text-muted">April 16th, 2020</span>
              <h5 class="card-title">
                <a href="/blog/victoria-a-wonderful-jewellery-for-women">
                  A wonderful jewellery for women
                </a>
              </h5>
              <p class="card-text">
                We're delighted to announce that Rachel Boston has won Designer
                of the Year at the UK Jewellery at the UK Jewellery...
              </p>

              <a
                href="/blog/victoria-a-wonderful-jewellery-for-women"
                class="btn btn-sm btn-link text-primary pl-0 pr-0 btn-blog"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["baseURL", "products", "categories"],
  data() {
    return {};
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
    }
  },
  mounted() {}
};
</script>

<style scoped>
.card-title a {
  text-decoration: none;
  color: black;
  font-size: larger;
}
.product-list-title:hover {
  color: #e58c82 !important;
}
.cut-price:hover {
  color: #e58c82 !important;
}
</style>
