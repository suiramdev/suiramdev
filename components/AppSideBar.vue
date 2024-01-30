<template>
  <header
    class="fixed left-0 top-0 z-50 flex h-screen min-w-64 flex-col justify-between border-r border-neutral-800 bg-neutral-900 p-6 transition-transform"
    :class="{ '-translate-x-full md:translate-x-0': !showSidebar }"
  >
    <button
      class="absolute -right-6 top-6 flex translate-x-full items-center justify-center rounded-full border-t border-neutral-700 bg-neutral-800 p-2 hover:border-neutral-600 hover:bg-neutral-700 md:hidden"
      @click="showSidebar = !showSidebar"
    >
      <Icon
        :name="showSidebar ? 'ph:arrow-line-left-bold' : 'ph:list-bold'"
        class="h-6 w-6"
      />
    </button>
    <nav class="flex flex-col gap-12">
      <ul class="flex flex-col gap-2">
        <li>
          <AppNavLink to="/" class="w-full">
            <template #icon>
              <Icon name="ph:house-fill" />
            </template>
            Home
          </AppNavLink>
        </li>
        <li>
          <AppNavLink
            to="/projects"
            class="w-full"
            icon-class="bg-yellow-900 text-yellow-300 fill-yellow-300"
          >
            <template #icon>
              <Icon name="ph:lightbulb-fill" />
            </template>
            Projects
          </AppNavLink>
        </li>
        <li>
          <AppNavLink
            to="/blog"
            class="w-full"
            icon-class="bg-green-900 text-green-300 fill-green-300"
          >
            <template #icon>
              <Icon name="ph:book-fill" />
            </template>
            Blog
          </AppNavLink>
        </li>
      </ul>
      <ul class="flex flex-col gap-2">
        <span class="text-sm font-medium text-neutral-400">Socials</span>
        <li>
          <AppNavLink to="https://github.com/suiramdev" class="w-full">
            Github
          </AppNavLink>
        </li>
        <li>
          <AppNavLink to="https://twitter.com/suiramdev" class="w-full">
            Twitter
          </AppNavLink>
        </li>
        <li>
          <AppNavLink
            to="https://www.linkedin.com/in/suiramdev/"
            class="w-full"
          >
            LinkedIn
          </AppNavLink>
        </li>
      </ul>
    </nav>
    <div class="flex flex-col gap-2 rounded-2xl bg-neutral-800 p-2">
      <span class="text-center text-sm">Want to work with me?</span>
      <AppButton class="w-full" to="https://cal.com/suiramdev/first">
        <Icon name="ph:phone-fill" />
        Book a call
      </AppButton>
    </div>
  </header>
</template>

<script setup lang="ts">
const showSidebar = ref(false);

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    showSidebar.value = false;
  },
);
</script>
