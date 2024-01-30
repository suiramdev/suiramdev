<template>
  <main class="px-12 pb-12 pt-24 lg:px-24">
    <h1 class="mb-6 max-w-sm text-2xl font-bold">My blog</h1>
    <p class="mb-12 max-w-sm text-neutral-400">
      Discover my journal, filled with diverse content including blog posts that
      share my worldview, professional insights, and introspective thoughts.
    </p>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <ContentList :query="query">
        <template #default="{ list }">
          <BlogCard
            v-for="article in list"
            :key="article._path"
            :title="article.title"
            :published-at="article.publishedAt"
            :cover="article.cover"
            :to="article._path"
          />
        </template>
        <template #not-found>
          <span class="text-neutral-400">No articles found.</span>
        </template>
      </ContentList>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = {
  path: "/blog",
  sort: [{ publishedAt: -1 }],
  where: {
    // @ts-ignore
    draft: { $ne: true },
  },
};
</script>
