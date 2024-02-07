<template>
  <ContentDoc v-slot="{ doc }">
    <article class="px-12 pb-12 pt-24 lg:px-24">
      <aside
        class="sticky left-0 top-0 float-left -mt-12 hidden h-fit w-60 pr-12 pt-12 md:block"
      >
        <AppButton variant="secondary" to="/blog" class="mb-12">
          <Icon name="ph:arrow-arc-left-bold" />
          Back
        </AppButton>
        <nav>
          <ul class="flex flex-col gap-2">
            <li v-for="link in doc.body.toc.links" :key="link.id">
              <AppNavLink
                :to="'#' + link.id"
                :force-active="link.id === activeTocId"
              >
                {{ link.text }}
              </AppNavLink>
              <ul v-if="link.children" class="flex flex-col gap-1">
                <li
                  v-for="childLink in link.children"
                  :key="childLink.id"
                  class="pl-6"
                >
                  <AppNavLink
                    :to="'#' + childLink.id"
                    :force-active="childLink.id === activeTocId"
                  >
                    {{ childLink.text }}
                  </AppNavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="overflow-hidden">
        <div class="mb-12 flex w-full max-w-xl flex-col gap-6">
          <h1 class="text-4xl font-bold">
            {{ doc.title }}
          </h1>
          <p class="font-hand text-neutral-400">
            {{
              new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(doc.publishedAt))
            }}
          </p>
          <img
            v-if="doc.image"
            :src="doc.image.src || doc.image"
            :alt="doc.image.alt"
            class="aspect-video rounded-3xl border border-neutral-800 bg-neutral-700 object-cover"
          />
        </div>
        <ContentRenderer ref="content" :value="doc" />
      </main>
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
