<template>
<div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Category</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Category Name</label>
            <input type="text" class="form-control" v-model="categoryName" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="description" required>
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="imageUrl" required>
          </div>
          <button type="button" class="btn btn-primary" @click="editCategory">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    props: ["baseURL", "products", "categories"],
  data(){
    return {
      id : null,
      categoryName : null,
      description : null,
      imageUrl : null,
      categoryIndex : null
    }
  },
  methods : {
    async editCategory() {
      const updatedCategory = {
        id : this.id,
        categoryName : this.categoryName,
        description : this.description,
        imageUrl : this.imageUrl,
      }
      await axios.post(
        `${this.baseURL}category/update/${this.id}`, updatedCategory
      )
      .then(() => {
        this.$emit("fetchData")
        this.$router.push({name: 'Category'})
        swal({
          text: "Category Updated Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.filter(category => category.id == this.id)[0];
    this.categoryName = this.category.categoryName;
    this.description = this.category.description;
    this.imageUrl = this.category.imageUrl;
  }
}
</script>
<style scoped>

form {
    margin: 30px 0px;
}
.head-ln{
    margin-top: 2rem;
    margin-bottom: 15px;
}
.form-second{
    margin-bottom: 1.5rem;
}
.form-group{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.form-control{
    margin: 0 auto;
    height:46px;
}
.mg-text{
    margin-bottom: 10px;
}
@media (min-width: 767px){
    .form-control{
        width: 600px;
    }
}

</style>