<template>
  <div
    id="show-category"
    class="flex justify-items-center mt-20 flex-col items-center"
  >
    <h1 class="text-center my-2 text-2xl">Categories</h1>
    <router-link :to="{ name: 'add-category' }">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        add category
      </button>
    </router-link>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2 mx-4 gap-4 mt-4"
    >
      <CategoryBoxVue
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
      />
    </div>
  </div>
</template>
<script>
import CategoryBoxVue from "@/components/CategoryBox.vue";
export default {
  props: ["categories", "endpoint"],
  components: {
    CategoryBoxVue,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style></style>
