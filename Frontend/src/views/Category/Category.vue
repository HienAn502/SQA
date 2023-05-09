<template>
    <div class="container">
    <div class="container">
      <div class="py-3 sub-hold">
        <div class="mb-4 layout-column clearfix">
            <SlideBarAdmin></SlideBarAdmin>
            <div class="right-column category-items">
                <div class="row">
           <div class="col-12 mt-4 mb-4">
               <h3 class="">Ours Categories</h3>
               <router-link to="/admin/category/add">
                  <button class="btn btn-primary plus-btn">
                    <i
                      class="fa-solid fa-plus fa-2xl"
                      style="
                        color: #ffffff;
                        transform: translateX(-1px) translateY(1px);
                      "
                    ></i>
                  </button>
                </router-link>
           </div>
       </div>
       <div class="row all-cards">
           <div v-for="category in categories" :key = "category.id" class="col-xl-4 col-12 pt-3 col-md-6 d-flex">
               <CategoryBox :category="category"></CategoryBox>
           </div>
       </div>
            </div>
       
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import CategoryBox from '../../components/Category/CategoryBox.vue';
import SlideBarAdmin from "../SlideBarAdmin.vue"
export default{
    name: "Category",
  
    components: { CategoryBox, SlideBarAdmin },
    data(){
        return{
            categories:[]
        };
    },
    methods: {
        async getCategories(){
            await axios
            .get("http://localhost:8080/category/list")
            .then(res => this.categories=res.data)
            .catch(err => console.log(err))
        }      
    },

    mounted() {
        this.getCategories();
    }  
};
</script>
<style scoped>
.all-cards{
    margin-top: 0px;
    margin-bottom: 40px;
}
.pt-3{
    margin-top:0px;
    margin-bottom:15px;
}
.plus-btn {
  float: right;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

</style>