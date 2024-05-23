<template>
  <Button size="icon" variant="ghost" @click="toggleColorMode">
    <Icon v-if="colorMode.preference == 'light'" name="ph:sun-fill" />
    <Icon v-else name="ph:moon-fill" />
  </Button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>
