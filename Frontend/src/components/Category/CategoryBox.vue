<template>
  <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive-16by9">
      <img :src="category.imageUrl" alt="" class="card-img-top" />
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ category.categoryName }}</h5>
      <p class="card-text">{{ category.description }}</p>
      <div class="button">
        <router-link :to="{ name: 'EditCategory', params: { id: category.id } }">
        <button
          class="btn btn-outline-dark"
          style="pointer-events: none; font-size: 0.8rem"
        >
          <i class="fa-regular fa-pen-to-square fa-sm" style="color: #000"></i>
          Edit
        </button>
      </router-link>
      <button class="btn btn-outline-danger" style="font-size: 0.8rem" @click="deleteProduct(category.id)">
        <i class="fa-regular fa-trash-can fa-sm" style="color: #dc3646"></i>
        Delete
      </button>
      </div>
    
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {
    async deleteProduct(pid){
      const confirmDelete = await swal({
           title: "Are you sure?",
           text: "Once deleted, you will not be able to recover this product!",
           icon: "warning",
           buttons: true,
           dangerMode: true,
    });
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/category/delete/${pid}`).then(() => {
                        this.$emit("fetchData");
                        swal({
                            text: "category has been deleted successfully",
                            icon: "success"    
                        })
                        this.$router.push({name: "Category"})
                        this.$router.go(0)
                    }).catch(err => console.log('err', err));
                  }
  
    }
  }
};
</script>
<style scoped>
.button {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.card-img-top {
  object-fit: cover;
}
.css-button {
  position: absolute;
  bottom: 6px;
  right: 6px;
  height: 30px;
  line-height: 19px;
}
.css-button1 {
  position: absolute;
  bottom: 6px;
  left: 6px;
  height: 30px;
  line-height: 16px;
}
</style>
