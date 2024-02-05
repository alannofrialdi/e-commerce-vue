<template>
  <div class="mt-32 mb-10 size-2/5 mx-auto">
    <form
      @submit="signUp"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h1 class="text-2xl mb-4 text-center font-bold">Sign Up</h1>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
          >Email</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="firstName"
          >First Name</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          placeholder="First Name"
          v-model="firstName"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName"
          >Last Name</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          placeholder="Last Name"
          v-model="lastName"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
          >Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="confirmPassword"
          >Confirm Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          v-model="passwordConfirm"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  props: ["endpoint"],
  data() {
    return {
      email: null,
      firstName: null,
      lastName: null,
      password: null,
      passwordConfirm: null,
    };
  },
  methods: {
    async signUp(e) {
      e.preventDefault();

      if (this.password === this.passwordConfirm) {
        // call api

        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        };
        console.log("user", user);
        await axios
          .post(`${this.endpoint}/user/signup`, user)
          .then(() => {
            this.$router.replace("/");
            swal({
              text: "Sign Up Successful",
              icon: "success",
            });
          })
          .catch((err) => err);
      } else {
        // show some error
        swal({
          text: "Password not match",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style>
/* You can add custom styles here if needed */
</style>
