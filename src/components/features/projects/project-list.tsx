import { ProjectCard } from "./project-card";

export function ProjectList() {
  return (
    <div className="space-y-12">
      <ProjectCard
        title="genial"
        description="i participated in the sia partners hackathon, where we won first place for the legal tech use-case. built in partnership with aws and mistral ai, it automates the extraction of key information from commercial leases into structured audit reports - saving lawyers countless manual hours. the project will be implemented with the client, gide law firm."
        medias={[
          {
            type: "video",
            src: "/videos/h-genai.mov",
          },
        ]}
      />
      <ProjectCard
        title="spotify blind test"
        description="a blind test game that leverages the spotify api to create music quizzes from their vast library of songs. players have to guess the song or artist being played."
        link="https://github.com/suiramdev/blindtest"
      />
      <ProjectCard
        title="ft_irc"
        link="https://github.com/suiramdev/42-ft_irc"
        description="a simple irc server written in c, using the libft library."
      />
      <ProjectCard
        title="storedge"
        link="https://github.com/suiramdev/storedge-core"
        description="a self-hosted, open-source headless cms for e-commerce, inspired by shopify. built with graphql and prisma to provide a modern alternative for managing online stores."
      />
      <ProjectCard
        title="minishell"
        link="https://github.com/suiramdev/42-minishell"
        description="a bash-like shell written in c, using the libft library."
        medias={[
          {
            type: "video",
            src: "/videos/minishell.mp4",
          },
        ]}
      />
    </div>
  );
}
