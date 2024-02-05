<template>
  <div
    id="add-category"
    class="flex flex-col justify-center items-center mt-24 mx-auto"
  >
    <h1 class="text-center mb-4 text-2xl font-bold">Add Category</h1>
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs"
    >
      <div class="">
        <div class="form-group mb-4">
          <label for="name" class="block">Category Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="category.name"
          />
        </div>
        <div class="form-group mb-4">
          <label for="description" class="block">Category Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="category.desc"
          />
        </div>
        <div class="form-group mb-4">
          <label for="image" class="block">Category Image</label>
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
          @click="addCategory"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import sweetAlert from "sweetalert";

export default {
  name: "AddCategory",
  data() {
    return {
      category: {
        name: "",
        desc: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    addCategory() {
      const newCategory = {
        categoryName: this.category.name,
        description: this.category.desc,
        imageUrl: this.category.imageUrl,
      };
      const endpoint = "https://limitless-lake-55070.herokuapp.com/";

      axios({
        method: "post",
        url: `${endpoint}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          sweetAlert({
            text: "Category added successfully",
            icon: "success",
          });
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
#add-category {
  margin-top: 6.8rem;
  margin-bottom: 6.8rem;
}
</style>
