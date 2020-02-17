
<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create User </h2>
          <form id="create-post-form" @submit.prevent="createUser">


               <div class="form-group col-md-12">
                <label for="title"> Username <span class="text-danger">*</span></label>
                <input type="text" id="username" v-model="username" name="title" class="form-control" placeholder="Enter username">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Email <span class="text-danger">*</span></label>
                <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder="Enter Email">
               </div>
             <div class="form-group col-md-12">
                <label for="title"> Phone <span class="text-danger">*</span></label>
                <input type="text" id="phone" v-model="phone" name="title" class="form-control" placeholder="Enter phone">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Skillsets </label>
                <input type="text" id="skillsets" v-model="skillsets" name="title" class="form-control" placeholder="Enter skillsets">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Hobby </label>
                <input type="text" id="hobby" v-model="hobby" name="title" class="form-control" placeholder="Enter hobby">
            </div>

              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create User </button>
              </div>           </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";


export default {
  data() {
    return {
      username: "",
      email: "",
      phone: "",
      skillsets: "",
      hobby: "",
      errors:[]
    };
  },
  methods: {
    createUser() {
      let userData = {
        username: this.username,
        email: this.email,
        phone: this.phone,
        skillsets: this.skillsets,
        hobby: this.hobby
      };
      this.__submitToServer(userData);
    },
    __submitToServer(data) {
      this.errors = [];
      axios.post(`${server.baseURL}/api/user/create`, data).then(data => {
        if(data.statusCode == 400){
          console.log(data.statusCode);
        }
        router.push({ name: "home" });
      }, (error) => {
        console.log(error);
       });
    }
  }
};
</script>
