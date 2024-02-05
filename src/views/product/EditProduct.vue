<template>
  <div
    id="edit-product"
    class="flex flex-col justify-center items-center mt-24 mx-auto size-max"
  >
    <h1 class="text-center mb-4 text-2xl">Edit Product</h1>
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md lg:max-w-lg xl:max-w-xl"
      v-if="product"
    >
      <div class="mb-4">
        <label for="category" class="block text-gray-700 font-bold mb-2"
          >Category</label
        >
        <select
          name="category"
          id="category"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="categoryId"
          required
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.categoryName }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="name" class="block font-bold">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.name"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block font-bold">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.description"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="image" class="block font-bold">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.imageURL"
        />
      </div>
      <div class="mb-4">
        <label for="price" class="block font-bold">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="product.price"
        />
      </div>
      <div class="flex justify-center">
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          @click="editProduct"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  props: ["endpoint", "products", "categories"],
  data() {
    return {
      product: null,
      id: null,
    };
  },
  methods: {
    async editProduct() {
      try {
        console.log(this.product);
        await axios.post(
          `${this.endpoint}product/update/${this.id}`,
          this.product
        );
        this.$emit("fetchData");
        this.$router.push({ name: "admin-product" });
        swal({
          text: "Updated",
          icon: "success",
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id === this.id);
  },
};
</script>

<style></style>
