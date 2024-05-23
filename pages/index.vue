<template>
  <main class="mx-auto max-w-5xl">
    <section class="pb-24 pt-48">
      <div class="mx-auto w-full max-w-2xl">
        <h1 class="text-5xl font-bold">
          Hi, I am Marius! <br />
          I make websites and stuff
        </h1>
        <div class="mt-6 flex items-center gap-4">
          <NuxtLink to="https://cal.com/suiramdev/first">
            <Button>Book a call</Button>
          </NuxtLink>
          <Button variant="outline" @click="downloadCV">
            <Icon name="lucide:download" class="mr-2" />
            Download my CV
          </Button>
        </div>
      </div>
    </section>
    <section class="py-24">
      <div class="mx-auto w-full max-w-2xl">
        <h2 class="text-3xl font-bold">Blog</h2>
        <h3 class="mt-2 text-2xl font-semibold text-muted-foreground">
          read about my thoughts and advice
        </h3>
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
    </section>
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

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CV_EN_MARIUS_NOUCHET.pdf";
  link.target = "_blank";
  link.download = "CV_EN_MARUS_NOUCHET.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
