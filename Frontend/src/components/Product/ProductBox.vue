<template>
    <div class="card w-100 h-100" style="margin-top: 10px">
        <div class=" embed-responsive-16by9">
            <img :src="product.imageUrl" alt="" class="card-img-top">
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-number">${{ product.price }}</p>
            <p class="card-text">{{ product.description }}</p>
            <router-link :to="{name: 'EditProduct',params: {id: product.id} }">
                <button class="btn btn-primary css-button">Edit</button>
            </router-link>
            <button class="btn btn-primary css-button1 txt" >Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProductBox",
    props:["product"],
    methods:{
       
    },
}
</script>
<style scoped>
.card-img-top{
    object-fit: cover;
}
.css-button{
    position: absolute;
    bottom:6px;
    right:6px;
    height: 30px;
    line-height:19px;
}
.css-button1{
    position: absolute;
    bottom:6px;
    left:6px;
    height:30px;
    line-height:16px;
}
</style>