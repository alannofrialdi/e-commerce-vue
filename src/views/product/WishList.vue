<template>
  <div class="my-28 max-h-max min-h-dvh">
    <div class="flex justify-between flex-col mx-4 items-center mb-4">
      <h1 class="text-3xl font-bold">Wishlist</h1>
      <div class="flex justify-center items-center gap-2 my-4">
        <span class="font-bold">Clear ></span>
        <button
          class="flex justify-center items-center gap-2 w-12 h-6 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
          @click="deleteWishlist"
        >
          <svg viewBox="0 0 15 15" class="w-5 fill-white">
            <svg
              class="w-6 h-6"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            Button
          </svg>
        </button>
      </div>
    </div>
    <!-- display the wishlist -->
    <div
      v-if="load"
      class="flex flex-row gap-2 justify-center items-center mx-auto h-dvh"
    >
      <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
      <div
        class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"
      ></div>
      <div
        class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"
      ></div>
    </div>
    <div
      class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="(product, index) in products"
        :key="index"
        class="rounded-lg overflow-hidden bg-white shadow-lg"
      >
        <img
          :src="product.imageURL"
          :alt="product.name"
          class="w-full h-64 object-cover"
          v-if="!deleted"
        />
        <div class="px-6 py-4" v-if="!deleted">
          <div class="font-bold text-xl mb-2">{{ product.name }}</div>
          <p class="text-gray-700 text-base">{{ product.description }}</p>
          <p class="text-gray-900 text-xl mt-2">${{ product.price }}</p>
          <router-link
            :to="{ name: 'show-detail', params: { id: product.id } }"
          >
            <button
              type="button"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
            >
              Detail
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["endpoint"],
  data() {
    return {
      token: null,
      products: [],
      deleted: false,
      load: true,
    };
  },
  methods: {
    async fetchWishlist() {
      try {
        const res = await axios.get(`${this.endpoint}/wishlist/${this.token}`);
        this.products = res.data;
        this.load = false;
      } catch (err) {
        console.error(err);
      }
    },
    deleteWishlist() {
      // delete nya cuma visual, soalnya di api engga ada method delete
      this.deleted = true;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchWishlist();
  },
};
</script>
