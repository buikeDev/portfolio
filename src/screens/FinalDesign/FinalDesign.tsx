import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Pause,
  Play,
  ServerCog,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useContactForm } from "../../hooks/useContactForm";
import { projects } from "./sections/ProjectsSection/projects";

const navigation = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

const expertise = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Responsive, accessible and performant interfaces built with modern React tooling.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile products with thoughtful, native-feeling interactions.",
  },
  {
    icon: ServerCog,
    title: "Backend & APIs",
    description:
      "Reliable Node.js services, authentication, databases and third-party integrations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Product Engineering",
    description:
      "End-to-end product delivery with attention to usability, performance and impact.",
  },
];

const experience = [
  {
    period: "Jul 2025 — Present",
    role: "Lead Developer",
    company: "Ounjefood · Food Delivery",
    summary:
      "Leading development across customer, vendor, rider and admin products, including live tracking, payments and multi-role architecture.",
  },
  {
    period: "Mar 2025 — Jul 2025",
    role: "Full-Stack Developer",
    company: "Talenterah AI",
    summary:
      "Building a job-search platform and internal dashboards across frontend, APIs and data workflows.",
  },
  {
    period: "Jan 2024 — Feb 2025",
    role: "IT / Operations Analyst",
    company: "Aquantuo Nigeria · Logistics",
    summary:
      "Improved operational workflows, supported technology strategy and documented processes for growing teams.",
  },
];

const featuredProjects = ["ounje-mobile", "ounje-landing"]
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is (typeof projects)[number] => Boolean(project));
const secondaryProjects = ["neme-blog", "settings-dashboard", "beekeys"]
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span className="section-label-dot" />
      {children}
    </p>
  );
}

