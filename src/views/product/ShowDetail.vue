<template>
  <div class="container max-h-dvh mt-40">
    <div class="flex justify-center items-center gap-10">
      <!-- img -->
      <div>
        <img
          :src="product.imageURL"
          :alt="product.name"
          class="size-80 rounded-xl shadow-md"
        />
      </div>
      <!-- content -->
      <div class="flex flex-col max-w-sm bg-white shadow-md p-4 rounded-md">
        <h1 class="font-bold text-center">{{ product.name }}</h1>
        <h3 class="italic text-center">{{ category.categoryName }}</h3>
        <div class="flex items-center">
          <label for="quantity">Quantity: </label>
          <input
            type="number"
            v-model="quantity"
            class="rounded w-10 pl-2 border ml-2 shadow"
          />
        </div>
        <p class="mt-2">Price: ${{ product.price }}</p>
        <p class="text-wrap mt-2">Description: {{ product.description }}</p>
        <button
          class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
          @click="addToWishlist"
        >
          {{ wishList }}
        </button>
        <button
          class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
          @click="addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  props: ["endpoint", "products", "categories"],
  data() {
    return {
      product: {},
      category: {},
      wishList: "Add To Wishlist",
      quantity: 1,
    };
  },
  methods: {
    addToWishlist() {
      if (!this.token) {
        swal({
          text: "please sign-in to add wishlist",
          icon: "error",
        });
        return;
      }
      axios
        .post(`${this.endpoint}/wishlist/add?token=${this.token}`, {
          id: this.product.id,
        })
        .then((res) => {
          if (res.status === 201) {
            this.wishList = "Added to Wishlist";
            swal({
              text: "Successfuly added to wishlist",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addToCart() {
      if (!this.token) {
        swal({
          text: "please sign-in to add to cart",
          icon: "error",
        });
        return;
      }
      axios
        .post(`${this.endpoint}/cart/add?token=${this.token}`, {
          productId: this.id,
          quantity: this.quantity,
        })
        .then((res) => {
          if (res.status === 201) {
            swal({
              text: "product added to cart",
              icon: "success",
            });
            this.$emit("fetchData");
          }
        })
        .catch((err) => err);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 9.91rem;
}
</style>
