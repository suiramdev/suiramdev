<template>
  <main class="px-12 pb-12 pt-24 lg:px-24">
    <h1 class="mb-12 max-w-xl text-4xl font-bold">My projects</h1>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <ContentList :query="query">
        <template #default="{ list }">
          <ProjectCard
            v-for="project in list"
            :key="project._path"
            :title="project.title"
            :image="project.image"
            :to="project._path"
            :external="project.external"
            :github="project.github"
          />
        </template>
        <template #not-found>
          <span class="text-neutral-400">No projects found.</span>
        </template>
      </ContentList>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = {
  path: "/projects",
  sort: [{ releasedAt: -1 }],
};
</script>
