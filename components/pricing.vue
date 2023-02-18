<template>
    <div class="h-screen bg__image__setup  text-light-text bg-fixed">
        <div class="h-screen flex flex-col justify-center items-center text-center gap-3 drop-shadow-lg">
        
        </div>
  </div>
   
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bg__image__setup {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/galaxy.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  width: 100%;
}
</style>