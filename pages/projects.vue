<template>
  <main class="px-12 pb-12 pt-24 lg:px-24">
    <h1 class="mb-12 max-w-sm text-2xl font-bold">My projects</h1>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <ProjectCard
        name="Storedge"
        tag="Personal"
        src="/images/projects/storedge.webp"
        to="https://github.com/suiramdev/storedge-core"
      />
      <ProjectCard
        name="Logisoap"
        tag="Freelance"
        src="/images/projects/logisoap.webp"
        to="https://www.logisoap.com/"
      />
      <ProjectCard
        name="MyDemenageur"
        tag="Freelance"
        src="/images/projects/mydemenageur.webp"
        to="https://www.mydemenageur.com/"
      />
      <ProjectCard
        name="Minishell"
        tag="42 school"
        to="https://github.com/suiramdev/42-minishell"
      />
      <ProjectCard
        name="FDF"
        tag="42 school"
        src="/images/projects/fdf.webp"
        to="https://github.com/suiramdev/42-fdf"
      />
    </div>
  </main>
</template>
