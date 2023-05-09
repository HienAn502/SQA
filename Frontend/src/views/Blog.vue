<template>
  <div class="page-section">
      <!-- head-link -->
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="link-text mt-3 mb-4 pb-2 border-bottom">
                      <a href="/blog/" >Home </a>

                  </div>
                  <div class="mb-4"></div>
              </div>
          </div>
      </div>

      <!-- content -->
      <div class="container">
          <div class="row">
              <!-- column-left -->
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div class="py-2 mb-3 d-block d-sm-none">
                      <div class="row">
                          <div class="col-md-12">
                              <div class="text-center text-uppercase d-flex align-item-center justify-content-center" 
                              data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                  <img src="/src/assets/img/img-blog/address-book.svg" alt="">Categories
                              </div>
                              <div class="collapse" id="collapseExample">
                                  <div class="">
                                      <ul class="list-unstyled text-center">
                                          <li class="border-bottom py-2" cd >
                                              <a href="">Fashion Jewelry</a>
                                          </li>
                                      </ul>
                                  </div>                
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col-sm-12 col-xs-12">
                          <a href="" class="">
                              <figure class="mb-2">
                                  <img src="/src/assets/img/img-blog/ring1.jpg" 
                                  alt="DAS&DAB: A wonderful ring for women" class="img-fluid">
                              </figure>
                          </a>
                          <div class="text-small">March 20th, 2023</div>
                          <h2 class="text-intro">
                              <a href="" class="">DAS&DAB: A wonderful ring for women</a>
                          </h2>
                          <p class="text-des">We're delighted to announce that this ring 
                              is in my new collection.
                          </p>
                          <a href="" class="btn btn-primary btn-sm mb-4">Continue Reading</a>
                      </div>
                  </div>
                  <div class="row mt-4 pt-3">
                      <div class="col-md-6 col-sm-12 col-xs-12">
                          <a href="" class="">
                              <figure class="mb-2">
                                  <img src="/src/assets/img/img-blog/ring2.jpg" 
                                  alt="DAS&DAB: A wonderful ring for women" class="img-fluid">
                              </figure>
                          </a>
                          <div class="text-small">March 20th, 2023</div>
                          <h2 class="text-intro">
                              <a href="" class="">DAS&DAB: A wonderful ring for women</a>
                          </h2>
                          <p class="text-des">We're delighted to announce that this ring 
                              is a new version. This is a new design that has just released.
                          </p>
                          <a href="" class="btn btn-primary btn-sm mb-4">Continue Reading</a>
                      </div>
                      <div class="col-md-6 col-sm-12 col-xs-12">
                          <a href="" class="">
                              <figure class="mb-2">
                                  <img src="/src/assets/img/img-blog/ring3.jpg" 
                                  alt="DAS&DAB: A wonderful ring for women" class="img-fluid">
                              </figure>
                          </a>
                          <div class="text-small">March 20th, 2023</div>
                          <h2 class="text-intro">
                              <a href="" class="">DAS&DAB: A wonderful ring for women</a>
                          </h2>
                          <p class="text-des">We're delighted to announce that this version
                              is in my new collection.
                          </p>
                          <a href="" class="btn btn-primary btn-sm mb-4">Continue Reading</a>

                      </div>  
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="text-center pagination-total">
                              <div class="text-center marginbottom20 h5">Total Results - 3</div>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- column-right  -->
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 border-left ">
                  <div class="d-none d-sm-block blg-catergory-links">
                      <h4 class="text-uppercase">
                          <img src="/src/assets/img/img-blog/address-book.svg" alt="" class="">  Catergories
                      </h4>
                      <ul class="list-unstyled" onclick="showDiv()">
                          <li class="border-bottom py-2" @click="recentpost =!recentpost">
                              <a href="#" class="">Fashion Jewelry</a>
                          </li>
                      </ul>
                  </div>

                  <!-- Recent Post  -->
                  <div class="clearfix facebook-aside-hold" v-show ="recentpost">
                      <div class="border mb-2 py-2 text-uppercase small text-center">Recent Post</div>
                      <ul class="list-unstyled">
                          <li class="border-bottom mb-3">
                              <a href="/blog/victoria-a-wonderful-jewellery-for-women-2">
                                  <figure class="mb-1 text-center">
                                      <img src="/src/assets/img/img-blog/ring1.jpg" class="img-fluid" alt="Victoria: A wonderful jewellery for women">                                        
                                  </figure>
                              </a>
                              <div class="mb-3">
                                  <p class="mb-0"><a href="/blog/victoria-a-wonderful-jewellery-for-women-2">Victoria: A wonderful jewellery for women</a></p>
                                  <small class="text-muted">April 16th, 2020</small>
                              </div>
                          </li>
                                
                          <li class="border-bottom mb-3">
                              <a href="/blog/victoria-a-wonderful-jewellery-for-women-1">
                                  <figure class="mb-1 text-center">
                                      <img src="/src/assets/img/img-blog/ring2.jpg" class="img-fluid" alt="Victoria: A wonderful jewellery for women">                                        
                                  </figure>
                              </a>
                              <div class="mb-3">
                                  <p class="mb-0"><a href="/blog/victoria-a-wonderful-jewellery-for-women-1">Victoria: A wonderful jewellery for women</a></p>
                                  <small class="text-muted">April 16th, 2020</small>
                              </div>
                          </li>
                          <li class="border-bottom mb-3">
                              <a href="/blog/victoria-a-wonderful-jewellery-for-women">
                                  <figure class="mb-1 text-center">
                                      <img src="/src/assets/img/img-blog/ring3.jpg" class="img-fluid" alt="Victoria: A wonderful jewellery for women">                                        
                                  </figure>
                              </a>
                              <div class="mb-3">
                                <p class="mb-0"><a href="">Victoria: A wonderful jewellery for women</a></p>
                                <small class="text-muted">April 16th, 2020</small>
                            </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default{
  data(){
      return{
          recentpost: false
      }
  }
}
</script>

<style scoped>
.container{
  width:100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row{
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-md-12{
  position: relative;
  width: 100%;
  padding-right: 9px;
  padding-left: 9px;
}
.pb-2{
  padding-bottom: 0.5rem!important;
}
.mb-4{
  margin-bottom: 1.5rem !important;
}
.mt-3{
  margin-top: 1rem !important;
}
.border-bottom{
  border-bottom: 1px solid #dee2e6 !important;
}
a{
  color:#000000;
  text-decoration: none;
  background-color: transparent;
}
a:hover{
  color:#E58C82;
}
.mb-2{
  margin-bottom: 0.5rem !important;
}
figure{
  margin:0 0 1rem;
  display:block;
}
.img-fluid{
  max-width: 100%;
  height:auto;
}
img{
  vertical-align: middle;
  border-style: none;
}
.text-small{
  color:#6c757d !important;
}
.text-intro>a{
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height:1.2;
  font-family: 'Libre Caslon Text', serif;
}
.text-small, .text-des{
  font-size:13px;
}

.border-left{
  border-left: 1px solid #dee2e6 !important;
}

@media(max-width:575px){
 
  .text-intro{
      font-size: 6vw;
  } 
  .mt-4{
      margin-top:-1.5rem !important;
  }
  .py-2>a{
      font-size: 13.5px;
  }
}
h4>.text-uppercase{
  text-transform: uppercase;
  margin-left:3px;

}
</style>