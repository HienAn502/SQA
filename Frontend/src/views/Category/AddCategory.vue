<template>
    <div class="container">
        <div class="row head-ln">
            <div class="text-center">
                <h3>Add New Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="text-center form-second">
                <form action="">
                    <div class="form-group">
                        <label for="" class="mg-text">Category Name</label>
                        <input type="text" class="form-control" v-model="categoryName" />    
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Category Description</label>
                        <textarea type="text" class="form-control" v-model="description" />  
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Category Image</label>
                        <input type="text" class="form-control" v-model="imageUrl"/>    
                    </div>
                    <button type="button" class="btn btn-primary" @click = "addCategory">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script >
import axios from "axios";
import sweetalert from "sweetalert";

export default{
    data(){
        return{
            categoryName:"",
            description:"",
            imageUrl:"",
        };
    },
    methods: {
        addCategory(){
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl,
            };

            const baseURL = "http://localhost:8080/"

            axios({
                method: 'post',
                url:`${baseURL}category/create`,
                data: JSON.stringify(newCategory),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(()=>{
                sweetalert({
                    text:'Category added successfully',
                    icon:'success',
                })
                this.$router.push({name: "Category"})
            })
            .catch((err)=> {
                console.log(err);
            });
        },
    },
    
};
</script>
<style scoped>
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