export const FinalDesign = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { status, submitForm, isSubmitting } = useContactForm();
  const featuredProject = featuredProjects[featuredIndex];
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0, distance = 26) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: distance },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.18 },
          transition: { duration: 0.65, delay, ease: "easeOut" },
        };

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) =>
      event.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      menuButtonRef.current?.focus();
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isCarouselPaused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setFeaturedIndex((index) => (index + 1) % featuredProjects.length);
    }, 10_000);

    return () => window.clearInterval(timer);
  }, [featuredIndex, isCarouselPaused]);

  const closeMenu = () => setIsMenuOpen(false);
  const showPreviousProject = () => {
    setFeaturedIndex((index) =>
      index === 0 ? featuredProjects.length - 1 : index - 1,
    );
  };
  const showNextProject = () => {
    setFeaturedIndex((index) => (index + 1) % featuredProjects.length);
  };

  return (
    <main id="home" className="portfolio-shell">
      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#home" className="brand" aria-label="BuikeDev home">
            <span>&lt;</span>BuikeDev<span>/&gt;</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#contact">
            Let&apos;s talk <ArrowRight aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="mobile-menu-button"
            aria-label="Open navigation"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu-backdrop" onMouseDown={closeMenu}>
          <nav
            id="mobile-menu"
            className="mobile-menu-panel"
            aria-label="Mobile navigation"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
            >
              <X aria-hidden="true" />
            </button>
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <section className="hero-section">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <SectionLabel>Frontend + product engineer</SectionLabel>
            <h1>
              I build digital products people <span>love to use.</span>
            </h1>
            <p className="hero-summary">
              Frontend-focused full-stack developer building fast, accessible
              and scalable web and mobile experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View my work <ArrowDown aria-hidden="true" />
              </a>
              <a
                className="button button-secondary"
                href="/cv/resume.pdf"
                download
              >
                Download CV <Download aria-hidden="true" />
              </a>
            </div>
            <p className="availability">
              <span /> Available for new opportunities
            </p>
            <ul className="tech-list" aria-label="Core technologies">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="hero-visual" aria-label="Ounje product preview">
            <div className="dot-pattern" />
            <div className="browser-frame">
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <p>ounje.app</p>
              </div>
              <img
                src="/images/ounjeLanding.png"
                alt="Ounje food delivery website"
                width="720"
                height="460"
                fetchPriority="high"
              />
            </div>
            <div className="phone-frame">
              <span className="phone-speaker" />
              <img
                src="/images/ounje.jpeg"
                alt="Ounje mobile application"
                width="240"
                height="480"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-block projects-section">
        <div className="site-container">
          <motion.div className="section-heading-row" {...reveal()}>
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2>Featured Projects</h2>
            </div>
            <p>
              A selection of products built around real user needs, thoughtful
              interfaces and dependable engineering.
            </p>
            <a
              href="https://github.com/buikeDev"
              target="_blank"
              rel="noreferrer"
            >
              View all projects <ArrowRight aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="featured-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured Ounje projects"
            {...reveal(0.08, 34)}
          >
            <article
              key={featuredProject.id}
              className="featured-project-card featured-project-slide"
              aria-roledescription="slide"
              aria-label={`${featuredIndex + 1} of ${featuredProjects.length}: ${featuredProject.title}`}
            >
              <div className="featured-project-copy" aria-live="polite">
                <span className="project-kicker">
                  <Sparkles aria-hidden="true" /> Featured project{" "}
                  <b>
                    {String(featuredIndex + 1).padStart(2, "0")} /{" "}
                    {String(featuredProjects.length).padStart(2, "0")}
                  </b>
                </span>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
                <ul
                  className="tag-list"
                  aria-label={`${featuredProject.title} technologies`}
                >
                  {featuredProject.tech.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="card-actions">
                  <a
                    className="button button-primary"
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View product <ExternalLink aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div
                className={`featured-project-media featured-project-media-${featuredProject.id}`}
              >
                <img
                  src={featuredProject.imageSrc}
                  alt={featuredProject.altText}
                  width="640"
                  height="560"
                  loading="lazy"
                />
              </div>
            </article>

            <div className="carousel-controls">
              <div
                className="carousel-dots"
                aria-label="Choose featured project"
              >
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    className={index === featuredIndex ? "active" : ""}
                    aria-label={`Show ${project.title}`}
                    aria-current={index === featuredIndex ? "true" : undefined}
                    onClick={() => setFeaturedIndex(index)}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsCarouselPaused((isPaused) => !isPaused)}
                aria-label={
                  isCarouselPaused
                    ? "Resume automatic slide rotation"
                    : "Pause automatic slide rotation"
                }
                title={isCarouselPaused ? "Resume autoplay" : "Pause autoplay"}
              >
                {isCarouselPaused ? (
                  <Play aria-hidden="true" />
                ) : (
                  <Pause aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={showPreviousProject}
                aria-label="Previous featured project"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNextProject}
                aria-label="Next featured project"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          <div className="project-grid">
            {secondaryProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card"
                {...reveal(index * 0.09, 30)}
              >
                <img
                  src={project.imageSrc}
                  alt={project.altText}
                  width="520"
                  height="300"
                  loading="lazy"
                />
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul
                    className="tag-list"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.tech.slice(0, 3).map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View code <Github aria-hidden="true" />
                      </a>
                    )}
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Live site <ExternalLink aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-block">
        <div className="site-container">
          <motion.div {...reveal()}>
            <SectionLabel>What I do</SectionLabel>
            <h2>Skills &amp; Expertise</h2>
          </motion.div>
          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="expertise-card"
                  {...reveal(index * 0.08, 28)}
                >
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <ArrowRight className="expertise-arrow" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block experience-about-section">
        <div className="site-container experience-about-grid">
          <div id="experience">
            <motion.div {...reveal()}>
              <SectionLabel>Experience</SectionLabel>
              <h2>Work Experience</h2>
            </motion.div>
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.period}-${item.company}`}
                  className="timeline-item"
                  {...reveal(index * 0.1, 24)}
                >
                  <span className="timeline-dot" />
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.role}</h3>
                    <strong>{item.company}</strong>
                    <p>{item.summary}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          <motion.aside
            id="about"
            className="about-panel"
            {...reveal(0.12, 32)}
          >
            <SectionLabel>About me</SectionLabel>
            <h2>About Me</h2>
            <p>
              I&apos;m Ago Chukwubuikem Jideofor, a frontend-focused full-stack
              developer who turns ideas into reliable products. I enjoy solving
              difficult interface problems and building experiences that make a
              measurable difference for users and teams.
            </p>
            <div className="about-stats">
              <div>
                <strong>6+</strong>
                <span>Projects shipped</span>
              </div>
              <div>
                <strong>2+</strong>
                <span>Years building</span>
              </div>
              <div>
                <strong>Web + Mobile</strong>
                <span>Specialist</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="contact" className="section-block contact-section">
        <motion.div className="site-container contact-panel" {...reveal(0, 34)}>
          <div className="contact-intro">
            <img
              src="/icons/laptop-guy.png"
              alt=""
              width="190"
              height="210"
              loading="lazy"
            />
            <div>
              <SectionLabel>Let&apos;s connect</SectionLabel>
              <h2>Have a project in mind?</h2>
              <p>
                I&apos;m available for freelance and full-time opportunities.
              </p>
            </div>
          </div>
          <address className="contact-links">
            <a href="mailto:buikedev@gmail.com">
              <Mail aria-hidden="true" />
              <span>
                <strong>Email me</strong>buikedev@gmail.com
              </span>
            </a>
            <a
              href="https://linkedin.com/in/ago-chukwubuikem-aa84a1305"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" />
              <span>
                <strong>LinkedIn</strong>ago-chukwubuikem
              </span>
            </a>
            <a
              href="https://github.com/buikeDev"
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" />
              <span>
                <strong>GitHub</strong>github.com/buikeDev
              </span>
            </a>
          </address>
          <form
            className="contact-form"
            action="https://formspree.io/f/xwpborjn"
            method="POST"
            onSubmit={submitForm}
            aria-busy={isSubmitting}
          >
            <div className="form-row">
              <label>
                <span>Your name</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                <span>Your email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  required
                />
              </label>
            </div>
            <label>
              <span>Your message</span>
              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                required
              />
            </label>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}{" "}
              <MessageCircle aria-hidden="true" />
            </button>
            <div className="form-status" aria-live="polite" role="status">
              {status === "success" && (
                <p>Your message has been sent. I&apos;ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p>Something went wrong. Please email me directly.</p>
              )}
            </div>
          </form>
        </motion.div>
      </section>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <a href="#home" className="brand">
            <span>&lt;</span>BuikeDev<span>/&gt;</span>
          </a>
          <p>© {new Date().getFullYear()} BuikeDev. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-socials">
            <a
              href="https://github.com/buikeDev"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/ago-chukwubuikem-aa84a1305"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a href="mailto:buikedev@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};
