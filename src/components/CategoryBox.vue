<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md category-box">
    <img
      class="w-full h-48 object-cover object-center rounded-t-lg"
      :src="category.imageUrl"
      :alt="category.categoryName"
    />
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-2">{{ category.categoryName }}</h2>
      <p class="text-gray-700">{{ category.description }}</p>
      <div class="mt-4">
        <p
          v-if="category.products.length > 0"
          class="text-gray-700 font-semibold"
        >
          Price: ${{ category.products[0].price }}
        </p>
        <p v-else class="text-gray-700">No products available</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["category"],
};
</script>

<style scoped>
.category-box {
  transition: transform 0.3s ease;
}

.category-box:hover {
  transform: translateY(-5px);
}

.category-box img {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.category-box .p-6 {
  padding: 1.5rem;
}

.category-box h2 {
  font-size: 1.5rem;
}

.category-box p {
  font-size: 1rem;
}
</style>
