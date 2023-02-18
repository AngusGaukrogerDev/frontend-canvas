<template>
  <div class="scroll-smooth">
    <header>
      <nav
        class="w-full fixed flex justify-center items-center px-10 py-8 text-light-text"
      >
        <ul class="flex flex-row justify-between gap-7">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/#about">About</NuxtLink></li>
          <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
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
