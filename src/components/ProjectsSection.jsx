import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Basit Sözcük Uygulaması",
    description: "Python ve Tkinter kullanarak oluşturulmuş basit bir sözcük uygulaması.",
    image: "/projects/project1.png",
    tags: ["Python", "Tkinter"],
    githubUrl: "https://github.com/alperarslann/sozcuk_app",
  },
  {
    id: 2,
    title: "Portfolyo Web Sitesi",
    description:
      "HTML, CSS, Bootstrap ve JavaScript kullanarak oluşturulmuş kişisel portfolyo web sitesi.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://alperarslann.github.io/kaanthemusician.github.io/",
    githubUrl: "https://github.com/alperarslann/kaanthemusician.github.io",
  },
  {
    id: 3,
    title: "Yeni Proje",
    description: "Heyecan verici bir proje üzerinde çalışıyorum.",
    image: null,
    tags: ["Çok Yakında"],
    comingSoon: true,
  },
];

export const ProjectsSection = () => {
  const lgCols = projects.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Öne Çıkan <span className="text-primary"> Projeler </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          İşte son projelerimden bazıları. Her proje öğrendiğim yeni becerilerin birer çıktısıdır ve
          benim sürekli gelişimimi yansıtır.
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${lgCols} gap-8 max-w-4xl mx-auto`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                {project.comingSoon ? (
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-yellow-400 text-black shadow-sm">
                      Çok Yakında
                    </span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                {project.comingSoon && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-400 text-black rounded-full">
                      Çok Yakında
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-${tag}`} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {!project.comingSoon ? (
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-muted-foreground">Detaylar yakında</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/alperarslann"
          >
            GitHub'ıma Göz At <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
