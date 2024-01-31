<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md product-box">
    <img
      class="w-full h-48 object-cover object-center rounded-t-lg"
      :src="product.imageURL"
      :alt="product.name"
    />
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-2">{{ product.name }}</h2>
      <p class="text-gray-700">{{ product.description }}</p>
      <div class="mt-4">
        <p class="text-gray-700 font-semibold">Price: ${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"],
};
</script>

<style scoped>
.product-box {
  transition: transform 0.3s ease;
}

.product-box:hover {
  transform: translateY(-5px);
}

.product-box img {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.product-box .p-6 {
  padding: 1.5rem;
}

.product-box h2 {
  font-size: 1.5rem;
}

.product-box p {
  font-size: 1rem;
}
</style>
