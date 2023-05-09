<template>
    <div class="container">
        <div class="row head-ln">
            <div class="text-center">
                <h3>Add New Voucher</h3>
            </div>
        </div>

        <div class="row">
            <div class="text-center form-second">
                <form>
                    <div class="form-group">
                        <label for="" class="mg-text">Voucher Name</label>
                        <input type="text" class="form-control" v-model="name"/>    
                    </div>
                    <!-- <div class="form-group">
                        <label for="" class="mg-text">Voucher Created Date</label>
                        <input type="datetime" class="form-control" v-model="createdDate"/>  
                    </div> -->
                    <div class="form-group">
                        <label for="" class="mg-text">Voucher Expired Date</label>
                        <input type="date" class="form-control" v-model="expiredDate"/>    
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Voucher Rate</label>
                        <input type="number" class="form-control" v-model="rate"/>    
                    </div>
                    <button type="button" class="btn btn-primary" @click.prevent = "addVoucher">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default{
    props : ["baseURL"],
    data(){
        return{
            voucher:{
                id: "",
                name:"",
                createdDate: "",
                expiredDate: "",
                rate: ""
            },
        }
    },
    methods: {
       async addVoucher(){
            const newVoucher = {
                name: this.name,
                expiredDate: this.expiredDate,
                rate: this.rate
            };

          await  axios.post(`${this.baseURL}voucher/create`, newVoucher)
            .then((res) => {
                console.log(res.message)
                swal({
                    text: "Voucher added successfully",
                    icon: "success",
                    closeOnClickOutside: false,
                })
                this.$emit("fetchData")
                this.$router.push({name : "Voucher"});
                
            }).catch((err) => {
                console.log("err", err);
            })

        }   
    }

}
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