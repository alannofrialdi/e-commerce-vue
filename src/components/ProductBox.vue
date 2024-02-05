<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md product-box">
    <img
      class="w-full h-48 object-cover object-center rounded-t-lg"
      :src="product.imageURL"
      :alt="product.name"
    />
    <div class="p-4">
      <h2 class="text-2xl font-semibold mb-2">{{ product.name }}</h2>
      <p class="text-gray-700">{{ product.description }}</p>
      <div class="mt-2">
        <p class="text-gray-700 font-semibold">Price: ${{ product.price }}</p>
      </div>
      <div class="button flex gap-3">
        <router-link :to="{ name: 'edit-product', params: { id: product.id } }">
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
        </router-link>
        <router-link :to="{ name: 'show-detail', params: { id: product.id } }">
          <button
            type="button"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
          >
            Detail
          </button>
        </router-link>
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
