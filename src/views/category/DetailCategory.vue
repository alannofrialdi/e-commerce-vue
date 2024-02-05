<template>
  <div class="container">
    <div class="text-center mt-32">
      <h1 class="text-3xl font-bold mb-4">{{ category.categoryName }}</h1>
      <h3 class="text-lg text-gray-700">
        Found {{ category.products.length }} products
      </h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-4">
      <div v-for="product in category.products" :key="product.id">
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "@/components/ProductBox.vue";
export default {
  components: { ProductBox },
  props: ["endpoint", "categories"],
  data() {
    return {
      id: null,
      category: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id == this.id);
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  color: #333;
}

h3 {
  color: #666;
}

.grid {
  display: grid;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
