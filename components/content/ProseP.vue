<template>
  <p class="my-6"><slot /></p>
</template>

<style>
h1 + p,
h2 + p,
h3 + p,
h4 + p,
h5 + p,
h6 + p {
  @apply !mt-0;
}
</style>
