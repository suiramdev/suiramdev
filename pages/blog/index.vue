<template>
  <main class="mx-auto max-w-5xl py-16">
    <div class="mx-auto w-full">
      <h1 class="text-3xl font-bold">Blog</h1>
      <h2 class="mt-2 text-2xl font-semibold text-muted-foreground">
        read about my thoughts and advice
      </h2>
    </div>
    <div
      class="mx-auto mt-16 grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
    >
      <ContentList :query="query">
        <template #default="{ list }">
          <BlogPostCard
            v-for="article in list"
            :key="article._path"
            :title="article.title"
            :description="article.description"
            :published-at="article.publishedAt"
            :image="article.image"
            :to="article._path"
          />
        </template>
        <template #not-found>
          <span class="text-muted-foreground">No articles found.</span>
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
    // @ts-expect-error - draft is not defined in the type
    draft: { $ne: true },
  },
};
</script>
