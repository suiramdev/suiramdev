<template>
  <ContentDoc v-slot="{ doc }">
    <article
      class="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,theme(maxWidth.3xl))] xl:grid-cols-[minmax(0,1fr)_minmax(0,theme(maxWidth.3xl))_minmax(0,1fr)]"
    >
      <aside
        class="sticky left-0 top-[128px] hidden max-h-[calc(100vh-128px)] flex-col lg:flex"
      >
        <Button
          size="xs"
          variant="ghost"
          class="mb-16 justify-start text-muted-foreground"
          as-child
        >
          <NuxtLink href="/blog">
            <Icon name="lucide:arrow-left" class="mr-2" />
            Go back
          </NuxtLink>
        </Button>
        <nav v-if="doc.body?.toc">
          <ul class="flex flex-col gap-1">
            <li v-for="link in doc.body.toc.links" :key="link.id">
              <Button
                size="sm"
                variant="ghost"
                class="w-full justify-start text-muted-foreground"
                as-child
              >
                <NuxtLink
                  :href="'#' + link.id"
                  :class="{ 'text-primary': link.id === activeTocId }"
                >
                  {{ link.text }}
                </NuxtLink>
              </Button>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <div
          v-if="doc.image"
          class="mb-16 h-[300px] w-full overflow-hidden rounded-lg bg-muted"
        >
          <img
            :src="doc.image.src"
            :alt="doc.image.alt"
            class="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h1 class="mb-6 text-5xl font-bold">
          {{ doc.title }}
        </h1>
        <ContentRenderer ref="content" :value="doc" />
      </main>
      <div class="flex-1" />
    </article>
  </ContentDoc>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(
  "post",
  queryContent(route.path).findOne,
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogUrl: useRuntimeConfig().public.baseURL + route.fullPath,
  ogImage: page.value?.image?.src || page.value?.image,
  ogImageAlt: page.value?.image?.alt,
  twitterTitle: page.value?.title,
  twitterDescription: page.value?.description,
  twitterImage: page.value?.image?.src || page.value?.image,
  twitterImageAlt: page.value?.image?.alt,
  twitterCard: "summary",
});

const content = ref<HTMLElement | null>();
const activeTocId = ref<string | null>();

const observer = ref<IntersectionObserver | null>();
const observerOptions = reactive({
  root: content.value,
  threshold: 0.5,
});

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        activeTocId.value = id;
      }
    });
  }, observerOptions);

  document.querySelectorAll("h2[id], h3[id]").forEach((section) => {
    observer.value?.observe(section);
  });
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>
