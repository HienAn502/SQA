<template>
    <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Voucher</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0 text-center">
        <form v-if="voucher">
          <div class="form-group">
            <label>Voucher Name</label>
            <input type="text" class="form-control" v-model="voucher.name" required>
          </div>
          <div class="form-group">
            <label>Expired Date</label>
            <input type="url" class="form-control" v-model="voucher.expiredDate" required>
          </div>
          <div class="form-group">
            <label>Rate</label>
            <input type="url" class="form-control" v-model="voucher.rate" required >
          </div>
          <button type="button" class="btn btn-primary mb-3" @click="editVoucher">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
    export default {
        data() {
            return {
                voucher: null,
                id: null
            }
        },
        props: ["baseURL", "vouchers"],
        methods: {
            async editVoucher() {
              console.log(this.voucher)
                await axios.post(`${this.baseURL}voucher/edit/${this.id}`,
                    this.voucher)
                    .then(() => {
                        this.$emit("fetchData");
                        this.$router.push({name: "Voucher"})
                        swal({
                            text: "Voucher has been updated successfully",
                            icon: "success"
                        })
                    }).catch(err => console.log('err', err));
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.voucher = this.vouchers.find(voucher => voucher.id == this.id)
        }
    }
</script>
<style scoped>
form {
    margin: 30px 0px;
}
</style>