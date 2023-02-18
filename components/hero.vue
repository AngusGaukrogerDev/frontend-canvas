<template>
  <div class="h-screen bg__image__setup  text-light-text bg-fixed">
    <div class="h-screen flex flex-col justify-center items-center text-center gap-3 drop-shadow-lg">
      <h1 class="font-bold text-7xl" data-aos="fade-left">ChronoFlow</h1>
      <h2 class="font-bold text-4xl">Optimise <span class="text-starblue">Your</span>  Team's <span class="text-starblue">Workflow</span> </h2>
      <h3 class="font-semibold text-2xl">Scheduling Simplified</h3>
      <button class="bg-space-grey py-2 px-2 rounded-md border-3 border-light-text">Get Started</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg__image__setup {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/space.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  width: 100%;
}
</style>
