<template>
  <div
    id="add-product"
    class="flex flex-col justify-center items-center mt-24 mx-auto size-max"
  >
    <h1 class="text-center mb-4 text-2xl font-bold">Add Product</h1>
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md lg:max-w-lg xl:max-w-xl"
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
        <label for="name" class="block text-gray-700 font-bold mb-2"
          >Name</label
        >
        <input
          type="text"
          name="name"
          id="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="name"
          required
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700 font-bold mb-2"
          >Description</label
        >
        <textarea
          type="text"
          name="description"
          id="description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="description"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="image" class="block text-gray-700 font-bold mb-2"
          >Image</label
        >
        <input
          type="text"
          name="image"
          id="image"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="imageURL"
          placeholder="Insert the URL"
          required
        />
      </div>
      <div class="mb-4">
        <label for="price" class="block text-gray-700 font-bold mb-2"
          >Price</label
        >
        <input
          type="text"
          name="price"
          id="price"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="price"
          required
        />
      </div>
      <div class="flex justify-center">
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          @click="addProduct"
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
  props: ["endpoint", "categories"],
  data() {
    return {
      id: null,
      categoryId: null,
      name: null,
      description: null,
      imageURL: null,
      price: null,
    };
  },
  methods: {
    async addProduct() {
      const newProduct = {
        categoryId: this.categoryId,
        name: this.name,
        description: this.description,
        imageURL: this.imageURL,
        price: this.price,
      };
      try {
        await axios.post(this.endpoint + "/product/add", newProduct);
        this.$router.push({ name: "admin-product" });
        swal({
          text: "Product Added",
          icon: "success",
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
/* You can add custom scoped styles here if needed */
.size-max {
  max-width: 1000px; /* Customize the max width of the form */
}
</style>
