<template>
    <div id="navfilter" class="sticky-top left-column">
          <div class="filter-panel">
            <div class="admin w-100">
              <h5 class="text-st">
                <i
                  class="fa-regular fa-circle-user fa-xl icon-st"
                  style="color: #050505"
                ></i>
                Admin
              </h5>
            </div>
            <div class="navbar-nav w-100">
              <router-link to="/admin" class="rout-link">
                <i
                  class="fa fa-tachometer-alt me-2 ict"
                  style="color: black"
                ></i>
                Dashboard
              </router-link>
              <router-link to="/admin/category" class="rout-link">
                <i class="fa-solid fa-bookmark ic" style="color: black"></i>
                Categories
              </router-link>
              <router-link to="/admin/product" class="rout-link">
                <i
                  class="fa-sharp fa-solid fa-bag-shopping ic"
                  style="color: black"
                ></i>
                Products
              </router-link>
              <router-link to="/admin/voucher" class="rout-link">
                <i class="fa-solid fa-gift ic" style="color: black"></i>
                Vouchers
              </router-link>
            </div>
          </div>
        </div>
</template>
<script>
</script>
<style scoped>
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