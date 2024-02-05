<template>
  <div id="app">
    <!-- loader -->
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
    <!-- content -->
    <div v-else>
      <NavBar />
      <router-view
        v-if="categories && products"
        :categories="categories"
        :endpoint="endpoint"
        :products="products"
        @fetchData="fetchData"
      />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  components: { NavBar, FooterSection },
  data() {
    return {
      endpoint: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      load: true,
    };
  },
  methods: {
    async fetchData() {
      try {
        const categoryResponse = await axios.get(this.endpoint + "category/");
        this.categories = categoryResponse.data;

        const productsResponse = await axios.get(this.endpoint + "product/");
        this.products = productsResponse.data;

        this.load = false;
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
