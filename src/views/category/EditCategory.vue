<template>
  <div
    id="edit-category"
    class="flex flex-col justify-center items-center mx-auto"
  >
    <h1 class="text-center mb-4 text-2xl">Edit Category</h1>
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs"
    >
      <div class="">
        <div class="form-group mb-4">
          <label for="name" class="block">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="category.categoryName"
          />
        </div>
        <div class="form-group mb-4">
          <label for="description" class="block">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="category.description"
          />
        </div>
        <div class="form-group mb-4">
          <label for="image" class="block">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="category.imageUrl"
          />
        </div>

        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="editCategory"
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
      category: null,
      id: null,
    };
  },
  methods: {
    async editCategory() {
      try {
        delete this.category["products"];
        console.log(this.category);
        await axios.post(
          `${this.endpoint}category/update/${this.id}`,
          this.category
        );
        this.$emit("fetchData");
        this.$router.push({ name: "show-category" });
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
    this.category = this.categories.find((category) => category.id === this.id);
  },
};
</script>

<style scoped>
#edit-category {
  margin-top: 6.8rem;
  margin-bottom: 6.8rem;
}
</style>
