<template>
  <div id="home">
    <div id="background-div" class="h-dvh">
      <div class="container">
        <h1 class="text-4xl font-bold pt-40 pl-4 text-slate-800">
          Wellcome to Online Shop
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
#background-div {
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    ),
    url("../assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
