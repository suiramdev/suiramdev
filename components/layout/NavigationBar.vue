<template>
  <div
    class="sticky left-0 top-0 z-50 h-[128px] w-full bg-background/90 px-4 backdrop-blur-xl md:px-16"
  >
    <nav class="mx-auto flex h-full max-w-5xl items-center justify-between">
      <NuxtLink to="/">
        <span class="text-xl font-semibold">suiram.dev</span>
      </NuxtLink>
      <ul class="flex flex-1 items-center justify-end">
        <li
          v-for="link in links"
          :key="link.to"
          class="flex items-center gap-2 p-2 text-muted-foreground hover:text-foreground"
        >
          <NuxtLink :to="link.to" active-class="text-foreground">
            {{ link.name }}
          </NuxtLink>
        </li>
        <ThemeSwitcher class="ml-4" />
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const links = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog" },
];
</script>
