<template>
  <main class="px-12 pb-12 pt-24 lg:px-24">
    <section class="flex flex-col gap-6 pb-12 lg:flex-row">
      <div class="flex w-full max-w-xl flex-col justify-between gap-6">
        <h1 class="text-5xl font-black">
          Turning your sketches into digital reality
        </h1>
        <p class="text-xl text-neutral-400">
          Elevate your project with custom web solutions that blend modern
          aesthetics and robust functionality, captivating investors, clients,
          and partners
        </p>
        <AppButton to="https://cal.com/suiramdev/first">
          <Icon name="ph:phone-fill" />
          Book a call
        </AppButton>
      </div>
      <div
        class="my-auto aspect-video h-fit w-full overflow-hidden rounded-3xl border border-white/5 bg-white/5"
      >
        <img src="/images/hero.webp" class="h-full w-full object-fill" />
      </div>
    </section>
    <section class="bg-neutral-900 py-12">
      <NuxtMarquee gradient gradient-color="#171717" auto-fill>
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
    <section class="py-12">
      <h2 class="mb-6 max-w-sm text-2xl font-bold">They trust me</h2>
      <div class="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          name="Storedge"
          src="/images/projects/storedge.webp"
          to="https://github.com/suiramdev/storedge-core"
        />
        <ProjectCard
          name="Logisoap"
          src="/images/projects/logisoap.webp"
          to="https://www.logisoap.com/"
        />
        <ProjectCard
          name="MyDemenageur"
          src="/images/projects/mydemenageur.webp"
          to="https://www.mydemenageur.com/"
        />
      </div>
      <AppButton variant="secondary" class="mx-auto" to="/projects"
        >See more</AppButton
      >
    </section>
  </main>
</template>
