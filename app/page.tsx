import { InlineLink } from "@/components/InlineLink";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Page() {
  return (
    <>
      <header className="nav-bg sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
          <a
            href="#hero"
            className="wordmark text-label transition-colors hover:text-display focus-visible:text-display focus-visible:outline-none"
          >
            raiyan
          </a>
          <div className="flex items-center gap-7">
            <ul className="hidden items-center gap-7 text-[13px] tracking-[0.04em] text-label sm:flex">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-display focus-visible:text-display focus-visible:outline-none"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="transition-colors hover:text-display focus-visible:text-display focus-visible:outline-none"
                >
                  experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition-colors hover:text-display focus-visible:text-display focus-visible:outline-none"
                >
                  projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-display focus-visible:text-display focus-visible:outline-none"
                >
                  contact
                </a>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </div>
        <div className="h-px w-full bg-hairline" />
      </header>

      <main className="mx-auto max-w-[720px] px-6 sm:px-10">
        <section
          id="hero"
          aria-label="Introduction"
          className="scroll-mt-24 pt-28 sm:pt-36 lg:pt-44"
        >
          <h1 className="hero-name">Raiyan Haque</h1>
          <p className="mt-8 max-w-[620px] text-[18px] leading-[1.55] text-tagline sm:text-[19px]">
            I build technology that makes care more human. Working at the
            intersection of AI, healthcare, and trust &amp; safety.
          </p>
          <div className="mt-10 flex items-center gap-6 text-[14px] tracking-[0.02em] text-label">
            <a
              href="#contact"
              className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="mt-12 scroll-mt-24 space-y-6 sm:mt-14"
        >
          <h2
            id="about-heading"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-label"
          >
            About
          </h2>
          <p className="leading-[1.75] text-body">
            I am a builder focused on AI for healthcare and trust &amp; safety.
            Previously, I have built mobile apps at{" "}
            <InlineLink href="https://brite.stanford.edu/experience/2024cohort/">
              Stanford Medicine
            </InlineLink>
            , worked on ML evaluations for social-network analysis at{" "}
            <InlineLink href="https://www.graphika.com/">Graphika</InlineLink>,
            and prototyped trust &amp; safety agents for observability at{" "}
            <InlineLink href="https://www.trustlab.com/">TrustLab</InlineLink>.
          </p>
          <p className="leading-[1.75] text-body">
            At Stanford, I study Computer Science and have served as a{" "}
            <InlineLink href="https://ethicsinsociety.stanford.edu/news/2025-tech-ethics-and-policy-summer-fellowships">
              Tech Ethics and Policy Fellow
            </InlineLink>{" "}
            through{" "}
            <InlineLink href="https://hai.stanford.edu/policy/student-opportunities/tech-ethics-policy-fellowships">
              Stanford HAI
            </InlineLink>
            .
          </p>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="mt-24 scroll-mt-24 space-y-6 sm:mt-28"
        >
          <h2
            id="experience-heading"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-label"
          >
            Experience
          </h2>
          <ul className="space-y-8">
            <li>
              <div className="flex items-start justify-between gap-6">
                <p className="leading-[1.75] text-body">
                  AI Product Intern &middot;{" "}
                  <InlineLink href="https://www.trustlab.com/">
                    TrustLab
                  </InlineLink>
                </p>
                <span className="shrink-0 whitespace-nowrap pt-[3px] text-[13px] tracking-[0.02em] text-label">
                  Jan &ndash; Mar 2026
                </span>
              </div>
              <p className="mt-1 leading-[1.75] text-body">
                Built AI agents and agentic observability for online trust &amp;
                safety.
              </p>
            </li>
            <li>
              <div className="flex items-start justify-between gap-6">
                <p className="leading-[1.75] text-body">
                  Applied Research Intern &middot;{" "}
                  <InlineLink href="https://www.graphika.com/">
                    Graphika
                  </InlineLink>
                </p>
                <span className="shrink-0 whitespace-nowrap pt-[3px] text-[13px] tracking-[0.02em] text-label">
                  Jun &ndash; Aug 2025
                </span>
              </div>
              <p className="mt-1 leading-[1.75] text-body">
                Worked on machine-learning evaluations for large-scale
                social-network analysis for online social media platforms.
              </p>
            </li>
            <li>
              <div className="flex items-start justify-between gap-6">
                <p className="leading-[1.75] text-body">
                  Software Engineering Intern &middot;{" "}
                  <InlineLink href="https://brite.stanford.edu/experience/2024cohort/">
                    Stanford Medicine
                  </InlineLink>
                </p>
                <span className="shrink-0 whitespace-nowrap pt-[3px] text-[13px] tracking-[0.02em] text-label">
                  Jun &ndash; Aug 2024
                </span>
              </div>
              <p className="mt-1 leading-[1.75] text-body">
                Built a mobile app for researchers used across the Stanford
                Research Park community.
              </p>
            </li>
          </ul>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mt-24 scroll-mt-24 space-y-6 sm:mt-28"
        >
          <h2
            id="projects-heading"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-label"
          >
            Projects
          </h2>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-6">
              <p className="leading-[1.75] text-body">
                <InlineLink href="https://devpost.com/software/dot-bringing-humanity-to-in-home-care">
                  <span className="font-medium">.dot</span>
                </InlineLink>{" "}
                &mdash; a voice-first AI companion that lets elderly patients
                access their full medical records through natural conversation.
              </p>
              <span className="shrink-0 whitespace-nowrap pt-[3px] text-[13px] tracking-[0.02em] text-label">
                Feb 2026
              </span>
            </div>
            <p className="leading-[1.75] text-body">
              Won{" "}
              <InlineLink href="https://devpost.com/software/dot-bringing-humanity-to-in-home-care">
                <span className="font-medium">Best Voice AI for Healthcare</span>
              </InlineLink>{" "}
              at{" "}
              <InlineLink href="https://www.treehacks.com/">
                TreeHacks 2026
              </InlineLink>
              .
            </p>
            <p className="text-[14px] text-label">
              <InlineLink href="https://devpost.com/software/dot-bringing-humanity-to-in-home-care">
                DevPost
              </InlineLink>
              <span> &middot; </span>
              <InlineLink href="https://github.com/o-bm/dot">GitHub</InlineLink>
            </p>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mb-32 mt-24 scroll-mt-24 space-y-6 sm:mt-28"
        >
          <h2
            id="contact-heading"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-label"
          >
            Contact
          </h2>
          <p className="leading-[1.75] text-body">
            The fastest way to reach me is a note on{" "}
            <InlineLink href="https://www.linkedin.com/in/raiyanhaque/">
              LinkedIn
            </InlineLink>{" "}
            or a DM on{" "}
            <InlineLink href="https://x.com/haque_raiy16684">X</InlineLink>.
          </p>
          <p className="text-body">
            <InlineLink href="https://www.linkedin.com/in/raiyanhaque/">
              LinkedIn
            </InlineLink>
            <span className="text-label"> &middot; </span>
            <InlineLink href="https://x.com/haque_raiy16684">X</InlineLink>
            <span className="text-label"> &middot; </span>
            <InlineLink href="https://github.com/rhaque1234">GitHub</InlineLink>
          </p>
        </section>
      </main>

      <footer>
        <div className="mx-auto max-w-[720px] px-6 py-10 text-[13px] text-label sm:px-10">
          <p>&copy; 2026 Raiyan Haque</p>
        </div>
      </footer>
    </>
  );
}
