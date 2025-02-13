import { ProjectCard } from "./project-card";

export function ProjectList() {
  return (
    <div className="space-y-12">
      <ProjectCard
        title="genial"
        description="built an ai solution to automatically analyze commercial leases and generate audit reports for the law firm [Gide](https://www.gide.com/). leveraging [AWS](https://aws.amazon.com/) and [Mistral AI](https://mistral.ai/) to win sia partners' h-genai hackathon legal tech challenge."
        medias={[
          {
            type: "video",
            src: "/videos/h-genai.mov",
          },
        ]}
      />
      <ProjectCard
        title="spotify blind test"
        description="a multiplayer blind test game built that leverages the spotify web api to create interactive music quizzes. players can create custom rooms, compete in real-time, and guess songs from spotify's vast library."
        link="https://github.com/suiramdev/blindtest"
      />
      <ProjectCard
        title="ft_irc"
        link="https://github.com/suiramdev/42-ft_irc"
        description="an irc server implementation written in c that supports multiple client connections, channels, private messages, and basic irc commands. developed as part of the [42](https://42.fr/en/homepage/) school curriculum using a custom libft library for efficient memory and string handling."
      />
      <ProjectCard
        title="storedge"
        link="https://github.com/suiramdev/storedge-core"
        description="a self-hosted, open-source headless cms for e-commerce, inspired by shopify. built with graphql and prisma to provide a modern alternative for managing online stores."
      />
      <ProjectCard
        title="minishell"
        link="https://github.com/suiramdev/42-minishell"
        description="a bash-like shell written in c, implementing core features like pipes, redirections, environment variables, and built-in commands. developed as part of the [42](https://42.fr/en/homepage/) school curriculum using a custom libft library for memory management and string operations."
        medias={[
          {
            type: "video",
            src: "/videos/minishell.mp4",
          },
        ]}
      />
      <ProjectCard
        title="eclipse"
        link="https://stim85.itch.io/eclipse"
        description="my second game jam entry, a puzzle game made in 48 hours for the [Game Factory Jam 2](https://itch.io/jam/games-factory-2)."
        medias={[
          {
            type: "image",
            src: "/images/eclipse.png",
          },
        ]}
      />
    </div>
  );
}
