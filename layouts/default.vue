<template>
  <div class="scroll-smooth">
    <header>
      <nav
        class="w-full fixed flex justify-center items-center px-10 py-8 text-light-text z-100"
      >
        <ul class="flex flex-row justify-between gap-7">
          <li class="hover:cursor-pointer"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="hover:cursor-pointer"><NuxtLink to="/#about">About</NuxtLink></li>
          <li class="hover:cursor-pointer"><NuxtLink to="/pricing">Pricing</NuxtLink></li>
          <li class="hover:cursor-pointer"><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class=" ">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
