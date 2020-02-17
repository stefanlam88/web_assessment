<template>
    <div class="container-fluid">
      <div class="text-center">
       <h1>Freelancers / User List App</h1>
       <p> Built with Nest.js, Vue.js and MongoDB</p>
       <div v-if="users.length === 0">
            <h3> No user found at the moment </h3>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Skillsets</th>
                  <th scope="col">Hobby</th>
                  <th scope="col">Created</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user._id">
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.skillsets }}</td>
                  <td>{{ user.hobby }}</td>
                  <td>{{ user.created_at }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Edit', params: {id: user._id}}" class="btn btn-sm btn-outline-secondary">Edit </router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteUser(user._id)">Delete</button>
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get(`${server.baseURL}/api/user/users`)
        .then(data => (this.users = data.data));
    },
    deleteUser(id) {
      axios
        .delete(`${server.baseURL}/api/user/delete?userID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>
