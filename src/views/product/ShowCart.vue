<template>
  <div class="container mx-auto mt-20 max-h-max min-h-dvh px-4 py-12">
    <div class="flex justify-between">
      <h1 class="text-3xl font-semibold mb-8">Your Cart</h1>
      <div>
        <p class="text-xl font-semibold">Total Cost: ${{ totalCost }}</p>
      </div>
    </div>
    <p v-if="!token" class="text-red-500 font-bold">
      Login first to see your cart
    </p>
    <div
      v-if="load && token"
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
        v-for="item in cartItems"
        :key="item.id"
      >
        <img
          class="h-64 w-full object-cover"
          :src="item.product.imageURL"
          :alt="item.product.name"
        />
        <div class="p-6 flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold mb-2">{{ item.product.name }}</h3>
            <p class="text-gray-600 mb-4">{{ item.product.description }}</p>
            <p class="text-gray-800 font-semibold mb-2">
              Price: ${{ item.product.price }}
            </p>
            <p class="text-gray-800 font-semibold mb-2">
              Quantity: {{ item.quantity }}
            </p>
          </div>
          <div class="mt-4 flex items-center gap-2">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="deleteCartItem(item.id)"
            >
              Remove
            </button>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Buy Now
            </button>
          </div>

          <div
            v-if="cartItems.length <= 0"
            class="animate-pulse font-bold text-red-500"
          >
            Your cart is empty, please add to cart in the product detail.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  props: ["endpoint"],
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
      load: true,
    };
  },
  methods: {
    async listCartItems() {
      try {
        const res = await axios.get(
          `${this.endpoint}/cart/?token=${this.token}`
        );
        this.cartItems = res.data.cartItems;
        this.totalCost = res.data.totalCost;
        this.load = false;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCartItem(itemId) {
      try {
        const res = await axios.delete(
          `${this.endpoint}/cart/delete/${itemId}/?token=${this.token}`
        );
        if (res.status === 200) {
          swal({
            text: "Delete item success",
            icon: "success",
          });
          setTimeout(() => {
            this.$router.go();
          }, 1500);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
  },
};
</script>
