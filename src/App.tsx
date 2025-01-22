import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto bg-muted">
            <img
              src="https://github.com/suiramdev.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">suiramdev</h1>
            <p className="text-muted-foreground">
              Full-stack developer passionate about creating beautiful and
              functional web applications
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <Button variant="outline" className="w-full" asChild>
            <a
              href="https://github.com/suiramdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              GitHub
            </a>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <a
              href="https://twitter.com/suiramdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
              Twitter
            </a>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <a
              href="https://linkedin.com/in/suiramdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
              LinkedIn
            </a>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <a href="mailto:contact@suiramdev.com">
              <Mail />
              Email
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;
