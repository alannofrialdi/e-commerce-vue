<template>
  <div id="app">
    <nav class="bg-slate-800 w-full">
      <NavBar />
    </nav>
    <router-view
      :categories="categories"
      :endpoint="endpoint"
      :products="products"
    />
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      endpoint: "https://limitless-lake-55070.herokuapp.com/",
      products: [],
      categories: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const categoryResponse = await axios.get(this.endpoint + "category/");
        this.categories = categoryResponse.data;

        const productsResponse = await axios.get(this.endpoint + "product/");
        this.products = productsResponse.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
nav {
  margin-bottom: 4rem;
}

@media (max-width: 768px) {
  nav {
    margin-bottom: 8rem;
  }
}
</style>
