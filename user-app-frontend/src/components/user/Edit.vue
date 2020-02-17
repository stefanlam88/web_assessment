<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Users </button>
         </small>
        </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Edit User </h2>

          <form id="create-post-form" @submit.prevent="editUser">

               <div class="form-group col-md-12">
                <label for="title"> User Name <span class="text-danger">*</span></label>
                <input type="text" id="username" v-model="user.username" name="title" class="form-control" placeholder="Enter username">

               </div>
               <div class="form-group col-md-12">
                <label for="title"> Email <span class="text-danger">*</span></label>
                <input type="text" id="email" v-model="user.email" name="title" class="form-control" placeholder="Enter email">
               </div>
             <div class="form-group col-md-12">
                <label for="title"> Phone <span class="text-danger">*</span></label>
                <input type="text" id="phone" v-model="user.phone" name="title" class="form-control" placeholder="Enter phone">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Skillsets </label>
                <input type="text" id="phone_number" v-model="user.skillsets" name="title" class="form-control" placeholder="Enter Skillsets">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Hobby </label>
                <input type="text" id="hobby" v-model="user.hobby" name="title" class="form-control" placeholder="Enter Hobby">
            </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Edit User </button>
              </div>           </form>
        </div>
    </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      user: {},
      errors: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCustomer();
  },
  methods: {
    editUser() {


      let userData = {
        username: this.user.username,
        email: this.user.email,
        phone: this.user.phone,
        skillsets: this.user.skillsets,
        hobby: this.user.hobby
      };
      axios
        .put(
          `${server.baseURL}/api/user/update?userID=${this.id}`,
          userData
        )
        .then(data => {
          console.log(data);

          router.push({ name: "home"});
        });
    },
    getCustomer() {
      axios
        .get(`${server.baseURL}/api/user/user/${this.id}`)
        .then(data => (this.user = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>
