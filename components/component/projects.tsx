import Image from "next/image";
import petly from "@/lib/assets/petly.png";
import nestio from "@/lib/assets/nestio.png";
import wordanalytics from "@/lib/assets/wordanalytics.png";
import lilisabor from "@/lib/assets/lilisabor.png";
import Container from "../Container";
import Link from "next/link";

const projects = [
  {
    title: "Petly",
    description: "Pet management app for pet daycare owners.",
    link: "https://github.com/484021/petly",
    image: petly,
  },
  {
    title: "Nestio",
    description: "Property management app to connect owners and renters.",
    link: "https://github.com/484021/nestio",
    image: nestio,
  },
  {
    title: "Word Analytics",
    description: "Check your word analytics to post on social media.",
    link: "https://github.com/484021/Word-Analytics-React-Vite",
    image: wordanalytics,
  },
  {
    title: "Lili Sabor Latino",
    description: "A vibrant Latino food truck's marketing website.",
    link: "https://github.com/484021/LiliSaborLatino",
    image: lilisabor,
  },

  // Add more projects as needed
];

export default function Component() {
  return (
    <Container>
      <section className="bg-background text-foreground">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              A selection of my best work.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project) => (
              <Link href={project.link} key={Math.random()}>
                <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl dark:shadow-white/20 dark:hover:shadow-white/30 animate-fade-in-up">
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt="Project 1"
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover border-b"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                      priority
                    />
                  </div>
                  <div className="p-4 bg-card text-card-foreground">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
