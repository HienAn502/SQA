<template>
  <div class="container-fluid">
    <div class="py-3 sub-hold">
      <div class="mb-4 layout-column clearfix ">
        <SlideBarAdmin></SlideBarAdmin>
        <div class="voucher-items">
          <div class="right-column">
            <div class="row">
              <div class="col-12 text-left ms-2">
                <h3 class="pt-3">Ours Vouchers</h3>
                <router-link to="/admin/voucher/add">
                  <button class="btn btn-primary plus-btn">
                    <i class="fa-solid fa-plus fa-2xl" style="
                        color: #ffffff;
                        transform: translateX(-1px) translateY(1px);
                      "></i>
                  </button>
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <table class="todo-container">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Rate</th>
                      <th>Created Date</th>
                      <th>Expired Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="voucher in vouchers" :key="voucher.id">
                      <td>{{ voucher.id }}</td>
                      <td>{{ voucher.name }}</td>
                      <td>{{ voucher.rate }}</td>
                      <td>{{ new Date(voucher.createdDate).toLocaleDateString() }}</td>
                      <td>{{ new Date(voucher.expiredDate).toLocaleDateString() }}</td>
                      <td class="action">
                        <router-link :to="{
                          name: 'EditVoucher',
                          params: { id: voucher.id }
                        }">
                          <button class="edit-btn">Edit</button>
                        </router-link>

                        <button class="fa fa-trash trash-btn" @click="deleteVoucher(voucher.id)"></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>



        <!-- <div class="right-column">
          <h5 class="wel-txt mt-3 mb-3">VOUCHERS</h5>
          <router-link to="/admin/voucher/add">
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
          <div class="container-fluid">
            <div class="product-inline-hold">
              <div
                class="content"
              >
                  <div class="voucher-info"  v-for="voucher in vouchers" :key="voucher.id">
                    <div class="voucher-name">{{ voucher.name }}</div>
                    <div class="voucher-actions">
                      <router-link
                                :to="{
                                  name: 'EditVoucher',
                                  params: { id: voucher.id }
                                }"
                              >
                      <button
                        class="btn btn-primary mr-2"
                      
                      >
                        Edit
                      </button>
                      </router-link>
                      
                      <button
                        class="btn btn-danger delete-btn"
                        @click="deleteVoucher(voucher.id)"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SlideBarAdmin from "../SlideBarAdmin.vue";
export default {
  components: { SlideBarAdmin },
  data() {
    return {
      vouchers: ""
    };
  },
  props: ["baseURL", "vouchers"],
  methods: {
    async getVoucher() {
      await axios
        .get(`${this.baseURL}voucher/`)
        .then((res) => {
          console.log(res.data);
          this.vouchers = res.data;
        })
        .catch((err) => console.log("err", err));
    }, async deleteVoucher(pid) {
      const confirmDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (confirmDelete) {
        await axios.delete(`${this.baseURL}voucher/delete/${pid}`).then(() => {
          this.$emit("fetchData");
          swal({
            text: "Voucher has been deleted successfully",
            icon: "success"
          })
          this.$router.push({ name: "Voucher" })
          window.location.reload()
        }).catch(err => console.log('err', err));
      }

    }
  },
  mounted() {
    this.getVoucher();
  }
};
</script>
<style scoped>
.voucher-items {
  max-width: 920px;
  margin: auto
}

.container {
  width: 50%;
}

.content {
  width: 50%;
  margin-left: 16%;
}

.voucher-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.voucher-name {
  font-weight: bold;
}

.slidebar {
  margin-left: 100px;
  margin-bottom: 5px;
  margin-top: 50px;
}

.wel-txt {
  margin-left: 450px;
}

.plus-btn {
  position: relative;
  margin-right: 15px;
  float: right;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.todo-button {
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  font-size: 1.8rem;
  border: none;
  border-radius: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  color: #820000;
  background: #FAECD6;
  cursor: pointer;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  transition: all 0.3ms ease;
}

.todo-button:hover {
  color: #FAECD6;
  background: #820000;
}

.fa-plus-circle {
  margin-top: 0.3rem;
  margin-left: -8px;
}

.todo-container {
  background: #fff;
  color: #000;
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 1.rem;
  min-width: 500px;
  border-radius: 5px 5px 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.todo-container thead tr {
  background: #e58c82;
  text-align: left;
  font-weight: bold;
}

.todo-container th,
.todo-container td {
  padding: 12px 15px;
  background: #e58c82;
}

.todo-container tbody tr {
  background: #FFC9C9;
  margin-top: 20px;
  border-bottom: 1px solid #FFC9C9;
}

.todo-container tbody tr td {
  background: #FFC9C9;
}

.todo-container tbody tr:last-of-type {
  border-bottom: 2px solid #FFC9C9;
}

.complete {
  background: #E4E9BE;
}

.trash-btn,
.edit-btn {
  color: #FAECD6;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.25rem;
}

.edit-btn {
  border-top-left-radius: 1.75rem;
  border-bottom-left-radius: 1.75rem;
  background: #e58c82;
  line-height: 1;
}

.action {
  display: flex;
}

.trash-btn {
  border-top-right-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  background: #e58c82;
}

/*.fa-trash, .fa-check-circle {*/
/*    pointer-events: none;*/
/*}*/
.trash-btn:hover,
.edit-btn:hover {
  color: #e58c82;
  background: #FAECD6;
}

.slide {
  transform: translateX(10rem);
  opacity: 0;
}</style>
