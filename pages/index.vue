<template>
  <main class="px-12 pb-12 pt-24 lg:px-24">
    <section class="flex flex-col gap-6 pb-12 lg:flex-row">
      <div class="flex w-full max-w-xl flex-col justify-between gap-6">
        <h1 class="text-5xl font-black">
          Turning your sketches into digital reality
        </h1>
        <p class="text-xl text-neutral-400">
          I am a full-stack freelance developer. I help companies and
          individuals build and improve their websites and applications. I'm a
          React specialist, but I also have knowledge of Vue.JS.
        </p>
        <div class="flex gap-4">
          <AppButton to="https://cal.com/suiramdev/first">
            <Icon name="ph:phone-fill" />
            Book a call
          </AppButton>
          <AppButton variant="secondary" @click="downloadCV">
            <Icon name="ph:download-simple-bold" />
            or download my CV
          </AppButton>
        </div>
      </div>
      <div
        class="my-auto aspect-video h-fit w-full overflow-hidden rounded-3xl border border-white/5 bg-white/5"
      >
        <img src="/images/hero.webp" class="h-full w-full object-fill" />
      </div>
    </section>
    <section class="bg-neutral-900 py-12">
      <NuxtMarquee
        gradient
        gradient-color="#171717"
        auto-fill
        class="grayscale"
      >
        <img
          src="/images/sponsors/logisoap.webp"
          alt="Logisoap logo"
          class="mx-5"
        />
        <img
          src="/images/sponsors/mydemenageur.webp"
          alt="My demenageur logo"
          class="mx-5"
        />
        <img
          src="/images/sponsors/feldrise.webp"
          alt="Feldrise logo"
          class="mx-5"
        />
      </NuxtMarquee>
      <NuxtMarquee
        gradient
        gradient-color="#171717"
        auto-fill
        direction="right"
        class="grayscale"
      >
        <img
          src="/images/sponsors/logisoap.webp"
          alt="Logisoap logo"
          class="mx-5"
        />
        <img
          src="/images/sponsors/mydemenageur.webp"
          alt="My demenageur logo"
          class="mx-5"
        />
        <img
          src="/images/sponsors/feldrise.webp"
          alt="Feldrise logo"
          class="mx-5"
        />
      </NuxtMarquee>
    </section>
    <section class="pb-6 pt-12">
      <p class="mb-3 font-hand text-lg text-indigo-400">Projects</p>
      <h2 class="mb-6 text-2xl font-bold">
        I have worked on a wide range of projects
      </h2>
      <div class="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <ContentList :query="projectsQuery">
          <template #default="{ list }">
            <ProjectCard
              v-for="project in list"
              :key="project._path"
              :title="project.title"
              :tag="project.tag"
              :image="project.image"
              :to="project.to"
            />
          </template>
          <template #not-found>
            <span class="text-neutral-400">No projects found.</span>
          </template>
        </ContentList>
      </div>
      <AppButton variant="secondary" class="mx-auto" to="/projects"
        >See more</AppButton
      >
    </section>
    <section class="pt-6">
      <p class="mb-3 font-hand text-lg text-indigo-400">Articles</p>
      <h2 class="mb-6 text-2xl font-bold">
        I write about my journey as a developer
      </h2>
      <div class="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <ContentList :query="articlesQuery">
          <template #default="{ list }">
            <BlogCard
              v-for="article in list"
              :key="article._path"
              :title="article.title"
              :published-at="article.publishedAt"
              :image="article.image"
              :to="article._path"
            />
          </template>
          <template #not-found>
            <span class="text-neutral-400">No articles found.</span>
          </template>
        </ContentList>
      </div>
      <AppButton variant="secondary" class="mx-auto" to="/blog"
        >See more</AppButton
      >
    </section>
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
import { track } from "@vercel/analytics";

const projectsQuery: QueryBuilderParams = {
  path: "/projects",
  sort: [{ releasedAt: -1 }],
  limit: 3,
};

const articlesQuery: QueryBuilderParams = {
  path: "/blog",
  limit: 3,
  sort: [{ publishedAt: -1 }],
  where: {
    // @ts-ignore
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

  track("Download CV");
};
</script>
