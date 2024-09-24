type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Santhosh Bhoopal",
  description:
    "My personal portfolio website highlighting my skills in problem-solving and solutions development, featuring a technical blog where I share my learning experiences and knowledge.",
  url: "https://prodoit.dev/",
  ogImage: "https://prodoit.dev/og",
  links: {
    linkedin: "https://www.linkedin.com/in/sanbho/",
    github: "https://github.com/484021",
  },
};
