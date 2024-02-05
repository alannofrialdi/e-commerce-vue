<template>
  <div id="home">
    <div id="background-div" class="flex shrink">
      <div class="container">
        <h1 class="text-4xl font-bold pt-32 pl-4 text-slate-800">
          Wellcome to Online Shop
        </h1>
        <router-link :to="{ name: 'show-category' }">
          <button
            class="relative ml-4 mt-4 py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            Start Shopping
          </button>
        </router-link>
      </div>
      <section id="contact" class="w-dvw">
        <div
          class="max-w-md mt-28 mb-10 bg-white shadow-lg shadow-gray-700 rounded px-8 pt-6 pb-8 mx-auto"
        >
          <h2 class="text-2xl text-center text-black font-bold mb-4">
            Contact
          </h2>
          <p class="text-center text-black mb-4">
            Contact us for Costumer Service
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8032.590743469801!2d107.15460767273748!3d-6.219761007453431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69858476a9b23f%3A0x9eae9801491d1648!2sCITAVILLE%20PILAR%20CIKARANG!5e0!3m2!1sen!2sid!4v1699591157201!5m2!1sen!2sid"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-64 rounded-lg mb-8"
          ></iframe>

          <form>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
                >Name</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
                >Email</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="telephone"
                >Phone Number</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="telephone"
                type="tel"
                placeholder="Phone Number"
                pattern="(08)[0-9]{5,20}"
              />
            </div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      users: [],
      endpoint: `https://limitless-lake-55070.herokuapp.com/user/all?token=
`,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(this.endpoint + token, config);
        this.users = response.data;
        console.log(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
#background-div {
  position: sticky;
  top: 0;
  z-index: 0;
  background-image: url("../assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
